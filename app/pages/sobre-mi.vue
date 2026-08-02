<script setup lang="ts">
import { profile, experiences } from '~/data/portfolio'

useHead({
  title: 'Sobre mí',
  meta: [
    {
      name: 'description',
      content:
        'Trayectoria de Randall Álvarez Chévez: experiencia en CATSA y ContiCR, automatización y desarrollo backend.',
    },
  ],
})
</script>

<template>
  <div>
    <section class="page-hero">
      <span class="kanji-watermark">私</span>
      <div class="wrap">
        <div class="eyebrow">私 · watashi — sobre mí</div>
        <h1>Sobre mí</h1>
        <p class="lead">{{ profile.summary }}</p>
        <p class="lead-sub">
          Actualmente trabajo en <strong>{{ profile.currentJob }}</strong> como
          {{ profile.role }}, desde {{ profile.location }}.
        </p>
      </div>
    </section>

    <section class="wrap section">
      <h2 class="section-title">Experiencia laboral</h2>
      <ol class="timeline">
        <li v-for="(exp, i) in experiences" :key="i" class="timeline-item">
          <span class="timeline-dot" />
          <div class="timeline-content">
            <p class="timeline-date mono">{{ exp.date }}</p>
            <h3>{{ exp.title }}</h3>
            <p class="timeline-job">{{ exp.job }}</p>
            <ul>
              <li v-for="(c, ci) in exp.contents" :key="ci">{{ c }}</li>
            </ul>
          </div>
        </li>
      </ol>
    </section>
  </div>
</template>

<style scoped>
.page-hero { position: relative; overflow: hidden; padding: 56px 0 40px; border-bottom: 3px solid var(--ink); }
.page-hero .wrap { position: relative; z-index: 1; }
h1 { font-size: clamp(28px, 4.5vw, 40px); margin: 8px 0 16px; }
.lead { max-width: 60ch; color: var(--ink-soft); font-size: 15.5px; margin: 0 0 8px; }
.lead-sub { max-width: 60ch; color: var(--ink-soft); font-size: 14px; margin: 0; }
.lead-sub strong { color: var(--vermillion-deep); }

.section { padding: 46px 0; }
.section-title { font-size: 22px; margin-bottom: 30px; }

.timeline { list-style: none; margin: 0; padding: 0; border-left: 2px solid var(--rule); }
.timeline-item { position: relative; padding: 0 0 40px 30px; }
.timeline-item:last-child { padding-bottom: 0; }
.timeline-dot {
  position: absolute;
  left: -7px;
  top: 4px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--vermillion);
  border: 2px solid var(--paper);
  box-shadow: 0 0 0 2px var(--vermillion);
}
.timeline-date { color: var(--gold); font-size: 12.5px; margin: 0 0 4px; }
.timeline-content h3 { font-size: 18px; margin: 0 0 2px; }
.timeline-job { color: var(--ink-soft); font-size: 13.5px; margin: 0 0 10px; }
.timeline-content ul { margin: 0; padding-left: 18px; color: var(--ink-soft); font-size: 14px; }
.timeline-content li { margin-bottom: 4px; }
</style>
