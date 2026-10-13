/** Site copy in English. Same shape as es.js. */
const en = {
  lang: 'en',
  htmlLang: 'en',
  ogLocale: 'en_US',
  path: '/en',

  meta: {
    title: 'Melissa Fonnegra | Software Engineer · Frontend Developer',
    description:
      'Melissa Fonnegra Zapata, Software Engineer and Frontend Developer with 6+ years of experience in web development, headless Drupal with React and Next.js, WCAG accessibility and technical SEO.',
    ogDescription:
      'Frontend Developer at Dentsu: Figma designs turned into accessible websites for brands in banking, healthcare, retail and consumer goods.',
    twitterTitle: 'Melissa Fonnegra | Frontend Developer',
    jobTitle: 'Software Engineer · Frontend Developer & UI Specialist',
    keywords: [
      'Melissa Fonnegra',
      'Melissa Fonnegra Zapata',
      'Software Engineer',
      'Frontend Developer',
      'Headless Drupal',
      'React',
      'Next.js',
      'SASS',
      'WCAG accessibility',
      'Technical SEO',
      'Medellín',
      'Colombia',
    ],
    ogAlt: 'Melissa Fonnegra Zapata, Software Engineer and Frontend Developer',
    ogTagline: 'Software Engineer and Frontend Developer. Figma designs turned into accessible interfaces.',
    knowsAbout: ['Web accessibility (WCAG)', 'Technical SEO'],
  },

  ids: {
    home: 'home',
    content: 'content',
    about: 'about',
    strengths: 'how-i-work',
    skills: 'skills',
    projects: 'projects',
    experience: 'experience',
    contact: 'contact',
  },

  ui: {
    skip: 'Skip to content',
    mainNav: 'Main',
    logo: 'Melissa Fonnegra, back to top',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    dark: 'Dark mode',
    contrast: 'High contrast',
    inspect: 'Inspect',
    inspectOn:
      'Inspect mode on. Hover or Tab through the page to see each component. Press Escape to exit.',
    switchLang: { short: 'ES', label: 'Versión en español', href: '/', lang: 'es' },
  },

  nav: [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ],

  hero: {
    lead: 'Software Engineer and Frontend Developer at Dentsu. I turn Figma designs into accessible, detail-perfect websites for brands in banking, healthcare, retail and consumer goods.',
    primary: 'See projects',
    secondary: 'Get in touch',
    photoAlt:
      'Melissa Fonnegra Zapata, wearing glasses and a T-shirt, arms crossed against a gray background.',
    note: ['6+ years of experience, at Dentsu since 2020.', 'Based in Bello, Antioquia, Colombia.'],
    hint: 'Turn on “Inspect” in the menu and explore the page like a Figma file: you’ll see each component’s name, size and spacing.',
  },

  about: {
    title: 'About me',
    paragraphs: [
      "I'm a Software Engineer with 6+ years of experience in frontend development. Since 2020 I've worked at Dentsu, where I build and maintain corporate websites and landing pages for brands in banking, healthcare, retail and consumer goods, lead projects and work closely with clients.",
      'My strength is taking Figma prototypes to code: responsive, accessible interfaces that stay true to the design, organized with Atomic Design. I work with semantic HTML, SASS, Bootstrap 5, modern JavaScript, React and Next.js, and with Drupal as a decoupled (headless) CMS.',
      "I also take care of what isn't always visible: WCAG accessibility, technical SEO and tagging plans to measure results. I use AI tools to build layouts, refactor and fix issues faster, without compromising quality.",
    ],
    facts: [
      {
        term: 'Focus',
        detail:
          'Pixel-perfect front-end builds, design systems with Atomic Design, and headless Drupal with React and Next.js.',
      },
      {
        term: 'Industries',
        detail: 'Banking and finance, healthcare, retail and consumer goods, construction and technology.',
      },
      {
        term: 'Education',
        detail:
          'Software Engineering degree from Politécnico Grancolombiano; Systems Analysis and Development (ADSI) technologist and Software Programming technician from SENA.',
      },
      {
        term: 'Languages',
        detail: 'Spanish (native). Intermediate English for reading and writing; I’m currently improving my speaking to communicate better.',
      },
    ],
  },

  strengths: {
    title: 'How I work',
    lead: 'The technical side is half of my job. The other half is how I work with people, how I organize myself and how I take ownership of what I do.',
    values: 'Honesty, respect and responsibility define me.',
    items: [
      {
        title: 'Leading projects & teams',
        text: 'I lead projects and teams: I plan the work, make decisions and take ownership of getting every delivery right.',
      },
      {
        title: 'Mentoring new teammates',
        text: 'I guide people who join the team: I show them how we work and support them while they settle in.',
      },
      {
        title: 'Client communication',
        text: 'I talk directly with clients: I understand what they need and explain technical solutions in plain words.',
      },
      {
        title: 'Teamwork',
        text: 'I build good relationships with the people I work with, and I like the team moving forward together.',
      },
      {
        title: 'Commitment & initiative',
        text: 'I deliver on what I agree to, suggest improvements and analyze each problem before solving it.',
      },
      {
        title: 'Fast learner',
        text: 'I learn quickly and always look to grow. Right now, for example, I’m improving my spoken English.',
      },
    ],
  },

  skills: {
    title: 'What I work with',
    lead: 'The tools I use every day, from building layouts to measuring results.',
    sets: [
      {
        name: 'Frontend & UI development',
        skills: [
          'Semantic HTML5',
          'CSS3',
          'SASS',
          'Bootstrap 5',
          'Atomic Design',
          'Figma (Handoff / Dev Mode)',
          'Responsive design',
        ],
      },
      {
        name: 'JavaScript & frameworks',
        skills: [
          'JavaScript ES6+',
          'React.js',
          'Next.js',
          'jQuery',
          'REST APIs',
          'Modular reactive components',
        ],
      },
      {
        name: 'CMS & architecture',
        skills: [
          'Drupal 8, 9 & 10',
          'Decoupled Drupal / Headless CMS',
          'Basic PHP',
          'Basic SQL',
          'AI-assisted development',
        ],
      },
      {
        name: 'SEO, quality & analytics',
        skills: [
          'Technical SEO',
          'WCAG accessibility / a11y',
          'Tagging plans',
          'Digital analytics',
          'Git',
          'Bitbucket',
          'DDEV',
        ],
      },
    ],
  },

  projects: {
    title: 'Projects',
    lead: "My personal projects and the websites I've built for Dentsu clients.",
    personalTitle: 'Personal',
    workTitle: 'At Dentsu',
    stackLabel: 'Technologies at Dentsu',
    filterLabel: 'Filter by industry',
    countOne: '1 project',
    countMany: '{n} projects',
    nudge: { name: 'You', chat: 'Try a filter' },
    carousel: {
      role: 'carousel',
      label: 'Projects at Dentsu',
      slide: 'page',
      slideLabel: '{n} of {total}',
      prev: 'Previous page',
      next: 'Next page',
      goTo: 'Go to page {n}',
    },
    card: {
      site: 'View site',
      siteSr: ' for {title} (opens in a new tab)',
      code: 'View code',
      codeSr: ' for {title} on GitHub (opens in a new tab)',
      tags: '{title} technologies',
    },
    personal: [
      {
        slug: 'portfolio',
        title: 'Portfolio',
        description:
          'My portfolio, designed and built by me with Next.js, SASS and Atomic Design. Bilingual, accessible and SEO-ready. Turn on “Inspect” to see how each component is built.',
        tags: ['Next.js', 'React', 'SASS', 'Atomic Design', 'DDEV', 'Vercel'],
        github: 'https://github.com/melissafonnegra5/portfolio',
        demo: null,
        status: null,
      },
      {
        slug: 'retazos-negros',
        title: 'Retazos Negros',
        description:
          'My bilingual personal blog (Spanish and English), with per-language routes, technical SEO, structured data, RSS and a newsletter sign-up.',
        tags: ['Astro', 'i18n', 'SEO', 'JSON-LD', 'RSS'],
        github: null,
        demo: null,
        status: 'In progress',
      },
    ],
    stack: ['JavaScript ES6+', 'React', 'Next.js', 'HTML / CSS', 'Bootstrap 5', 'PHP', 'Drupal CMS'],
    sectors: [
      { key: 'all', label: 'All' },
      { key: 'salud', label: 'Healthcare' },
      { key: 'finanzas', label: 'Banking & finance' },
      { key: 'consumo', label: 'Retail & consumer' },
      { key: 'corporativo', label: 'Corporate & tech' },
    ],
    brands: [
      { name: 'Famisanar', type: 'Website', sector: 'salud' },
      { name: 'Nueva EPS', type: 'Website', sector: 'salud', url: 'https://nuevaeps.com.co/' },
      { name: 'Colsubsidio Salud', type: 'Website', sector: 'salud', url: 'https://salud.colsubsidio.com/' },
      { name: 'Banesco Panamá', type: 'Website', sector: 'finanzas' },
      { name: 'Ban100', type: 'Website', sector: 'finanzas', url: 'https://www.ban100.com.co/' },
      { name: 'Credivalores', type: 'Website', sector: 'finanzas' },
      { name: 'Mastercard', type: 'Loyalty campaigns', sector: 'finanzas' },
      { name: 'Diageo', type: 'Promotional landing pages', sector: 'consumo' },
      { name: 'FLA', type: 'Barú landing page', sector: 'consumo' },
      { name: 'Haceb Servicio', type: 'Website', sector: 'consumo' },
      { name: 'Haceb Blog', type: 'Website', sector: 'consumo' },
      { name: 'Línea Directa', type: 'Web app', sector: 'consumo' },
      { name: 'Colsubsidio.com', type: 'Website', sector: 'corporativo', url: 'https://www.colsubsidio.com/' },
      { name: 'Colsubsidio Teatro', type: 'Website', sector: 'corporativo', url: 'https://www.teatrocolsubsidio.com/' },
      { name: 'Constructora Bolívar', type: 'Website', sector: 'corporativo' },
      { name: 'Londoño Gómez', type: 'Website', sector: 'corporativo', url: 'https://londonogomez.com/' },
      { name: 'Grupo UMA', type: 'Website', sector: 'corporativo' },
      { name: 'Rappi', type: 'Website (About)', sector: 'corporativo' },
      { name: 'Navegg', type: 'Website', sector: 'corporativo', url: 'https://www.navegg.com/br' },
    ],
  },

  experience: {
    title: 'Experience',
    lead: 'My work at Dentsu and the education that brought me here.',
    work: 'Work',
    study: 'Education',
    items: [
      {
        id: 'dentsu',
        kind: 'work',
        role: 'Frontend Developer',
        place: 'Dentsu, Medellín',
        period: 'March 2021 – present',
        summary:
          'I build, lay out and maintain corporate websites, web apps and promotional landing pages for leading brands, with high technical and visual standards.',
        highlights: [
          'I lead projects, mentor new teammates and work directly with clients.',
          'Decoupled architecture: Drupal 8, 9 and 10 back ends integrated with React and Next.js front ends.',
          'Pixel-perfect translation of Figma prototypes (Dev Mode, variables and tokens) into code with Atomic Design.',
          'ES6+ JavaScript components: dynamic filters, simulators, calculators and breadcrumbs.',
          'WCAG 2.1 accessibility, technical SEO and tagging plans to measure conversions.',
          'AI-assisted development to build layouts, refactor and fix issues faster.',
          'Local environments with DDEV, Git and Bitbucket, plus ongoing production support.',
        ],
      },
      {
        id: 'dentsu-aprendiz',
        kind: 'work',
        role: 'Development Apprentice',
        place: 'Dentsu, Medellín',
        period: 'June – December 2020',
        summary:
          'I uploaded website content, managed web applications and built landing pages with HTML, SASS and Bootstrap.',
        highlights: [],
      },
      {
        id: 'poli',
        kind: 'study',
        role: 'Software Engineering',
        place: 'Politécnico Grancolombiano',
        period: '2022 – 2024',
        summary: "Bachelor's degree. Graduated.",
        highlights: [],
      },
      {
        id: 'adsi',
        kind: 'study',
        role: 'Technologist in Systems Analysis and Development (ADSI)',
        place: 'SENA Medellín',
        period: '2019 – 2020',
        summary: 'Technologist degree. Completed.',
        highlights: [],
      },
      {
        id: 'tecnico',
        kind: 'study',
        role: 'Software Programming Technician',
        place: 'SENA Medellín',
        period: '2017 – 2018',
        summary:
          'Technical degree. Completed, along with Agile Fundamentals (SENA) and the Virtual English Exchange Project.',
        highlights: [],
      },
    ],
  },

  contact: {
    title: "Let's talk",
    lead: 'Have a frontend role, a project, or want to talk headless Drupal? Write to me.',
    newTab: ' (opens in a new tab)',
    madeWith: 'Designed and built by me with Next.js, SASS and Atomic Design.',
  },
};

export default en;
