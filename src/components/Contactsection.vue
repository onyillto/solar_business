<template>
  <section class="contact">
    <div class="contact__inner">

      <!-- Left -->
      <div class="contact__left">
        <p class="contact__eyebrow">We're Here To Help You</p>
        <h2 class="contact__title">
          <span class="contact__title--bold">Discuss</span> Your<br />
          Energy Solution<br />Needs
        </h2>
        <p class="contact__sub">
          Are you looking for top-quality solar energy and smart home solutions tailored to your needs? Reach out to us.
        </p>

        <!-- Contact info -->
        <div class="contact__info">
          <div class="info__item">
            <div class="info__icon info__icon--email">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <div class="info__text">
              <span class="info__label">E-mail</span>
              <a href="mailto:info@moski-hub.com" class="info__value">info@moski-hub.com</a>
            </div>
          </div>

          <div class="info__item">
            <div class="info__icon info__icon--phone">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.02 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
              </svg>
            </div>
            <div class="info__text">
              <span class="info__label">Phone number</span>
              <a href="tel:+2348001234567" class="info__value">+234 800 123 4567</a>
            </div>
          </div>

          <div class="info__item">
            <div class="info__icon info__icon--location">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div class="info__text">
              <span class="info__label">Location</span>
              <span class="info__value">Lagos & Abuja, Nigeria</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Right: Form card -->
      <div class="contact__card">

        <div class="form__row">
          <div class="form__group">
            <label class="form__label">Name</label>
            <input v-model="form.name" type="text" placeholder="John Doe" class="form__input" />
          </div>
          <div class="form__group">
            <label class="form__label">Email</label>
            <input v-model="form.email" type="email" placeholder="john@email.com" class="form__input" />
          </div>
        </div>

        <div class="form__group">
          <label class="form__label">Service</label>
          <div class="form__select-wrap">
            <select v-model="form.service" class="form__select">
              <option value="" disabled>Select a service...</option>
              <option>Residential Solar Installation</option>
              <option>Commercial Solar Installation</option>
              <option>Borehole Services</option>
              <option>Smart Home Setup</option>
              <option>Solar Street Lighting</option>
              <option>Battery Banks & Storage</option>
              <option>Solar Powered Pumps</option>
              <option>Other</option>
            </select>
            <svg class="select__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="14" height="14">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </div>
        </div>

        <div class="form__group">
          <label class="form__label">Message</label>
          <textarea
            v-model="form.message"
            placeholder="Tell us about your project..."
            class="form__textarea"
            rows="4"
          />
        </div>

        <button class="form__submit" @click="handleSubmit">
          <span class="submit__circle">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </span>
          Get a Solution
        </button>

        <!-- Success toast -->
        <transition name="toast">
          <div v-if="submitted" class="form__toast">
            ✓ Message sent! We'll get back to you shortly.
          </div>
        </transition>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  service: '',
  message: '',
})

const submitted = ref(false)

function handleSubmit() {
  if (!form.value.name || !form.value.email) return
  submitted.value = true
  form.value = { name: '', email: '', service: '', message: '' }
  setTimeout(() => { submitted.value = false }, 4000)
}
</script>

<style scoped>
/* ── Section ──────────────────────────────── */
.contact {
  width: 100%;
  background: #f0f4f8;
  padding: 90px 2rem;
  font-family: 'Helvetica Neue', 'Segoe UI', sans-serif;
}

/* ── Inner ────────────────────────────────── */
.contact__inner {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 5rem;
  align-items: center;
}

/* ── Left ─────────────────────────────────── */
.contact__left {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.contact__eyebrow {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #F9A825;
}

.contact__title {
  font-family: 'Georgia', 'Times New Roman', serif;
  font-size: clamp(1.9rem, 3.5vw, 3rem);
  font-weight: 400;
  color: #111827;
  line-height: 1.15;
}

.contact__title--bold {
  font-weight: 700;
  color: #1565C0;
}

.contact__sub {
  font-size: 0.85rem;
  color: #6b7280;
  line-height: 1.75;
  max-width: 360px;
}

/* ── Info items ───────────────────────────── */
.contact__info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 0.5rem;
}

