import React, { useEffect, useRef, useState } from 'react';

interface TypewriterSegment {
  text: string;
  /** Optional styling for this run of text (e.g. a gradient on a name). */
  className?: string;
  /** Render a line break before this segment. */
  breakBefore?: boolean;
}

interface TypewriterProps {
  segments: TypewriterSegment[];
  /** Milliseconds spent on each character. */
  speed?: number;
  /** Delay before the first character is typed, in milliseconds. */
  startDelay?: number;
  /** Remove the caret once typing completes (e.g. when another typer takes over). */
  hideCaretOnComplete?: boolean;
  /** Called once when the full text has finished typing. */
  onComplete?: () => void;
  className?: string;
}

const prefersReducedMotion = (): boolean =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const Typewriter: React.FC<TypewriterProps> = ({
  segments,
  speed = 85,
  startDelay = 400,
  hideCaretOnComplete = false,
  onComplete,
  className = '',
}) => {
  const totalChars = segments.reduce(
    (sum, segment) => sum + segment.text.length,
    0
  );

  // Honor reduced-motion: render the full text immediately, no typing.
  const [reduceMotion] = useState(prefersReducedMotion);
  const [typedCount, setTypedCount] = useState(() =>
    reduceMotion ? totalChars : 0
  );

  const isDone = typedCount >= totalChars;
  const hasCompletedRef = useRef(false);

  useEffect(() => {
    if (isDone) return;

    const delay = typedCount === 0 ? startDelay : speed;
    const timer = setTimeout(() => setTypedCount((count) => count + 1), delay);

    return () => clearTimeout(timer);
  }, [typedCount, isDone, speed, startDelay]);

  // Notify the parent exactly once when the text is fully typed.
  useEffect(() => {
    if (isDone && !hasCompletedRef.current) {
      hasCompletedRef.current = true;
      onComplete?.();
    }
  }, [isDone, onComplete]);

  // The caret sits at the end of the segment that is currently being typed.
  const activeIndex = (() => {
    let consumed = 0;
    for (let i = 0; i < segments.length; i += 1) {
      consumed += segments[i].text.length;
      if (typedCount < consumed) return i;
    }
    return segments.length - 1;
  })();

  // Caret stays solid while typing, blinks once the text is complete.
  const caretAnimation = isDone && !reduceMotion ? 'animate-blink' : '';
  const showCaret = !(isDone && hideCaretOnComplete);

  let remaining = typedCount;

  return (
    <span className={className}>
      {segments.map((segment, index) => {
        const visibleText = segment.text.slice(
          0,
          Math.max(0, Math.min(remaining, segment.text.length))
        );
        remaining -= segment.text.length;

        return (
          <React.Fragment key={index}>
            {segment.breakBefore && <br />}
            <span className={segment.className}>{visibleText}</span>
            {index === activeIndex && showCaret && (
              <span
                aria-hidden='true'
                className={`inline-block w-[3px] sm:w-1 ml-2 rounded-full align-middle bg-brand-500 dark:bg-brand-400 ${caretAnimation}`}
                style={{ height: '0.8em' }}
              />
            )}
          </React.Fragment>
        );
      })}
    </span>
  );
};

export default Typewriter;
