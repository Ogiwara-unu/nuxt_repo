// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'es' },
      title: 'Randall Álvarez — Ingeniero en Sistemas',
      titleTemplate: '%s · 随筆',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Portafolio personal de Randall Álvarez Chévez, Ingeniero en Sistemas en Liberia, Guanacaste, Costa Rica.',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@500;700&family=Noto+Sans+JP:wght@400;500;700&family=JetBrains+Mono:wght@400;600&display=swap',
        },
      ],
    },
  },
  nitro: {
    prerender: {
      routes: ['/', '/sobre-mi', '/proyectos', '/contacto', '/blog', '/blog/n8n-oracle-apex', '/blog/spa-offline-react', '/blog/graphql-vs-rest'],
    },
  },
})