.info__item {
  display: flex;
  align-items: center;
  gap: 14px;
}

.info__icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: #fff;
}

.info__icon--email    { background: #1565C0; }
.info__icon--phone    { background: #E64A19; }
.info__icon--location { background: #00897B; }

.info__text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.info__label {
  font-size: 0.68rem;
  color: #9ca3af;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.info__value {
  font-size: 0.9rem;
  font-weight: 600;
  color: #111827;
  text-decoration: none;
  transition: color 0.2s;
}

a.info__value:hover { color: #1565C0; }

/* ── Form card ────────────────────────────── */
.contact__card {
  background: #ffffff;
  border-radius: 24px;
  padding: 2.4rem 2.2rem;
  box-shadow: 0 10px 50px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  position: relative;
}

/* ── Form row ─────────────────────────────── */
.form__row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

/* ── Form group ───────────────────────────── */
.form__group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form__label {
  font-size: 0.78rem;
  font-weight: 600;
  color: #374151;
  letter-spacing: 0.02em;
}

.form__input,
.form__select,
.form__textarea {
  width: 100%;
  background: #f3f4f6;
  border: 1.5px solid transparent;
  border-radius: 10px;
  padding: 11px 14px;
  font-family: 'Helvetica Neue', 'Segoe UI', sans-serif;
  font-size: 0.85rem;
  color: #111827;
  outline: none;
  transition: border-color 0.2s, background 0.2s;
  appearance: none;
}

.form__input::placeholder,
.form__textarea::placeholder { color: #9ca3af; }

.form__input:focus,
.form__select:focus,
.form__textarea:focus {
  background: #fff;
  border-color: #1565C0;
}

.form__textarea {
  resize: vertical;
  min-height: 110px;
}

/* Select wrapper */
.form__select-wrap {
  position: relative;
}

.form__select {
  cursor: pointer;
  padding-right: 36px;
}

.select__arrow {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
  pointer-events: none;
}

/* ── Submit button ────────────────────────── */
.form__submit {
  display: flex;
  align-items: center;
  gap: 0;
  background: #1565C0;
  border: none;
  border-radius: 999px;
  padding: 6px 6px 6px 28px;
  font-family: 'Helvetica Neue', 'Segoe UI', sans-serif;
  font-size: 0.92rem;
  font-weight: 700;
  color: #ffffff;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
  box-shadow: 0 6px 20px rgba(21,101,192,0.35);
  align-self: flex-start;
}

.form__submit:hover {
  background: #0d47a1;
  transform: translateY(-2px);
  box-shadow: 0 10px 28px rgba(21,101,192,0.45);
}

.submit__circle {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: rgba(255,255,255,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 16px;
  flex-shrink: 0;
}

/* ── Toast ────────────────────────────────── */
.form__toast {
  position: absolute;
  bottom: -56px;
  left: 0; right: 0;
  background: #00897B;
  color: #fff;
  font-size: 0.85rem;
  font-weight: 600;
  text-align: center;
  padding: 12px;
  border-radius: 10px;
  box-shadow: 0 4px 16px rgba(0,137,123,0.3);
}

.toast-enter-active, .toast-leave-active { transition: all 0.3s ease; }
.toast-enter-from, .toast-leave-to { opacity: 0; transform: translateY(8px); }

/* ── Responsive ───────────────────────────── */
@media (max-width: 860px) {
  .contact__inner {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  .contact__sub { max-width: 100%; }
}

@media (max-width: 480px) {
  .form__row { grid-template-columns: 1fr; }
  .contact { padding: 60px 1.2rem; }
  .contact__card { padding: 1.8rem 1.4rem; }
}
</style>