# Portafolio — Randall Álvarez Chévez

Sitio web personal estático construido con **Nuxt 4**, con temática visual japonesa (papel envejecido, sellos hanko, kanji, tipografía Shippori Mincho).

## Páginas

- `/` — Inicio
- `/sobre-mi` — Sobre mí (experiencia laboral)
- `/proyectos` — Proyectos + testimonios de colegas
- `/blog` — Blog (listado)
- `/blog/[slug]` — Detalle de cada post (ruta dinámica)
- `/contacto` — Contacto (WhatsApp, LinkedIn, GitHub, Instagram + formulario)

## Requisitos técnicos cubiertos

- Proyecto creado con `nuxi init`
- `<NuxtLink>` para toda la navegación (`layouts/default.vue`)
- `layouts/default.vue` con header y footer compartidos
- `useHead()` en cada página, con título y meta descripción propios
- Rutas automáticas basadas en archivos (`pages/`), incluida una ruta dinámica `[slug].vue`

## Desarrollo local

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Generar sitio estático

```bash
npm run generate
```

Esto genera `.output/public`, listo para cualquier hosting estático.

## Despliegue en Netlify

Este repo ya incluye `netlify.toml`:

```toml
[build]
  command = "npm run generate"
  publish = ".output/public"
```

Conecta el repo en Netlify (Import from Git) y el build se configura solo.

## Enlace publicado

> Randall: agrega aquí el enlace una vez desplegado en Netlify.
