export const posts = [
  {
    slug: 'n8n-oracle-apex',
    title: 'Conectando n8n con Oracle APEX: lecciones de un asistente virtual de facturación',
    date: '2025-11-20',
    glyph: '結',
    excerpt:
      'Cómo diseñamos un flujo de n8n que valida datos y los inserta en una base de datos Oracle, y qué aprendí sobre manejar errores en automatizaciones de producción.',
    tags: ['n8n', 'Oracle APEX', 'Automatización'],
    body: `[Randall: completa aquí el contenido técnico del post.]

Ideas para desarrollar:
- Contexto del proyecto en ContiCR: qué problema resolvía el asistente virtual.
- Cómo estructuraste el flujo en n8n (nodos clave, validaciones).
- Integración con Redis, Supabase, Postgres, Twilio y Gemini AI: qué rol cumplía cada uno.
- Retos al insertar datos en Oracle vía APEX y cómo los resolviste.
- Qué harías diferente hoy.`,
  },
  {
    slug: 'spa-offline-react',
    title: 'Construyendo Pokelab: una SPA con soporte offline usando IndexedDB',
    date: '2025-08-10',
    glyph: '造',
    excerpt:
      'Notas sobre cómo React + Vite, IndexedDB y un Service Worker permiten que una app siga funcionando sin conexión a internet.',
    tags: ['React', 'Vite', 'IndexedDB'],
    body: `[Randall: completa aquí el contenido técnico del post.]

Ideas para desarrollar:
- Por qué elegiste React + Vite para Pokelab.
- Cómo funciona la estrategia de cacheo con Service Worker.
- Qué datos guardas en IndexedDB y por qué.
- Cómo estructuraste el backend en Node/Express que consume PokeAPI.
- Uso de PM2 para mantener el proceso vivo en producción.`,
  },
  {
    slug: 'graphql-vs-rest',
    title: 'GraphQL vs REST: lo que aprendí construyendo Okarys API',
    date: '2025-05-02',
    glyph: '比',
    excerpt:
      'Comparación práctica entre GraphQL y REST a partir de la experiencia real de construir una API musical con autenticación JWT.',
    tags: ['GraphQL', 'REST', 'JWT'],
    body: `[Randall: completa aquí el contenido técnico del post.]

Ideas para desarrollar:
- Por qué GraphQL encajaba mejor que REST para el caso de Okarys API.
- Cómo modelaste queries y mutations para canciones, playlists, artistas y álbumes.
- Cómo implementaste autenticación con JWT en el resolver.
- Ventajas y desventajas que notaste en la práctica (over-fetching, curva de aprendizaje, etc).`,
  },
]
