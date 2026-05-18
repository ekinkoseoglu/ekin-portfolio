import portfolioImg from './assets/Portfolio.jpeg';
import ourLoveCanvasLogo from './assets/our-love-canvas-logo.png';
import {
  Education,
  Experience,
  Project,
  SkillCategory,
  Testimonial,
} from './types';

export const PERSONAL_INFO = {
  name: 'Ekin Köseoğlu',
  title: 'Full Stack Software Engineer | Indie Hacker',
  location: 'Ankara, Turkey',
  email: 'ekindkoseoglu@gmail.com',
  phone: '+90 538 416 19 45',
  github: 'https://github.com/ekinkoseoglu',
  linkedin: 'https://linkedin.com/in/koseogluekin', // Assumed based on context
  about: `Ekin Deniz Köseoğlu is a Full Stack Software Engineer driven by passion and innovation. He began his academic journey in 2017 at Karabuk University, Turkey, studying Electrical and Electronics Engineering.

  He specializes in Javascript, React, Angular, NodeJS, NestJS, .NET, various SQL technologies and Git. Beyond coding, he is fascinated by AI, Machine Learning, Deep Learning, entrepreneurship, and project management. He currently works as both a technical leader and manager for various startup projects.`,
  avatar: portfolioImg,
};

export const EXPERIENCES: Experience[] = [
  {
    company: 'Siren Bilişim Yazılım',
    role: 'Full Stack Engineer',
    period: 'Apr 2025 - Present',
    location: 'Ankara, Türkiye · Hybrid',
    description: [
      'Working as part of a professional team responsible for developing and debugging the SMArt application used within the company by the international security company Securitas.',
    ],
    skills: ['.NET Core', 'React.js', 'MSSQL', 'Mean Stack', 'SaaS'],
  },
  {
    company: 'Metek Group A.Ş.',
    role: 'Full Stack Engineer',
    period: 'Nov 2024 - Apr 2025',
    location: 'Çankaya, Ankara, Türkiye · On-site',
    description: [
      'Developed new features for the Employee Timesheet Calculation and Reporting Application on both frontend and backend platforms.',
      'Collaborated with cross-functional teams to enhance the user experience and functionality of the application.',
      'Implemented innovative solutions to improve efficiency and accuracy in timesheet calculations.',
    ],
    skills: ['.NET Core', 'MySQL', 'ASP.NET', 'C#', 'SaaS'],
  },
  {
    company: 'Cerebrum Tech',
    role: 'Frontend Developer',
    period: 'Dec 2023 - Oct 2024',
    location: 'Ankara, Turkey · Hybrid',
    description: [
      'Contributed to the Frontend Development team of the Cere Insight Project, displaying detailed AI summarization results.',
      'Conducted thorough research on the functionality of AI and various AI models under different conditions.',
    ],
    skills: ['React.js', 'AI', 'LLM', 'Machine Learning', 'SaaS'],
  },
  {
    company: 'Vendrops Technologies',
    role: 'Full Stack Engineer',
    period: 'Nov 2022 - Dec 2023',
    location: 'Istanbul, Turkey · Remote',
    description: [
      'Part of the multi-portal Task Management Application team.',
      'Added new features on those platforms in both frontend and Backend sides.',
      'Fixed bugs in both frontend and Backend sides.',
    ],
    skills: ['Angular', '.NET Core', 'SaaS', 'TypeScript'],
  },
  {
    company: 'Jotform',
    role: 'Frontend Developer Intern',
    period: 'Jun 2022 - Aug 2022',
    location: 'Ankara, Turkey',
    description: [
      'Part of the Frontend Development team of the Sentiment Analysis Project.',
      'Worked on showing detailed sentiment results of clients writing ticket messages.',
      'Researched convenient AI for true Sentiment Results.',
    ],
    skills: ['React.js', 'Redux', 'SaaS', 'AI integration'],
  },
  {
    company: 'AselsanNET Ltd.',
    role: 'Electrical Electronic Engineering Intern',
    period: 'Jul 2021 - Aug 2021',
    location: 'Ankara, Türkiye',
    description: [
      'Worked as part of backend and frontend development team of item shipping platform prototype.',
      "Comprehensive Research for the 'Major differences between using Modbus and Ethernet TCP/IP'.",
    ],
    skills: ['Troubleshooting', 'Research'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'sentiment-analysis',
    title: 'Sentiment Analysis UI',
    period: 'Jul 2022 - Present',
    description:
      'Analyzes ticket message texts written by customers to determine mood (Emoji & Star Rate) helping support teams prioritize urgent tickets. Uses Tensorflow AI.',
    techStack: [
      'React',
      'Redux',
      'Tensorflow.js',
      'Material UI',
      'Formik',
      'Yup',
      'Axios',
    ],
    repoLink: 'https://github.com/ekinkoseoglu/Sentiment-Analysis',
    detailedContent: `
      <h2>Sentiment Analysis</h2>
      <p>With my Sentiment Analysis (React) project, by analyzing the ticket message texts written by the customers who have any complaints about the company's products in the Ticket Forms, where they indicate their complaints, determine their mood, showing these results to the Support team with an Emoji and "Star Rate", I can tell the support team which ticket is more urgently answered. I have a project with a Request for APIs using Tensorflow AI, which helps to decide what is needed.</p>
      
      <h3>Used Technologies And Principles</h3>
      <ul>
        <li>Axios (CRUD API Operations)</li>
        <li>Javascript Fetch API</li>
        <li>React Router Dom (Router Manipulation)</li>
        <li>Redux</li>
        <li>Jotform CSS</li>
        <li>Built-in Html and Javascript Form features</li>
        <li>Material UI</li>
        <li>Formik (for third party form state package)</li>
        <li>Semantic UI React</li>
        <li>Yup (For creating form Validation schemas)</li>
      </ul>
    `,
  },
  {
    id: 'ecommerce-backend',
    title: 'E-Commerce Backend',
    period: 'Jul 2021 - Present',
    description:
      'Backend for E-Commerce Prototype. Implements Layered Architecture, Generic Repository Pattern, Unit of Work, JWT, and Caching.',
    techStack: [
      '.NET Core 5.0',
      'SQL Server',
      'Entity Framework',
      'Redis',
      'Autofac',
      'FluentValidation',
    ],
    repoLink: 'https://github.com/ekinkoseoglu/FinalProject',
    detailedContent: `
      <h2>E-Commerce Backend Prototype</h2>
      <p>It is the backend project provides E-Commerce Prototype service. This project strictly implements the OOP, SOLID and AOP principles. An objective approach was followed throughout the project. The project also has unit testing. In addition to the backend project, the frontend part with Angular continues to be developed.</p>

      <h3>Used Technologies And Principles</h3>
      <ul>
        <li>ASP.NET Core 5.0</li>
        <li>Layered Architecture (Core, Entity, DataAccess, Business, API Layers)</li>
        <li>SQL Server 2019</li>
        <li>Entity Framework Core 5</li>
        <li>Generic Repository Pattern / Unit of Work Pattern / Adapter Pattern</li>
        <li>RESTful API</li>
        <li>OOP, AOP, SOLID</li>
        <li>JWT (JSON Web Token)</li>
        <li>Password Hashing / Salting</li>
        <li>Redis / InMemory Cache (As alternative to each other)</li>
        <li>IoC</li>
        <li>Autofac</li>
        <li>FluentValidation</li>
      </ul>

      <h3>🗂️ Layers</h3>
      <h4>📁 Entities Layer</h4>
      <p>It is the layer created to hold database objects to be used in the project. It consists of three sub-folders.</p>
      <ol>
        <li>The Abstract folder has been moved to the Core layer to keep the abstract objects (Abstract folder has been moved to the Core layer since it contains common codes in the projects that will be developed later.)</li>
        <li>Concrete folder for holding concrete objects</li>
        <li>The folder DTOs is used to give different properties to objects and to combine tables in the database.</li>
      </ol>

      <pre>
📂Abstract
    📋 IEntity
📂 Concrete
    📋 Category
    📋 Product
    📋 ProductImages
📂 DTOs
    📋 ProductDeailDto
      </pre>

      <h4>📁 DataAccess Layer</h4>
      <p>Database is the data access layer established to perform CRUD operations. It consists of two subfolders. 1.Abstract folder to hold abstract objects, 2.Concrete folder to hold concrete objects.</p>

      <pre>
📂Abstract
    📋 ICategoryDal
    📋 IProductDal
    📋 IProductImagesDal
📂 Concrete
   📂 EntityFrameWork
         📋 EfCategoryDal
         📋 EfProductDal
         📋 EfProductImagesDal
         📋 ProductDbContext
      </pre>

      <h4>📁 Business Layer</h4>
      <p>It is the layer that processes the data captured by DataAccess from the database to the project. In other words, it is the layer on which workloads are written.</p>

      <pre>
📂Abstract
    📋 ICategoryService
    📋 IProductImagesService
    📋 IProductService
📂Concrete
    📋 CategoryManager
    📋 ProductImagesManager
    📋 ProductManager
📂Constants
    📋 Messages
📂DependecyResolvers
   📂 Autofac
         📋 AutofacBusinessModule
      </pre>

      <h4>📁 Core Layer</h4>
      <p>It is a universal layer with common codes to be used in all projects. It consists of seven sub-folders: Aspects, CrossCuttingConcerns, DataAccess, Entities, DependecyResolvers, Extensions, and Utilities.</p>

      <pre>
📂Aspect
   📂 Autofac
      📂 Caching
         📋 CacheAspect
         📋 CacheRemoveAspect
      📂 Performance
         📋 PerformanceAspect
      📂 Transactional
         📋 TransactionScopeAspect
      📂 Validation
         📋 ValidationAspect
📂CrossCuttingConcerns
      📂 Caching
         📂 Microsoft
            📋 MemoryCacheManager
      📂 Validation
         📋 ValidationTool
📂DataAccess
      📂 EntityFramework
         📋 EfEntityRepositoryBase
📂DependecyResolvers
    📋 CoreModule
📂Entities
    📋 IDto
      📂Concrete
         📋 OperationClaim
         📋 User
         📋 UserOperationClaim
      </pre>

      <h4>📁 WebAPI Layer</h4>
      <pre>
📂Controllers
  📋 CategoriesController
  📋 ProductImagesController
  📋 ProductsController
      </pre>
    `,
  },
  {
    id: 'car-rental-frontend',
    title: 'Car Rental Frontend',
    period: 'May 2021 - Present',
    description:
      'Frontend for CarRental Project structured with Angular 13. Features modules, routing, guards, and observables.',
    techStack: ['Angular 13', 'TypeScript', 'RxJS', 'Bootstrap'],
    repoLink: 'https://github.com/ekinkoseoglu/ReCap-Frontend',
    detailedContent: `
      <h2>Car Rental Frontend (Angular)</h2>
      <p>This is the Frontend side of my CarRental Project which is structured with Angular 13.</p>

      <h3>Used Technologies And Principles</h3>
      <ul>
        <li>NG Modules</li>
        <li>Routing and navigation</li>
        <li>Dependency injection</li>
        <li>Lifecycle hooks</li>
        <li>Observables and event processing</li>
        <li>Angular elements</li>
        <li>Forms</li>
        <li>Authentication and Authorization</li>
      </ul>
    `,
  },
  {
    id: 'car-rental-backend',
    title: 'Car Rental Backend',
    period: 'Jan 2020 - Present',
    description:
      'Strictly implements OOP, SOLID and AOP principles. Provides car rental service API with extensive unit testing.',
    techStack: ['.NET Core', 'AOP', 'SOLID', 'JWT', 'SQL Server'],
    repoLink: 'https://github.com/ekinkoseoglu/ReCapProject',
    detailedContent: `
      <h2>Car Rental Backend</h2>
      <p>It is the backend project provides car rental service. This project strictly implements the OOP, SOLID and AOP principles. An objective approach was followed throughout the project. The project also has unit testing. In addition to the backend project, the frontend part with Angular continues to be developed.</p>

      <h3>Used Technologies And Principles</h3>
      <ul>
        <li>ASP.NET Core 5.0</li>
        <li>Layered Architecture (Core, Entity, DataAccess, Business, API Layers)</li>
        <li>SQL Server 2019</li>
        <li>Entity Framework Core 5</li>
        <li>Generic Repository Pattern / Unit of Work Pattern / Adapter Pattern</li>
        <li>RESTful API</li>
        <li>OOP, AOP, SOLID</li>
        <li>JWT (JSON Web Token)</li>
        <li>Password Hashing / Salting</li>
        <li>Redis / InMemory Cache (As alternative to each other)</li>
        <li>IoC</li>
        <li>Autofac</li>
        <li>FluentValidation</li>
      </ul>

      <h3>🗂️ Layers</h3>
      
      <h4>📁 Entities Layer</h4>
      <p>It is the layer created to hold database objects to be used in the project. It consists of three sub-folders.</p>
      <pre>
📂Abstract
    📋 IEntity
📂 Concrete
    📋 Category
    📋 Product
    📋 ProductImages
📂 DTOs
    📋 ProductDeailDto
      </pre>

      <h4>📁 DataAccess Layer</h4>
      <p>Database is the data access layer established to perform CRUD operations.</p>
      <pre>
📂Abstract
    📋 ICategoryDal
    📋 IProductDal
    📋 IProductImagesDal
📂 Concrete
   📂 EntityFrameWork
         📋 EfCategoryDal
         📋 EfProductDal
         📋 EfProductImagesDal
         📋 ProductDbContext
      </pre>

      <h4>📁 Business Layer</h4>
      <p>It is the layer that processes the data captured by DataAccess from the database to the project. In other words, it is the layer on which workloads are written.</p>
      <pre>
📂Abstract
    📋 ICategoryService
    📋 IProductImagesService
    📋 IProductService
📂Concrete
    📋 CategoryManager
    📋 ProductImagesManager
    📋 ProductManager
📂Constants
    📋 Messages
📂DependecyResolvers
   📂 Autofac
         📋 AutofacBusinessModule
      </pre>
      
      <h4>📁 Core Layer</h4>
      <p>It is a universal layer with common codes to be used in all projects. It consists of seven sub-folders.</p>
      <pre>
📂Aspect
   📂 Autofac
      📂 Caching
         📋 CacheAspect
         📋 CacheRemoveAspect
      📂 Performance
         📋 PerformanceAspect
      📂 Transactional
         📋 TransactionScopeAspect
      📂 Validation
         📋 ValidationAspect
      </pre>

      <h4>📁 WebAPI Layer</h4>
      <pre>
📂Controllers
  📋 CategoriesController
  📋 ProductImagesController
  📋 ProductsController
      </pre>
    `,
  },
  {
    id: 'ecommerce-frontend-react',
    title: 'E-Commerce Frontend (React)',
    period: 'May 2021 - Present',
    description:
      'This is the Frontend side of my E-Commerce Project that structured with React.',
    techStack: ['React', 'Redux', 'Axios', 'Material UI', 'Formik'],
    repoLink: 'https://github.com/ekinkoseoglu/campFronted-React',
    detailedContent: `
      <h2>E-Commerce Frontend (React)</h2>
      <p>This is the Frontend side of my E-Commerce Project which is structured with React.</p>

      <h3>Used Technologies And Principles</h3>
      <ul>
        <li>Axios (CRUD API Operations)</li>
        <li>Javascript Fetch API</li>
        <li>React Router Dom (Router Manipulation)</li>
        <li>Redux</li>
        <li>Built-in Html and Javascript Form features</li>
        <li>Material UI</li>
        <li>Formik (for third party form state package)</li>
        <li>Yup (For creating form Validation schemas)</li>
        <li>Semantic UI React</li>
      </ul>
    `,
  },
  {
    id: 'laravel-dental-api',
    title: 'Laravel Dental API',
    period: 'Oct 2021 - Dec 2021',
    description:
      'Created for testing Controller actions on Models representing Wordpress tables for API creation in Laravel.',
    techStack: ['PHP', 'Laravel', 'MySQL'],
    repoLink: 'https://github.com/ekinkoseoglu',
    detailedContent: `
      <h2>Laravel Dental Company API (Back-End)</h2>
      <p>This project has created for testing Controllers actions on Models that represents Wordpress tables for API creation in Laravel Framework.</p>
    `,
  },
];

export const VIBE_CODED_PROJECTS: Project[] = [
  {
    id: 'our-love-canvas',
    title: 'OurLoveCanvas',
    period: '2025 - Present',
    image: ourLoveCanvasLogo,
    description:
      'SaaS platform that lets users build romantic, personalized websites for their loved ones from a gallery of templates, with a seamless preview → payment → publish flow and a hosted custom subdomain.',
    techStack: [
      'React 19',
      'TypeScript',
      'NestJS 11',
      'Prisma',
      'MySQL',
      'Stripe',
      'Cloudflare R2',
      'Docker',
      'Nginx',
      'i18next',
    ],
    repoLink: 'https://github.com/ekinkoseoglu',
    detailedContent: `
      <h2>OurLoveCanvas — Personalized Romantic Websites</h2>
      <p>OurLoveCanvas is a full-stack SaaS product I designed and built end-to-end. It empowers anyone to create a beautifully personalized website for someone they love — from a curated library of romantic templates — and publish it on a custom subdomain that can be shared with a single link.</p>

      <h3>Product Highlights</h3>
      <ul>
        <li><strong>Template gallery &amp; live customization</strong> — users browse a catalog of romantic landing-page templates, personalize text, images and media, and watch their changes render in real time.</li>
        <li><strong>Three-step preview pipeline</strong> — create website record → batch-upload compressed images to Cloudflare R2 → finalize HTML preview.</li>
        <li><strong>Stripe-powered checkout</strong> — payments are confirmed via Stripe webhooks; once published, sites are locked to protect the customer's final version.</li>
        <li><strong>Personalized hosted sites</strong> — every published canvas is served on a custom subdomain (<code>websiteId.username.ourlovecanvas.com</code>).</li>
        <li><strong>Authentication</strong> — email / username / password registration <em>plus</em> Google OAuth, backed by JWT and bcrypt with hash + salt fields.</li>
        <li><strong>Internationalization</strong> — i18next with browser language detection, ready for global users.</li>
      </ul>

      <h3>Engineering</h3>
      <ul>
        <li><strong>Frontend:</strong> React 19 + TypeScript + Vite, Redux Toolkit, React Router, MUI 9 with custom branding (Playfair Display + Plus Jakarta Sans), Sass modules, Axios.</li>
        <li><strong>Backend:</strong> NestJS 11 with Prisma ORM on MySQL 8, Passport.js (JWT + Google OAuth), Stripe SDK, Nodemailer.</li>
        <li><strong>Infrastructure:</strong> Multi-stage Docker builds, separate <code>docker-compose</code> stacks for dev and prod, Nginx reverse proxy with SPA routing, Sentry for error tracking, Winston for structured logging.</li>
        <li><strong>Data layer:</strong> Soft-delete enforced everywhere (<code>isDeleted</code>, <code>deletedAt</code>, <code>deletedBy</code>) with full audit trail (<code>createdBy</code> / <code>updatedBy</code>).</li>
        <li><strong>Image pipeline:</strong> Browser-side compression to ≤0.5 MB before parallel batch upload to R2 with UUID + timestamp keys.</li>
        <li><strong>API contract:</strong> Standardized JSON envelope <code>{success, message, data, timestamp}</code> across every endpoint.</li>
      </ul>

      <h3>Status</h3>
      <p>Production-ready architecture with TLS/HTTPS support, health checks, and environment-variable configuration. Currently an advanced MVP with active feature development. Repository is private — see the GitHub profile link above for related work.</p>
    `,
  },
  {
    id: 'post-creator',
    title: 'PostCreator',
    period: '2025 - Present',
    description:
      'AI-powered content operating system that generates, reviews, and publishes platform-native posts across X, LinkedIn, Instagram, YouTube, TikTok, and Medium using an 8-agent OpenRouter pipeline with a human-in-the-loop approval workflow.',
    techStack: [
      'Turborepo',
      'NestJS 10',
      'React 18',
      'Vite',
      'Prisma',
      'MySQL',
      'Redis',
      'BullMQ',
      'OpenRouter',
      'Tailwind CSS',
      'TanStack Query',
      'Docker',
    ],
    repoLink: 'https://github.com/ekinkoseoglu',
    detailedContent: `
      <h2>PostCreator — AI Content OS for Social Channels</h2>
      <p>PostCreator is a production-grade content generation and publishing system I built for the OurLoveCanvas brand. It uses an 8-agent AI pipeline to draft platform-native posts, routes them through a human review workflow, and publishes them across six social platforms — with real X (Twitter) OAuth integration shipping live posts.</p>

      <h3>Product Highlights</h3>
      <ul>
        <li><strong>8-stage AI agent pipeline</strong> — brand strategist → audience research → campaign planning → platform adaptation → creative writing → taste &amp; safety review → revision agents. Powered by OpenRouter (Claude 3.5 Sonnet for reasoning, GPT-4o-mini for writing) with Zod-validated structured outputs.</li>
        <li><strong>Six-platform publishing</strong> — X (Twitter), LinkedIn, Instagram, YouTube, TikTok, Medium. Real OAuth 2.0 PKCE flow for X; mock providers for the rest, with a progressive rollout strategy.</li>
        <li><strong>Human-in-the-loop approval</strong> — finite-state machine <code>NEEDS_REVIEW → APPROVED → PUBLISHED</code> with edit-revert logic, rejection feedback, and an immutable <code>ApprovalEvent</code> audit log. AI can never approve or publish — only humans can.</li>
        <li><strong>Asynchronous job processing</strong> — BullMQ on Redis for content generation and email notifications; automatic retry with exponential backoff (3 attempts).</li>
        <li><strong>Publish safety lock</strong> — 10-rule policy engine prevents unapproved or already-published posts from being re-published.</li>
      </ul>

      <h3>Engineering</h3>
      <ul>
        <li><strong>Monorepo:</strong> npm workspaces + Turborepo v2 with full type safety across apps and workers. Shared packages: <code>@olc/shared</code>, <code>@olc/ai-agents</code>, <code>@olc/social-providers</code>, <code>@olc/email</code>, <code>@olc/storage</code>, <code>@olc/analytics</code>.</li>
        <li><strong>Backend:</strong> NestJS 10 REST API + Prisma v5 ORM on MySQL, Redis for cache + queues, class-validator / class-transformer for DTOs.</li>
        <li><strong>Frontend:</strong> React 18 + Vite 5, Tailwind CSS v3, TanStack Query v5 for server state.</li>
        <li><strong>Security:</strong> AES-256-GCM encrypted token storage for OAuth credentials.</li>
        <li><strong>Resilience:</strong> Feature flags (<code>MOCK_AI</code>, <code>MOCK_EMAIL</code>, <code>MOCK_STORAGE</code>, <code>MOCK_SOCIAL_PUBLISH</code>) allow full local dev without external API keys.</li>
        <li><strong>Containerization:</strong> Docker Compose with MySQL 8 + Redis 7-alpine.</li>
      </ul>

      <h3>Status</h3>
      <p>Advanced MVP — 10 of 15 planned milestones complete. Core workflows (generate → review → publish) are fully functional with live OpenRouter AI and live X publishing. Remaining work: LangGraph workflow agents, R2 asset storage, and final hardening. Repository is private — see the GitHub profile link above for related work.</p>
    `,
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      'React.js',
      'Angular',
      'TypeScript',
      'JavaScript (ES6+)',
      'Redux',
      'HTML5/CSS3',
      'Tailwind',
      'Material UI',
      'Semantic UI',
    ],
  },
  {
    title: 'Backend',
    skills: [
      '.NET Core',
      'C#',
      'NodeJS',
      'NestJS',
      'Laravel (PHP)',
      'ASP.NET Web API',
      'Entity Framework',
    ],
  },
  {
    title: 'Database & DevOps',
    skills: ['MSSQL', 'MySQL', 'MongoDB', 'Redis', 'Git', 'Docker', 'Azure'],
  },
  {
    title: 'Concepts & Others',
    skills: [
      'OOP',
      'SOLID',
      'AOP',
      'SaaS',
      'AI/ML Integration',
      'Unit Testing',
      'Microservices',
    ],
  },
];

export const EDUCATION: Education[] = [
  {
    school: 'Karabuk University',
    degree: 'Bachelor in Electrical - Electronic Engineering',
    year: '2017 - 2023',
  },
  {
    school: 'Dikmen Teknik ve Mesleki Anadolu Lisesi',
    degree: 'Technical Software Faculty',
    year: '2013 - 2017',
  },
];

export const TESTIMONIAL: Testimonial = {
  name: 'Philin (Supisara K.)',
  role: 'Intercultural Coaching for Expats',
  connection: 'Worked on the same team',
  text: 'Ms. Klinchongkol (colleague) stated: Ekin is an exceptional partner. His deep industry knowledge, strategic approach, and commitment to our shared vision have been invaluable. He excels at translating user needs into impactful product features and tackles complex challenges with efficiency and quality.',
};
