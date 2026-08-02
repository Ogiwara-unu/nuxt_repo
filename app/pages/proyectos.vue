<script setup lang="ts">
import { myProjects, reviews } from '~/data/portfolio'

useHead({
  title: 'Proyectos',
  meta: [
    {
      name: 'description',
      content:
        'Proyectos de Randall Álvarez Chévez: Pokelab, Okarys API, SafeSteps, ContiAIDocs, N8N Billing Workflow y Laravel Rent API.',
    },
  ],
})
</script>

<template>
  <div>
    <section class="page-hero">
      <span class="kanji-watermark">作</span>
      <div class="wrap">
        <div class="eyebrow">作 · saku — trabajos y creaciones</div>
        <h1>Mis proyectos</h1>
        <p class="lead">
          Una selección de proyectos personales y de práctica: desde SPAs con soporte offline
          hasta APIs con GraphQL, automatizaciones con n8n y sistemas de renta con Laravel.
        </p>
      </div>
    </section>

    <section class="wrap section">
      <div class="projects">
        <article v-for="p in myProjects" :key="p.id" class="project-card">
          <div class="project-glyph">{{ p.id.toString().padStart(2, '0') }}</div>
          <div class="project-body">
            <h2>{{ p.title }}</h2>
            <p class="project-desc">{{ p.description }}</p>
            <ul class="project-sub">
              <li v-for="(s, i) in p.subDescription" :key="i">{{ s }}</li>
            </ul>
            <div class="project-footer">
              <div class="project-tags">
                <span v-for="t in p.tags" :key="t" class="tag">{{ t }}</span>
              </div>
              <a v-if="p.href" :href="p.href" target="_blank" rel="noopener" class="project-link">
                Ver repositorio →
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>

    <svg class="cloud-divider wrap" viewBox="0 0 800 40" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,26 C40,8 60,8 100,22 C130,32 150,12 190,20 C230,26 250,6 300,18 C340,26 370,10 410,20 C450,30 480,8 520,18 C560,26 590,8 630,20 C670,28 700,12 740,20 C765,24 785,18 800,20 L800,40 L0,40 Z"/>
    </svg>

    <section class="wrap section">
      <h2 class="section-title">Lo que dicen mis colegas</h2>
      <div class="reviews-grid">
        <div v-for="(r, i) in reviews" :key="i" class="review-card">
          <div class="review-head">
            <img :src="r.img" :alt="r.name" class="review-avatar" loading="lazy" />
            <div>
              <p class="review-name">{{ r.name }}</p>
              <p class="review-username mono">{{ r.username }}</p>
            </div>
          </div>
          <p class="review-body">{{ r.body }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-hero { position: relative; overflow: hidden; padding: 56px 0 40px; border-bottom: 3px solid var(--ink); }
.page-hero .wrap { position: relative; z-index: 1; }
h1 { font-size: clamp(28px, 4.5vw, 40px); margin: 8px 0 16px; }
.lead { max-width: 62ch; color: var(--ink-soft); font-size: 15.5px; margin: 0; }

.section { padding: 46px 0; }
.section-title { font-size: 22px; margin-bottom: 24px; }

.projects { display: flex; flex-direction: column; gap: 22px; }
.project-card {
  position: relative;
  display: flex;
  gap: 22px;
  background: var(--card);
  border: 1px solid var(--rule);
  border-radius: 10px;
  padding: 26px 26px 24px;
}
.project-glyph {
  flex-shrink: 0;
  width: 46px;
  height: 46px;
  border: 2px solid var(--vermillion);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  color: var(--vermillion);
}
.project-body { flex: 1; min-width: 0; }
.project-body h2 { font-size: 19px; margin-bottom: 6px; }
.project-desc { color: var(--ink-soft); font-size: 14px; margin: 0 0 12px; }
.project-sub { margin: 0 0 16px; padding-left: 18px; color: var(--ink-soft); font-size: 13.5px; }
.project-sub li { margin-bottom: 4px; }
.project-footer { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; }
.project-tags { display: flex; flex-wrap: wrap; gap: 6px; }
.project-link { font-size: 13px; font-weight: 600; color: var(--vermillion-deep); text-decoration: none; white-space: nowrap; }
.project-link:hover { color: var(--vermillion); }

@media (max-width: 560px) {
  .project-card { flex-direction: column; padding: 22px 20px; }
}

.reviews-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 16px; }
.review-card { background: var(--card); border: 1px solid var(--rule); border-radius: 10px; padding: 18px; }
.review-head { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; }
.review-avatar { width: 38px; height: 38px; border-radius: 50%; border: 1px solid var(--rule); background: var(--paper); }
.review-name { font-size: 13.5px; font-weight: 600; margin: 0; }
.review-username { font-size: 11.5px; color: var(--gold); margin: 0; }
.review-body { font-size: 13.5px; color: var(--ink-soft); margin: 0; }
</style>
