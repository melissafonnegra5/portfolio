/** Site copy in Spanish. en.js has the same shape. */
const es = {
  lang: 'es',
  htmlLang: 'es-CO',
  ogLocale: 'es_CO',
  path: '/',

  meta: {
    title: 'Melissa Fonnegra | Ingeniera de Software · Frontend Developer',
    description:
      'Melissa Fonnegra Zapata, Ingeniera de Software y Frontend Developer con más de 6 años de experiencia en desarrollo web, Drupal headless con React y Next.js, accesibilidad WCAG y SEO técnico.',
    ogDescription:
      'Frontend Developer en Dentsu: diseños de Figma convertidos en sitios accesibles para marcas de banca, salud, retail y consumo masivo.',
    twitterTitle: 'Melissa Fonnegra | Frontend Developer',
    jobTitle: 'Ingeniera de Software · Frontend Developer & UI Specialist',
    keywords: [
      'Melissa Fonnegra',
      'Melissa Fonnegra Zapata',
      'Ingeniera de Software',
      'Frontend Developer',
      'Drupal headless',
      'React',
      'Next.js',
      'SASS',
      'Accesibilidad WCAG',
      'SEO técnico',
      'Medellín',
      'Colombia',
    ],
    ogAlt: 'Melissa Fonnegra Zapata, Ingeniera de Software y Frontend Developer',
    ogTagline: 'Ingeniera de Software y Frontend Developer. Diseños de Figma convertidos en interfaces accesibles.',
    knowsAbout: ['Accesibilidad web (WCAG)', 'SEO técnico'],
  },

  ids: {
    home: 'inicio',
    content: 'contenido',
    about: 'sobre-mi',
    strengths: 'como-trabajo',
    skills: 'habilidades',
    projects: 'proyectos',
    experience: 'trayectoria',
    contact: 'contacto',
  },

  ui: {
    skip: 'Saltar al contenido',
    mainNav: 'Principal',
    logo: 'Melissa Fonnegra, ir al inicio',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    dark: 'Modo oscuro',
    contrast: 'Alto contraste',
    inspect: 'Inspeccionar',
    inspectOn:
      'Modo inspección activado. Pasa el mouse o navega con Tab para ver cada componente. Pulsa Escape para salir.',
    switchLang: { short: 'EN', label: 'English version', href: '/en', lang: 'en' },
  },

  nav: [
    { id: 'about', label: 'Sobre mí' },
    { id: 'skills', label: 'Habilidades' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'experience', label: 'Trayectoria' },
    { id: 'contact', label: 'Contacto' },
  ],

  hero: {
    lead: 'Ingeniera de Software y Frontend Developer en Dentsu. Convierto diseños de Figma en sitios web accesibles y fieles al detalle para marcas de banca, salud, retail y consumo masivo.',
    primary: 'Ver proyectos',
    secondary: 'Escríbeme',
    photoAlt:
      'Melissa Fonnegra Zapata, con gafas y camiseta, de brazos cruzados frente a un fondo gris.',
    note: ['Más de 6 años de experiencia, en Dentsu desde 2020.', 'Vivo en Bello, Antioquia.'],
    hint: 'Activa “Inspeccionar” en el menú y recorre la página como un archivo de Figma: verás el nombre, las medidas y los espacios de cada componente.',
  },

  about: {
    title: 'Sobre mí',
    paragraphs: [
      'Soy Ingeniera de Software con más de 6 años de experiencia en desarrollo frontend. Desde 2020 trabajo en Dentsu, donde construyo y mantengo portales corporativos y landing pages para marcas de banca, salud, retail y consumo masivo, lidero proyectos y trabajo de la mano con los clientes.',
      'Mi fuerte es llevar prototipos de Figma a código: interfaces responsivas, accesibles y fieles al diseño, organizadas con Atomic Design. Trabajo con HTML semántico, SASS, Bootstrap 5, JavaScript moderno, React y Next.js, y con Drupal como CMS desacoplado (headless).',
      'También cuido lo que no siempre se ve: accesibilidad WCAG, SEO técnico y planes de taggeo para medir resultados. Uso herramientas de IA para maquetar, refactorizar y resolver incidencias más rápido, sin perder calidad.',
    ],
    facts: [
      {
        term: 'Enfoque',
        detail:
          'Maquetación pixel-perfect, design systems con Atomic Design y Drupal headless con React y Next.js.',
      },
      {
        term: 'Sectores',
        detail: 'Banca y finanzas, salud, retail y consumo masivo, construcción y tecnología.',
      },
      {
        term: 'Formación',
        detail:
          'Ingeniería de Software en el Politécnico Grancolombiano; Tecnología ADSI y Técnico en Programación de Software en el SENA.',
      },
      {
        term: 'Idiomas',
        detail: 'Español nativo. Inglés intermedio en lectura y escritura; en conversación estoy mejorando para comunicarme cada vez mejor.',
      },
    ],
  },

  strengths: {
    title: 'Cómo trabajo',
    lead: 'Lo técnico es la mitad de mi trabajo. La otra mitad es cómo me relaciono con las personas, cómo me organizo y cómo respondo por lo que hago.',
    values: 'Me definen la honestidad, el respeto y la responsabilidad.',
    items: [
      {
        title: 'Liderazgo de proyectos y equipos',
        text: 'Lidero proyectos y equipos: planeo el trabajo, tomo decisiones y me hago cargo de que cada entrega salga bien.',
      },
      {
        title: 'Acompañamiento a personas nuevas',
        text: 'Guío a quienes llegan al equipo: les explico cómo trabajamos y los acompaño mientras se adaptan.',
      },
      {
        title: 'Comunicación con clientes',
        text: 'Hablo directamente con los clientes: entiendo lo que necesitan y les explico las soluciones técnicas en palabras sencillas.',
      },
      {
        title: 'Trabajo en equipo',
        text: 'Construyo buenas relaciones con las personas con las que trabajo y me gusta que el equipo avance junto.',
      },
      {
        title: 'Compromiso e iniciativa',
        text: 'Cumplo lo que acuerdo, propongo mejoras y analizo cada problema antes de resolverlo.',
      },
      {
        title: 'Aprendizaje rápido',
        text: 'Aprendo rápido y busco progresar siempre. Hoy, por ejemplo, estoy mejorando mi inglés hablado.',
      },
    ],
  },

  skills: {
    title: 'Con qué trabajo',
    lead: 'Las herramientas que uso en mi día a día, desde la maquetación hasta la medición de resultados.',
    sets: [
      {
        name: 'Frontend y maquetación UI',
        skills: [
          'HTML5 semántico',
          'CSS3',
          'SASS',
          'Bootstrap 5',
          'Atomic Design',
          'Figma (Handoff / Dev Mode)',
          'Responsive Design',
        ],
      },
      {
        name: 'JavaScript y frameworks',
        skills: [
          'JavaScript ES6+',
          'React.js',
          'Next.js',
          'jQuery',
          'APIs REST',
          'Componentes modulares reactivos',
        ],
      },
      {
        name: 'CMS y arquitectura',
        skills: [
          'Drupal 8, 9 y 10',
          'Drupal desacoplado / Headless CMS',
          'PHP básico',
          'SQL básico',
          'Desarrollo asistido por IA',
        ],
      },
      {
        name: 'SEO, calidad y analítica',
        skills: [
          'SEO técnico',
          'Accesibilidad WCAG / a11y',
          'Plan de taggeo',
          'Analítica digital',
          'Git',
          'Bitbucket',
          'DDEV',
        ],
      },
    ],
  },

  projects: {
    title: 'Proyectos',
    lead: 'Mis proyectos personales y los portales que he desarrollado para clientes de Dentsu.',
    personalTitle: 'Personales',
    workTitle: 'En Dentsu',
    stackLabel: 'Tecnologías en Dentsu',
    filterLabel: 'Filtrar por sector',
    countOne: '1 proyecto',
    countMany: '{n} proyectos',
    nudge: { name: 'Tú', chat: 'Prueba un filtro' },
    carousel: {
      role: 'carrusel',
      label: 'Proyectos en Dentsu',
      slide: 'página',
      slideLabel: '{n} de {total}',
      prev: 'Página anterior',
      next: 'Página siguiente',
      goTo: 'Ir a la página {n}',
    },
    card: {
      site: 'Ver sitio',
      siteSr: ' de {title} (se abre en una pestaña nueva)',
      code: 'Ver código',
      codeSr: ' de {title} en GitHub (se abre en una pestaña nueva)',
      tags: 'Tecnologías de {title}',
    },
    personal: [
      {
        slug: 'portfolio',
        title: 'Portfolio',
        description:
          'Mi portafolio, diseñado y desarrollado por mí con Next.js, SASS y Atomic Design. Bilingüe, accesible y con SEO técnico. Con el modo “Inspeccionar” puedes ver cómo está construido cada componente.',
        tags: ['Next.js', 'React', 'SASS', 'Atomic Design', 'DDEV', 'Vercel'],
        github: 'https://github.com/melissafonnegra5/portfolio',
        demo: null,
        status: null,
      },
      {
        slug: 'retazos-negros',
        title: 'Retazos Negros',
        description:
          'Mi blog personal bilingüe (español e inglés), con rutas por idioma, SEO técnico, datos estructurados, RSS y suscripción al newsletter.',
        tags: ['Astro', 'i18n', 'SEO', 'JSON-LD', 'RSS'],
        github: null,
        demo: null,
        status: 'En construcción',
      },
    ],
    stack: ['JavaScript ES6+', 'React', 'Next.js', 'HTML / CSS', 'Bootstrap 5', 'PHP', 'Drupal CMS'],
    sectors: [
      { key: 'all', label: 'Todos' },
      { key: 'salud', label: 'Salud' },
      { key: 'finanzas', label: 'Banca y finanzas' },
      { key: 'consumo', label: 'Retail y consumo' },
      { key: 'corporativo', label: 'Corporativo y tecnología' },
    ],
    brands: [
      { name: 'Famisanar', type: 'Portal web', sector: 'salud' },
      { name: 'Nueva EPS', type: 'Portal web', sector: 'salud', url: 'https://nuevaeps.com.co/' },
      { name: 'Colsubsidio Salud', type: 'Portal web', sector: 'salud', url: 'https://salud.colsubsidio.com/' },
      { name: 'Banesco Panamá', type: 'Portal web', sector: 'finanzas' },
      { name: 'Ban100', type: 'Portal web', sector: 'finanzas', url: 'https://www.ban100.com.co/' },
      { name: 'Credivalores', type: 'Portal web', sector: 'finanzas' },
      { name: 'Mastercard', type: 'Campañas de fidelización', sector: 'finanzas' },
      { name: 'Diageo', type: 'Landings promocionales', sector: 'consumo' },
      { name: 'FLA', type: 'Landing Barú', sector: 'consumo' },
      { name: 'Haceb Servicio', type: 'Portal web', sector: 'consumo' },
      { name: 'Haceb Blog', type: 'Portal web', sector: 'consumo' },
      { name: 'Línea Directa', type: 'Aplicación web', sector: 'consumo' },
      { name: 'Colsubsidio.com', type: 'Portal web', sector: 'corporativo', url: 'https://www.colsubsidio.com/' },
      { name: 'Colsubsidio Teatro', type: 'Portal web', sector: 'corporativo', url: 'https://www.teatrocolsubsidio.com/' },
      { name: 'Constructora Bolívar', type: 'Portal web', sector: 'corporativo' },
      { name: 'Londoño Gómez', type: 'Portal web', sector: 'corporativo', url: 'https://londonogomez.com/' },
      { name: 'Grupo UMA', type: 'Portal web', sector: 'corporativo' },
      { name: 'Rappi', type: 'Portal web (About)', sector: 'corporativo' },
      { name: 'Navegg', type: 'Portal web', sector: 'corporativo', url: 'https://www.navegg.com/br' },
    ],
  },

  experience: {
    title: 'Trayectoria',
    lead: 'Mi trabajo en Dentsu y la formación que me trajo hasta aquí.',
    work: 'Trabajo',
    study: 'Formación',
    items: [
      {
        id: 'dentsu',
        kind: 'work',
        role: 'Frontend Developer',
        place: 'Dentsu, Medellín',
        period: 'Marzo 2021 – hoy',
        summary:
          'Construyo, maqueto y mantengo portales corporativos, aplicaciones web y landing pages promocionales para marcas líderes, con alta exigencia técnica y visual.',
        highlights: [
          'Lidero proyectos, acompaño a las personas nuevas del equipo y hablo directamente con los clientes.',
          'Arquitectura desacoplada: backends en Drupal 8, 9 y 10 integrados con interfaces en React y Next.js.',
          'Traslado pixel-perfect de prototipos en Figma (Dev Mode, variables y tokens) a código con Atomic Design.',
          'Componentes en JavaScript ES6+: filtros dinámicos, simuladores, calculadoras y breadcrumbs.',
          'Accesibilidad WCAG 2.1, SEO técnico y planes de taggeo para medir conversiones.',
          'Desarrollo asistido por IA para maquetar, refactorizar y resolver incidencias más rápido.',
          'Entornos locales con DDEV, Git y Bitbucket, y soporte continuo a producción.',
        ],
      },
      {
        id: 'dentsu-aprendiz',
        kind: 'work',
        role: 'Aprendiz de desarrollo',
        place: 'Dentsu, Medellín',
        period: 'Junio – diciembre 2020',
        summary:
          'Cargaba contenido en sitios web, administraba aplicativos web y maquetaba landing pages con HTML, SASS y Bootstrap.',
        highlights: [],
      },
      {
        id: 'poli',
        kind: 'study',
        role: 'Ingeniería de Software',
        place: 'Politécnico Grancolombiano',
        period: '2022 – 2024',
        summary: 'Pregrado profesional. Graduada.',
        highlights: [],
      },
      {
        id: 'adsi',
        kind: 'study',
        role: 'Tecnología en Análisis y Desarrollo de Sistemas (ADSI)',
        place: 'SENA Medellín',
        period: '2019 – 2020',
        summary: 'Tecnóloga. Titulada.',
        highlights: [],
      },
      {
        id: 'tecnico',
        kind: 'study',
        role: 'Técnico en Programación de Software',
        place: 'SENA Medellín',
        period: '2017 – 2018',
        summary:
          'Técnica. Titulada. Complementado con Fundamentos de Metodologías Ágiles (SENA) y el Proyecto Intercambio Virtual de inglés.',
        highlights: [],
      },
    ],
  },

  contact: {
    title: 'Hablemos',
    lead: '¿Tienes una vacante frontend, un proyecto o quieres hablar de Drupal headless? Escríbeme.',
    newTab: ' (se abre en una pestaña nueva)',
    madeWith: 'Diseñado y desarrollado por mí con Next.js, SASS y Atomic Design.',
  },
};

export default es;
