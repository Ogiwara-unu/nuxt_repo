export const profile = {
  name: "Randall Álvarez Chévez",
  role: "Ingeniero en Sistemas",
  location: "Liberia, Guanacaste, Costa Rica",
  timezone: "UTC-6",
  currentJob: "ContiCR",
  summary:
    "Ingeniero en Sistemas enfocado en construir flujos de trabajo eficientes, automatizaciones y aplicaciones robustas. Tengo experiencia integrando herramientas como Google Cloud, Make, n8n, además de diseñar lógica de backend, APIs y estructuras de bases de datos sólidas.",
};

export const techStack = [
  "Node.js",
  "Express",
  "React",
  "Angular",
  "Laravel",
  "PHP",
  "GraphQL",
  "n8n",
  "Firebase",
  "Ionic",
  "Oracle APEX",
  "SQL",
  "Supabase",
  "Redis",
  "Docusaurus",
  "SOLID",
  "Design Patterns",
];

export const myProjects = [
  {
    id: 1,
    title: "Pokelab",
    description:
      "SPA construida con React y Express que consume la PokeAPI y muestra información detallada de Pokémon.",
    subDescription: [
      "SPA rápida con React + Vite, IndexedDB y Service Worker para capacidades offline.",
      "Backend ligero con Node.js y Express para manejar las peticiones a la API.",
      "Despliegue y gestión de procesos con PM2.",
      "Axios integrado tanto en frontend como en backend para el consumo de datos.",
    ],
    href: "https://github.com/Ogiwara-unu/PokeProject",
    tags: ["React", "Node.js", "Express", "PM2"],
  },
  {
    id: 2,
    title: "Okarys API",
    description:
      "API musical basada en GraphQL que administra canciones, playlists, artistas y álbumes con autenticación por token.",
    subDescription: [
      "API flexible construida con GraphQL: queries y mutations.",
      "Autenticación implementada con JWT.",
      "Backend estructurado con Express.",
      "SQLite para una persistencia liviana y eficiente.",
    ],
    href: "https://github.com/Ogiwara-unu/okaryMsc_api",
    tags: ["GraphQL", "Express", "SQLite", "JWT"],
  },
  {
    id: 3,
    title: "SafeSteps",
    description:
      "App móvil de acompañamiento para senderismo construida con Ionic y Firebase, enfocada en seguridad y planificación de rutas.",
    subDescription: [
      "Interfaz móvil multiplataforma con Ionic.",
      "Almacenamiento de rutas, datos en tiempo real y autenticación con Firebase.",
      "Uso de Capacitor para acceder a funciones nativas como GPS y almacenamiento local.",
    ],
    href: "https://github.com/Ogiwara-unu/SafeSteps",
    tags: ["Ionic", "Firebase", "Capacitor"],
  },
  {
    id: 4,
    title: "ContiAIDocs",
    description:
      "Documentación técnica de un flujo n8n que alimenta un asistente virtual encargado de creación de facturas y validación de datos.",
    subDescription: [
      "Documentación completa de la lógica de un sistema de automatización construido en n8n.",
      "Explicación de validación de datos, formateo y envío a Oracle APEX.",
      "Construida con Docusaurus, Markdown y JavaScript.",
    ],
    href: "",
    tags: ["Docusaurus", "Markdown", "JavaScript"],
  },
  {
    id: 5,
    title: "N8N Billing Workflow",
    description:
      "Flujo de automatización para procesamiento de facturas usando n8n, Supabase, Redis y APIs REST.",
    subDescription: [
      "Flujo completo de automatización para facturación básica.",
      "Integración de Supabase, Postgres, Redis, Twilio y APIs REST.",
      "Nodos de función en JavaScript para lógica avanzada y transformación de datos.",
    ],
    href: "",
    tags: ["n8n", "Supabase", "Postgres", "Redis"],
  },
  {
    id: 6,
    title: "Laravel Rent API",
    description:
      "API RESTful para la gestión de un sistema de renta de vehículos, construida con Laravel y MariaDB.",
    subDescription: [
      "Endpoints para vehículos, rentas, clientes y facturación.",
      "Autenticación y manejo de roles con las herramientas de Laravel.",
      "MariaDB para un almacenamiento de datos eficiente y estructurado.",
    ],
    href: "https://github.com/Ogiwara-unu/renta_api",
    tags: ["Laravel", "PHP", "MariaDB"],
  },
];

