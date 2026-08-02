<script setup lang="ts">
import { posts } from '~/data/blog'

const route = useRoute()
const post = computed(() => posts.find((p) => p.slug === route.params.slug))

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post no encontrado' })
}

useHead({
  title: post.value.title,
  meta: [{ name: 'description', content: post.value.excerpt }],
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
  <article v-if="post" class="wrap post-page">
    <NuxtLink to="/blog" class="back-link">← Volver al blog</NuxtLink>

    <header class="post-header">
      <span class="post-glyph-lg">{{ post.glyph }}</span>
      <p class="post-date mono">{{ formatDate(post.date) }}</p>
      <h1>{{ post.title }}</h1>
      <div class="post-tags">
        <span v-for="t in post.tags" :key="t" class="tag">{{ t }}</span>
      </div>
    </header>

    <div class="post-content">
      <p v-for="(paragraph, i) in post.body.split('\n\n')" :key="i">{{ paragraph }}</p>
    </div>
  </article>
</template>

<style scoped>
.post-page { padding: 46px 0 80px; max-width: 720px; }
.back-link { display: inline-block; font-size: 13.5px; color: var(--ink-soft); text-decoration: none; margin-bottom: 30px; }
.back-link:hover { color: var(--vermillion-deep); }

.post-header { border-bottom: 1px solid var(--rule); padding-bottom: 26px; margin-bottom: 26px; }
.post-glyph-lg {
  display: inline-flex;
  width: 56px;
  height: 56px;
  border: 2px solid var(--vermillion);
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  font-family: 'Shippori Mincho', serif;
  color: var(--vermillion);
  font-size: 22px;
  margin-bottom: 18px;
}
.post-date { font-size: 12.5px; color: var(--gold); margin: 0 0 10px; text-transform: capitalize; }
.post-header h1 { font-size: clamp(24px, 4vw, 32px); margin: 0 0 16px; }
.post-tags { display: flex; flex-wrap: wrap; gap: 6px; }

.post-content { font-size: 15.5px; color: var(--ink-soft); white-space: pre-line; }
.post-content p { margin: 0 0 18px; }
</style>
