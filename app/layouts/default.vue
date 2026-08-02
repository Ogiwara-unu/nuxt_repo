<script setup lang="ts">
const route = useRoute()
const navOpen = ref(false)

const links = [
  { to: '/', label: 'Inicio', glyph: '始' },
  { to: '/sobre-mi', label: 'Sobre mí', glyph: '私' },
  { to: '/proyectos', label: 'Proyectos', glyph: '作' },
  { to: '/blog', label: 'Blog', glyph: '記' },
  { to: '/contacto', label: 'Contacto', glyph: '信' },
]

watch(() => route.fullPath, () => { navOpen.value = false })
</script>

<template>
  <div class="site">
    <header class="site-header">
      <div class="wrap header-inner">
        <NuxtLink to="/" class="brand">
          <span class="brand-seal">R</span>
          <span class="brand-name">Randall<span class="brand-dot">.</span></span>
        </NuxtLink>

        <nav class="nav" :class="{ open: navOpen }">
          <NuxtLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="nav-link"
            active-class="nav-link-active"
          >
            <span class="nav-glyph">{{ link.glyph }}</span>
            {{ link.label }}
          </NuxtLink>
        </nav>

        <button class="burger" :aria-expanded="navOpen" aria-label="Abrir menú" @click="navOpen = !navOpen">
          <span /><span /><span />
        </button>
      </div>
    </header>

    <main class="site-main">
      <slot />
    </main>

    <footer class="site-footer">
      <div class="wrap footer-inner">
        <div class="footer-stamp">印</div>
        <p class="footer-text">
          Randall Álvarez Chévez · Liberia, Guanacaste, Costa Rica
        </p>
        <p class="footer-meta mono">© {{ new Date().getFullYear() }} · Hecho con Nuxt</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.site { display: flex; flex-direction: column; min-height: 100vh; }

.site-header {
  border-bottom: 2px solid var(--ink);
  background: var(--paper);
  position: sticky;
  top: 0;
  z-index: 20;
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 16px;
  padding-bottom: 16px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: var(--ink);
}

.brand-seal {
  width: 34px;
  height: 34px;
  border-radius: 6px;
  background: var(--vermillion);
  color: #f4ecdc;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Shippori Mincho', serif;
  font-weight: 700;
  font-size: 16px;
  box-shadow: 0 2px 0 var(--vermillion-deep);
  transform: rotate(-2deg);
}

.brand-name {
  font-family: 'Shippori Mincho', serif;
  font-weight: 700;
  font-size: 19px;
}
.brand-dot { color: var(--vermillion); }

.nav {
  display: flex;
  align-items: center;
  gap: 4px;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 6px;
  text-decoration: none;
  color: var(--ink-soft);
  font-size: 14.5px;
  padding: 7px 12px;
  border-radius: 100px;
  transition: background 0.15s ease, color 0.15s ease;
}
.nav-link:hover { background: var(--paper-deep); color: var(--ink); }
.nav-link-active { color: var(--vermillion-deep); font-weight: 600; background: var(--card); }

.nav-glyph {
  font-family: 'Shippori Mincho', serif;
  color: var(--gold);
  font-size: 13px;
}

.burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  width: 34px;
  height: 34px;
  background: none;
  border: 1px solid var(--rule);
  border-radius: 6px;
  cursor: pointer;
}
.burger span { display: block; height: 2px; background: var(--ink); margin: 0 6px; }

.site-main { flex: 1; }

.site-footer {
  border-top: 2px solid var(--ink);
  background: var(--paper-deep);
  margin-top: 60px;
}

.footer-inner {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 26px 24px;
  flex-wrap: wrap;
}

.footer-stamp {
  width: 40px;
  height: 40px;
  border: 2px solid var(--vermillion);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Shippori Mincho', serif;
  color: var(--vermillion);
  font-size: 16px;
  transform: rotate(4deg);
  flex-shrink: 0;
}

.footer-text { flex: 1; min-width: 220px; color: var(--ink-soft); font-size: 13.5px; margin: 0; }
.footer-meta { color: var(--ink-soft); font-size: 12px; margin: 0; }

@media (max-width: 720px) {
  .burger { display: flex; }
  .nav {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--paper);
    border-bottom: 2px solid var(--ink);
    flex-direction: column;
    align-items: stretch;
    padding: 10px 20px 18px;
    gap: 2px;
    display: none;
  }
  .nav.open { display: flex; }
  .nav-link { justify-content: flex-start; }
}
</style>
