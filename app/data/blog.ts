export const posts = [
  {
    slug: 'n8n-oracle-apex',
    title: 'Conectando n8n con Oracle APEX: lecciones de un asistente virtual de facturación',
    date: '2025-11-20',
    glyph: '結',
    excerpt:
      'Cómo diseñamos un flujo de n8n que valida datos y los inserta en una base de datos Oracle, y qué aprendí sobre manejar errores en automatizaciones de producción.',
    tags: ['n8n', 'Oracle APEX', 'Automatización'],
    body: `Documentación técnica de un flujo de trabajo en n8n que impulsa un asistente virtual encargado de la creación de facturas y la validación de datos.

Se documentó la lógica completa de un sistema de automatización construido con n8n.

Se explicó la validación de datos, el formateo y el envío de información a la base de datos en Oracle APEX.

Se utilizaron Docusaurus, Markdown y JavaScript para lograr una documentación estructurada y clara.`,
  },
  {
    slug: 'spa-offline-react',
    title: 'Construyendo Pokelab: una SPA con soporte offline usando IndexedDB',
    date: '2025-08-10',
    glyph: '造',
    excerpt:
      'Notas sobre cómo React + Vite, IndexedDB y un Service Worker permiten que una app siga funcionando sin conexión a internet.',
    tags: ['React', 'Vite', 'IndexedDB'],
    body: `Una Aplicación de Página Única (SPA) construida con React y Express que consume datos de la PokeAPI y muestra información detallada de Pokémon.

Se desarrolló una SPA rápida utilizando React + Vite, incorporando IndexedDB y un Service Worker para capacidades offline.

Se implementó un backend ligero usando Node.js y Express para manejar las solicitudes a la API.

Se utilizó PM2 para el despliegue y la gestión de procesos.

Se integró Axios tanto en el frontend como en el backend para una obtención de datos fluida.`,
  },
  {
    slug: 'graphql-vs-rest',
    title: 'GraphQL vs REST: lo que aprendí construyendo Okarys API',
    date: '2025-05-02',
    glyph: '比',
    excerpt:
      'Comparación práctica entre GraphQL y REST a partir de la experiencia real de construir una API musical con autenticación JWT.',
    tags: ['GraphQL', 'REST', 'JWT'],
    body: `Una API de música basada en GraphQL que gestiona canciones, listas de reproducción, artistas y álbumes con autenticación basada en tokens.

Se construyó una API flexible utilizando GraphQL con consultas (queries) y mutaciones.

Se implementó la autenticación mediante JWT.

Se estructuró el backend con Express para un desarrollo moderno de APIs.

Se utilizó SQLite como solución de persistencia ligera y eficiente.`,
  },
]