export const experiences = [
  {
    title: "Software Developer Intern",
    job: "CATSA",
    date: "Feb 2024 – Jun 2025",
    contents: [
      "Desarrollo de sistemas internos usando Oracle APEX y SQL Developer.",
      "Implementación de integraciones RESTful para optimizar procesos internos.",
      "Mejora en el manejo de datos y reducción de trabajo manual mediante automatización.",
    ],
  },
  {
    title: "Automation Developer (Intern)",
    job: "ContiCR",
    date: "Jul 2025 – Nov 2025",
    contents: [
      "Construcción de un flujo de automatización con n8n para creación y procesamiento de facturas.",
      "Integración de Redis, Supabase, Postgres, Twilio y Gemini AI.",
      "Desarrollo de un asistente virtual capaz de validar y registrar datos en bases de datos Oracle.",
    ],
  },
  {
    title: "Ingeniero en Sistemas",
    job: "ContiCR",
    date: "Actualidad",
    contents: [
      "Continúa el desarrollo y mantenimiento de automatizaciones e integraciones construidas durante la pasantía.",
      "Trabajo remoto/local desde Liberia, Guanacaste, dando soporte a procesos internos de la compañía.",
    ],
  },
];

export const reviews = [
  {
    name: "Valeria Fernández",
    username: "@valeria",
    body: "Randall es confiable, organizado y agradable para trabajar en equipo.",
    img: "https://robohash.org/valeriafernandez",
  },
  {
    name: "Christian Villalobos",
    username: "@christian",
    body: "Resuelve problemas de forma eficiente y siempre aporta ideas inteligentes.",
    img: "https://robohash.org/christianvillalobos",
  },
  {
    name: "Jafeth Espinoza",
    username: "@jafeth",
    body: "Un compañero de equipo colaborativo con fuertes habilidades técnicas.",
    img: "https://robohash.org/jafethespinoza",
  },
  {
    name: "Raúl Barrantes",
    username: "@raul",
    body: "Comunicativo, enfocado y confiable bajo presión.",
    img: "https://robohash.org/raulbarrantes",
  },
  {
    name: "Eddier López",
    username: "@eddier",
    body: "Muestra gran iniciativa, aprendizaje rápido y lógica sólida.",
    img: "https://robohash.org/eddierlopez",
  },
  {
    name: "Edgar Villalobos",
    username: "@edgar",
    body: "Entrega automatizaciones y soluciones de workflow de alta calidad.",
    img: "https://robohash.org/edgarvillalobos",
  },
  {
    name: "Camilo Redondo",
    username: "@camilo",
    body: "Proactivo y hábil para optimizar procesos.",
    img: "https://robohash.org/camiloredondo",
  },
  {
    name: "Nathali Chacón",
    username: "@nathali",
    body: "Comunicadora clara que construye soluciones efectivas.",
    img: "https://robohash.org/nathalichacon",
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "https://wa.me/50671867501?text=Hello%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20contact%20you",
    handle: "+506 7186 7501",
    glyph: "話",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/randallalv/",
    handle: "linkedin.com/in/randallalv",
    glyph: "職",
  },
  {
    name: "GitHub",
    href: "https://github.com/Ogiwara-unu",
    handle: "github.com/Ogiwara-unu",
    glyph: "码",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/randall_wa0/",
    handle: "@randall_wa0",
    glyph: "影",
  },
];
