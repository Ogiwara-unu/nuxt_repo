<script setup lang="ts">
import { mySocials } from '~/data/portfolio'

useHead({
  title: 'Contacto',
  meta: [
    {
      name: 'description',
      content: 'Contacta a Randall Álvarez Chévez por WhatsApp, LinkedIn, GitHub o Instagram.',
    },
  ],
})

const form = reactive({ name: '', email: '', message: '' })
const sent = ref(false)

function handleSubmit() {
  // Este formulario es estático (sitio sin backend).
  // Redirige el mensaje a WhatsApp con el contenido ya escrito.
  const text = encodeURIComponent(
    `Hola Randall, soy ${form.name || '...'} (${form.email || 'sin correo'}).\n\n${form.message}`
  )
  window.open(`https://wa.me/50671867501?text=${text}`, '_blank')
  sent.value = true
}
</script>

<template>
  <div>
    <section class="page-hero">
      <span class="kanji-watermark">信</span>
      <div class="wrap">
        <div class="eyebrow">信 · shin — mensaje</div>
        <h1>Hablemos</h1>
        <p class="lead">
          ¿Tienes un proyecto, una automatización o una idea que construir? Escríbeme por
          cualquiera de estos canales o usa el formulario.
        </p>
      </div>
    </section>

    <section class="wrap section contact-grid">
      <div class="socials">
        <a
          v-for="s in mySocials"
          :key="s.name"
          :href="s.href"
          target="_blank"
          rel="noopener"
          class="social-card"
        >
          <span class="social-seal">{{ s.glyph }}</span>
          <span>
            <p class="social-name">{{ s.name }}</p>
            <p class="social-handle mono">{{ s.handle }}</p>
          </span>
        </a>
      </div>

      <form class="card contact-form" @submit.prevent="handleSubmit">
        <h2>Enviar un mensaje</h2>
        <label>
          Nombre completo
          <input v-model="form.name" type="text" placeholder="Tu nombre" required />
        </label>
        <label>
          Correo
          <input v-model="form.email" type="email" placeholder="tucorreo@email.com" required />
        </label>
        <label>
          Mensaje
          <textarea v-model="form.message" rows="5" placeholder="Cuéntame sobre tu proyecto..." required />
        </label>
        <button type="submit" class="btn-submit">Enviar por WhatsApp 話</button>
        <p v-if="sent" class="sent-note">Se abrió WhatsApp con tu mensaje listo para enviar.</p>
      </form>
    </section>
  </div>
</template>

<style scoped>
.page-hero { position: relative; overflow: hidden; padding: 56px 0 40px; border-bottom: 3px solid var(--ink); }
.page-hero .wrap { position: relative; z-index: 1; }
h1 { font-size: clamp(28px, 4.5vw, 40px); margin: 8px 0 16px; }
.lead { max-width: 58ch; color: var(--ink-soft); font-size: 15.5px; margin: 0; }

.section { padding: 46px 0; }
.contact-grid { display: grid; grid-template-columns: 1fr 1.3fr; gap: 28px; align-items: start; }

.socials { display: flex; flex-direction: column; gap: 12px; }
.social-card {
  display: flex;
  align-items: center;
  gap: 14px;
  background: var(--card);
  border: 1px solid var(--rule);
  border-radius: 10px;
  padding: 16px 18px;
  text-decoration: none;
  color: var(--ink);
  transition: transform 0.15s ease, border-color 0.15s ease;
}
.social-card:hover { transform: translateX(3px); border-color: var(--vermillion); }
.social-seal {
  width: 42px;
  height: 42px;
  flex-shrink: 0;
  border: 2px solid var(--vermillion);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Shippori Mincho', serif;
  color: var(--vermillion);
  font-size: 17px;
}
.social-name { font-weight: 600; font-size: 14.5px; margin: 0; }
.social-handle { font-size: 12px; color: var(--ink-soft); margin: 0; }

.contact-form { padding: 28px; display: flex; flex-direction: column; gap: 16px; }
.contact-form h2 { font-size: 19px; margin-bottom: 4px; }
.contact-form label { display: flex; flex-direction: column; gap: 6px; font-size: 13px; color: var(--ink-soft); }
.contact-form input,
.contact-form textarea {
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 14px;
  padding: 10px 12px;
  border: 1px solid var(--rule);
  border-radius: 8px;
  background: var(--paper);
  color: var(--ink);
  resize: vertical;
}
.contact-form input:focus,
.contact-form textarea:focus {
  outline: 2px solid var(--vermillion);
  outline-offset: 1px;
}

.btn-submit {
  align-self: flex-start;
  background: var(--vermillion);
  color: #f4ecdc;
  border: none;
  padding: 12px 24px;
  border-radius: 100px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s ease, transform 0.15s ease;
}
.btn-submit:hover { background: var(--vermillion-deep); transform: translateY(-1px); }

.sent-note { font-size: 13px; color: var(--sage); margin: 0; }

@media (max-width: 720px) {
  .contact-grid { grid-template-columns: 1fr; }
}
</style>
