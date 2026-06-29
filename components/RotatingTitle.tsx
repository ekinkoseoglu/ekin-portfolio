import React, { useEffect, useState } from 'react';

interface RotatingTitleProps {
  /** Titles to cycle through, in order. */
  phrases: string[];
  /** Milliseconds per character while typing. */
  typingSpeed?: number;
  /** Milliseconds per character while deleting. */
  deletingSpeed?: number;
  /** How long a completed title stays before it is deleted (ms). */
  holdDuration?: number;
  /** Pause after a title is cleared, before the next one types (ms). */
  pauseBetween?: number;
  /** Delay before the cycle starts — used to begin after the name finishes (ms). */
  startDelay?: number;
  className?: string;
}

const prefersReducedMotion = (): boolean =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const RotatingTitle: React.FC<RotatingTitleProps> = ({
  phrases,
  typingSpeed = 55,
  deletingSpeed = 30,
  holdDuration = 1400,
  pauseBetween = 350,
  startDelay = 1500,
  className = '',
}) => {
  const [reduceMotion] = useState(prefersReducedMotion);
  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Start the cycle after the initial delay so it follows the name animation.
  useEffect(() => {
    if (reduceMotion) return;

    const timer = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(timer);
  }, [reduceMotion, startDelay]);

  useEffect(() => {
    if (reduceMotion || !started || phrases.length === 0) return;

    const current = phrases[index % phrases.length];

    // Fully typed → hold the word, then begin deleting.
    if (!isDeleting && charCount === current.length) {
      const timer = setTimeout(() => setIsDeleting(true), holdDuration);
      return () => clearTimeout(timer);
    }

    // Fully deleted → advance to the next title after a short pause.
    if (isDeleting && charCount === 0) {
      const timer = setTimeout(() => {
        setIsDeleting(false);
        setIndex((i) => (i + 1) % phrases.length);
      }, pauseBetween);
      return () => clearTimeout(timer);
    }

    // Type or delete a single character.
    const timer = setTimeout(
      () => setCharCount((count) => count + (isDeleting ? -1 : 1)),
      isDeleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(timer);
  }, [
    started,
    reduceMotion,
    index,
    charCount,
    isDeleting,
    phrases,
    typingSpeed,
    deletingSpeed,
    holdDuration,
    pauseBetween,
  ]);

  const visibleText = reduceMotion
    ? phrases[0] ?? ''
    : (phrases[index % phrases.length] ?? '').slice(0, charCount);

  return (
    <span className={className}>
      <span className='text-brand-600 dark:text-brand-400'>{visibleText}</span>
      <span
        aria-hidden='true'
        className={`inline-block w-[3px] sm:w-1 ml-1.5 rounded-full align-middle bg-brand-500 dark:bg-brand-400 ${
          reduceMotion ? '' : 'animate-blink'
        }`}
        style={{ height: '0.85em' }}
      />
    </span>
  );
};

export default RotatingTitle;
