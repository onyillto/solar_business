<template>
  <section class="about">

    <!-- Decorative background outline -->
    <div class="about__bg-deco">
      <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M200 20 L380 110 L380 290 L200 380 L20 290 L20 110 Z"
          stroke="#F9A825" stroke-width="1" stroke-dasharray="6 4" opacity="0.12"/>
        <path d="M200 60 L340 130 L340 270 L200 340 L60 270 L60 130 Z"
          stroke="#F9A825" stroke-width="1" opacity="0.08"/>
      </svg>
    </div>

    <div class="about__inner">

      <!-- Left: Image with badge -->
      <div class="about__img-col">
        <div class="about__img-wrap">
          <img
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=700&q=80"
            alt="Solar panels and wind turbines"
            class="about__img"
          />
          <!-- Savings badge -->
          <div class="about__badge">
            <svg class="badge__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
            <span>50% Savings</span>
          </div>
        </div>
      </div>

      <!-- Right: Content -->
      <div class="about__content">
        <p class="about__eyebrow">Take The Most of What Nature Offers</p>

        <h2 class="about__title">
          Harnessing Power of<br />the Elements
        </h2>

        <p class="about__body">
          At <strong>MOSKI HUB</strong>, we are a leading provider of innovative solar energy solutions
          and smart home technologies based in Nigeria. We specialize in a full range of solar
          systems—from residential to industrial setups—and bring intelligence to our clients'
          homes with smart automation in lighting, security, and gardens. We also supply and
          install all types of water heaters—industrial, kitchen, swimming pool, gas-powered,
          and propane. Our team is dedicated to providing top-quality products and expert
          installation, ensuring every client enjoys a seamless, efficient, and smart energy experience.
        </p>

        <!-- CTA phone row -->
       

        <!-- Why Us stats -->
        <div class="about__stats">
          <div class="stat">
            <span class="stat__num">10+</span>
            <span class="stat__label">Years Experience</span>
          </div>
          <div class="stat__divider" />
          <div class="stat">
            <span class="stat__num">500+</span>
            <span class="stat__label">Projects Done</span>
          </div>
          <div class="stat__divider" />
          <div class="stat">
            <span class="stat__num">98%</span>
            <span class="stat__label">Happy Clients</span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
// Static section — no props needed
</script>

<style scoped>
.about {
  position: relative;
  width: 100%;
  background: #ffffff;
  overflow: hidden;
  padding: 80px 0;
}

/* ── Decorative bg ────────────────────────── */
.about__bg-deco {
  position: absolute;
  right: -60px;
  top: 50%;
  transform: translateY(-50%);
  width: 420px;
  height: 420px;
  pointer-events: none;
  z-index: 0;
}

/* ── Inner layout ─────────────────────────── */
.about__inner {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

/* ── Image column ─────────────────────────── */
.about__img-col {
  position: relative;
}

.about__img-wrap {
  position: relative;
  border-radius: 18px;
  overflow: visible;
}

.about__img {
  width: 100%;
  height: 380px;
  object-fit: cover;
  border-radius: 18px;
  display: block;
  box-shadow: 0 20px 60px rgba(0,0,0,0.14);
}

/* Savings badge */
.about__badge {
  position: absolute;
  bottom: -16px;
  left: 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  background: #22c55e;
  color: #fff;
  font-family: 'Helvetica Neue', 'Segoe UI', sans-serif;
  font-size: 0.82rem;
  font-weight: 700;
  padding: 10px 18px;
  border-radius: 999px;
  box-shadow: 0 6px 20px rgba(34,197,94,0.35);
  letter-spacing: 0.02em;
  white-space: nowrap;
}

.badge__icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

/* ── Content column ───────────────────────── */
.about__content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.about__eyebrow {
  font-family: 'Helvetica Neue', 'Segoe UI', sans-serif;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #F9A825;
}

.about__title {
  font-family: 'Georgia', 'Times New Roman', serif;
  font-size: clamp(1.8rem, 3vw, 2.6rem);
  font-weight: 700;
  color: #111827;
  line-height: 1.15;
  margin-bottom: 0.2rem;
}

.about__body {
  font-family: 'Helvetica Neue', 'Segoe UI', sans-serif;
  font-size: 0.9rem;
  color: #6b7280;
  line-height: 1.75;
}

.about__body strong {
  color: #111827;
  font-weight: 700;
}

/* ── CTA phone ────────────────────────────── */
.about__cta {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 0.4rem;
}

.cta__icon-wrap {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: rgba(249,168,37,0.12);
  border: 1.5px solid #F9A825;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #F9A825;
  flex-shrink: 0;
}

.cta__text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.cta__label {
  font-family: 'Helvetica Neue', 'Segoe UI', sans-serif;
  font-size: 0.72rem;
  color: #F9A825;
  font-weight: 600;
  letter-spacing: 0.04em;
}

.cta__number {
  font-family: 'Georgia', serif;
  font-size: 1.15rem;
  font-weight: 700;
  color: #111827;
  text-decoration: none;
  letter-spacing: 0.04em;
  transition: color 0.2s;
}

.cta__number:hover { color: #F9A825; }

/* ── Stats row ────────────────────────────── */
.about__stats {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: 0.6rem;
  padding-top: 1.4rem;
  border-top: 1px solid #f3f4f6;
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.stat__num {
  font-family: 'Georgia', serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: #111827;
  line-height: 1;
}

.stat__label {
  font-family: 'Helvetica Neue', 'Segoe UI', sans-serif;
  font-size: 0.75rem;
  color: #9ca3af;
  font-weight: 500;
}

.stat__divider {
  width: 1px;
  height: 40px;
  background: #e5e7eb;
  flex-shrink: 0;
}

/* ── Responsive ───────────────────────────── */
@media (max-width: 860px) {
  .about__inner {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .about__bg-deco { display: none; }

  .about__img {
    height: 280px;
  }
}

@media (max-width: 480px) {
  .about { padding: 60px 0; }
  .about__inner { padding: 0 1.2rem; }
  .about__stats { flex-wrap: wrap; gap: 1rem; }
  .stat__divider { display: none; }
}
</style>