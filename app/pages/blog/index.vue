<script setup lang="ts">
import { posts } from '~/data/blog'

useHead({
  title: 'Blog',
  meta: [
    {
      name: 'description',
      content:
        'Notas técnicas de Randall Álvarez Chévez sobre n8n, automatización, React y APIs.',
    },
  ],
})

function formatDate(d: string) {
  return new Date(d + 'T00:00:00').toLocaleDateString('es-CR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<template>
  <div>
    <section class="page-hero">
      <span class="kanji-watermark">記</span>
      <div class="wrap">
        <div class="eyebrow">記 · ki — notas y bitácora</div>
        <h1>Blog</h1>
        <p class="lead">
          Apuntes técnicos sobre los proyectos que he construido: automatización, backend
          y las decisiones detrás de cada uno.
        </p>
      </div>
    </section>

    <section class="wrap section">
      <div class="posts">
        <NuxtLink v-for="p in posts" :key="p.slug" :to="`/blog/${p.slug}`" class="post-card">
          <span class="post-glyph">{{ p.glyph }}</span>
          <div class="post-body">
            <p class="post-date mono">{{ formatDate(p.date) }}</p>
            <h2>{{ p.title }}</h2>
            <p class="post-excerpt">{{ p.excerpt }}</p>
            <div class="post-tags">
              <span v-for="t in p.tags" :key="t" class="tag">{{ t }}</span>
            </div>
          </div>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-hero { position: relative; overflow: hidden; padding: 56px 0 40px; border-bottom: 3px solid var(--ink); }
.page-hero .wrap { position: relative; z-index: 1; }
h1 { font-size: clamp(28px, 4.5vw, 40px); margin: 8px 0 16px; }
.lead { max-width: 58ch; color: var(--ink-soft); font-size: 15.5px; margin: 0; }

.section { padding: 46px 0; }
.posts { display: flex; flex-direction: column; gap: 18px; }

.post-card {
  display: flex;
  gap: 20px;
  background: var(--card);
  border: 1px solid var(--rule);
  border-radius: 10px;
  padding: 22px 24px;
  text-decoration: none;
  color: var(--ink);
  transition: border-color 0.15s ease, transform 0.15s ease;
}
.post-card:hover { border-color: var(--vermillion); transform: translateY(-2px); }

.post-glyph {
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border: 2px solid var(--vermillion);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Shippori Mincho', serif;
  color: var(--vermillion);
  font-size: 18px;
}

.post-body { flex: 1; min-width: 0; }
.post-date { font-size: 12px; color: var(--gold); margin: 0 0 4px; text-transform: capitalize; }
.post-body h2 { font-size: 18px; margin: 0 0 8px; }
.post-excerpt { color: var(--ink-soft); font-size: 13.5px; margin: 0 0 12px; }
.post-tags { display: flex; flex-wrap: wrap; gap: 6px; }

@media (max-width: 560px) {
  .post-card { flex-direction: column; }
}
</style>
