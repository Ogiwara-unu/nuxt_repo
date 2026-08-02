<script setup lang="ts">
import { profile, techStack, myProjects } from '~/data/portfolio'

useHead({
  title: 'Inicio',
  meta: [
    {
      name: 'description',
      content:
        'Randall Álvarez Chévez — Ingeniero en Sistemas en Liberia, Guanacaste. Automatización, APIs y backend.',
    },
  ],
})

const featured = myProjects.slice(0, 3)
</script>

<template>
  <div>
    <section class="hero">
      <span class="kanji-watermark">技</span>
      <div class="wrap hero-inner">
        <div class="eyebrow-row">
          <span class="seal hero-seal">R</span>
          <span class="eyebrow">Ingeniero en Sistemas · Liberia, Guanacaste</span>
        </div>
        <h1>
          Hola, soy {{ profile.name.split(' ')[0] }}
          <span class="sub">Construyo automatizaciones, APIs y sistemas backend sólidos</span>
        </h1>
        <p class="desc">{{ profile.summary }}</p>
        <div class="hero-actions">
          <NuxtLink to="/proyectos" class="btn btn-primary">Ver proyectos</NuxtLink>
          <NuxtLink to="/contacto" class="btn btn-ghost">Hablemos</NuxtLink>
        </div>
      </div>
    </section>

    <svg class="cloud-divider wrap" viewBox="0 0 800 40" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,26 C40,8 60,8 100,22 C130,32 150,12 190,20 C230,26 250,6 300,18 C340,26 370,10 410,20 C450,30 480,8 520,18 C560,26 590,8 630,20 C670,28 700,12 740,20 C765,24 785,18 800,20 L800,40 L0,40 Z"/>
    </svg>

    <section class="wrap section">
      <h2 class="section-title">Stack &amp; herramientas</h2>
      <div class="stack-cloud">
        <span v-for="t in techStack" :key="t" class="tag">{{ t }}</span>
      </div>
    </section>

    <section class="wrap section">
      <div class="section-head">
        <h2 class="section-title">Proyectos destacados</h2>
        <NuxtLink to="/proyectos" class="see-all">Ver todos →</NuxtLink>
      </div>
      <div class="mini-grid">
        <article v-for="p in featured" :key="p.id" class="mini-card">
          <h3>{{ p.title }}</h3>
          <p>{{ p.description }}</p>
          <div class="mini-tags">
            <span v-for="tag in p.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
        </article>
      </div>
    </section>

    <section class="wrap section timezone-section">
      <div class="card timezone-card">
        <h2 class="section-title small">Zona horaria</h2>
        <p>
          Trabajo desde {{ profile.location }} ({{ profile.timezone }}), disponible para
          colaboración remota en cualquier parte del mundo.
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero { position: relative; overflow: hidden; padding: 64px 0 44px; border-bottom: 3px solid var(--ink); }
.hero-inner { position: relative; z-index: 1; }

.eyebrow-row { display: flex; align-items: center; gap: 14px; margin-bottom: 20px; }
.hero-seal { width: 48px; height: 48px; font-size: 20px; transform: rotate(-2deg); }

h1 {
  font-size: clamp(30px, 5vw, 46px);
  margin-bottom: 14px;
  letter-spacing: 0.01em;
}
h1 .sub {
  display: block;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: 500;
  font-size: 0.4em;
  color: var(--ink-soft);
  margin-top: 10px;
}

.desc { max-width: 56ch; color: var(--ink-soft); font-size: 15.5px; margin: 0 0 30px; }

.hero-actions { display: flex; gap: 12px; flex-wrap: wrap; }
.btn {
  display: inline-flex;
  align-items: center;
  padding: 11px 22px;
  border-radius: 100px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.15s ease, background 0.15s ease;
}
.btn:hover { transform: translateY(-1px); }
.btn-primary { background: var(--vermillion); color: #f4ecdc; }
.btn-primary:hover { background: var(--vermillion-deep); }
.btn-ghost { border: 1px solid var(--rule); color: var(--ink); }
.btn-ghost:hover { background: var(--paper-deep); }

.section { padding: 44px 0; }
.section-title { font-size: 22px; margin-bottom: 20px; }
.section-title.small { font-size: 18px; margin-bottom: 10px; }
.section-head { display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 20px; flex-wrap: wrap; gap: 8px; }
.see-all { font-size: 13.5px; color: var(--vermillion-deep); text-decoration: none; }
.see-all:hover { color: var(--vermillion); }

.stack-cloud { display: flex; flex-wrap: wrap; gap: 8px; }

.mini-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 18px; }
.mini-card {
  background: var(--card);
  border: 1px solid var(--rule);
  border-radius: 10px;
  padding: 20px;
}
.mini-card h3 { font-size: 17px; margin-bottom: 8px; }
.mini-card p { font-size: 13.5px; color: var(--ink-soft); margin: 0 0 12px; }
.mini-tags { display: flex; flex-wrap: wrap; gap: 6px; }

.timezone-section { padding-top: 0; }
.timezone-card { padding: 26px 28px; }
.timezone-card p { color: var(--ink-soft); font-size: 14.5px; margin: 0; max-width: 60ch; }
</style>
