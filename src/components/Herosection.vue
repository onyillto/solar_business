<template>
  <section class="hero">

    <!-- Background video -->
    <div class="hero__bg">
      <video
        class="hero__bg-video"
        src="/hero.mp4"
        autoplay
        muted
        loop
        playsinline
      />
      <div class="hero__overlay" />
    </div>

    <!-- Main content -->
    <div class="hero__content">
      <p class="hero__eyebrow">Clean Energy Solutions</p>

      <h1 class="hero__title">
        Capturing Light,<br />
        <span class="hero__title--accent">Powering Life.</span>
      </h1>

      <p class="hero__sub">
        From rooftop installs to utility-scale farms, we're dedicated to
        transforming sunlight into sustainable power for every home and business.
      </p>

      <div class="hero__cta-row">
        <button class="btn-primary">
          Get Started
          <span class="btn-primary__arrow">→</span>
        </button>
        <button class="btn-ghost">Explore Solutions</button>
      </div>
    </div>

    <!-- Bottom info strip -->
    <!-- <div class="hero__strip">
      <div class="strip__item">
        <div class="strip__img-wrap">
          <img
            src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=300&q=80"
            alt="Green landscape"
            class="strip__img"
          />
        </div>
        <div class="strip__text">
          <h3>Where Sustainability<br />meets Innovation.</h3>
          <p>With solar and smart energy, we're making the world cleaner every day.</p>
          <a href="#" class="strip__link">Discover Our Services</a>
        </div>
      </div>

      <div class="strip__item strip__item--stat">
        <div class="strip__avatars">
          <img src="https://i.pravatar.cc/48?img=1" alt="customer" class="avatar" />
          <img src="https://i.pravatar.cc/48?img=5" alt="customer" class="avatar" />
          <img src="https://i.pravatar.cc/48?img=9" alt="customer" class="avatar" />
        </div>
        <div class="strip__stat">
          <span class="stat-num">10M+</span>
          <span class="stat-label">Customers</span>
        </div>
      </div>

      <div class="strip__item strip__item--panel">
        <div class="strip__icon">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
            <circle cx="24" cy="24" r="10" fill="#F9A825"/>
            <line x1="24" y1="4"  x2="24" y2="10" stroke="#F9A825" stroke-width="2.5" stroke-linecap="round"/>
            <line x1="24" y1="38" x2="24" y2="44" stroke="#F9A825" stroke-width="2.5" stroke-linecap="round"/>
            <line x1="4"  y1="24" x2="10" y2="24" stroke="#F9A825" stroke-width="2.5" stroke-linecap="round"/>
            <line x1="38" y1="24" x2="44" y2="24" stroke="#F9A825" stroke-width="2.5" stroke-linecap="round"/>
            <line x1="9.4"  y1="9.4"  x2="13.7" y2="13.7" stroke="#F9A825" stroke-width="2.5" stroke-linecap="round"/>
            <line x1="34.3" y1="34.3" x2="38.6" y2="38.6" stroke="#F9A825" stroke-width="2.5" stroke-linecap="round"/>
            <line x1="38.6" y1="9.4"  x2="34.3" y2="13.7" stroke="#F9A825" stroke-width="2.5" stroke-linecap="round"/>
            <line x1="13.7" y1="34.3" x2="9.4"  y2="38.6" stroke="#F9A825" stroke-width="2.5" stroke-linecap="round"/>
          </svg>
        </div>
        <div>
          <h3>Efficient Solar Panels</h3>
          <p>Our panels deliver maximum efficiency, ensuring you get the most out of every ray of sunshine.</p>
        </div>
      </div>
    </div> -->

  </section>
</template>

<script setup>
// Static hero — no props needed
</script>

<style scoped>
.hero {
  position: relative;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: 'Georgia', 'Times New Roman', serif;
  left: 0;
  right: 0;
}

/* ── Video background ─────────────────────── */
.hero__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero__bg-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  display: block;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(10, 20, 10, 0.40) 0%,
    rgba(10, 20, 10, 0.28) 45%,
    rgba(10, 20, 10, 0.80) 82%,
    rgba(10, 20, 10, 1.00) 100%
  );
}

/* ── Main content ─────────────────────────── */
.hero__content {
  position: relative;
  z-index: 1;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0px 0rem 00px;
  animation: fadeUp 0.9s ease both;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
}

.hero__eyebrow {
  font-family: 'Helvetica Neue', 'Segoe UI', sans-serif;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #F9A825;
  margin-bottom: 1rem;
  animation: fadeUp 0.9s 0.1s ease both;
}

.hero__title {
  font-size: clamp(2.8rem, 7vw, 5.5rem);
  font-weight: 700;
  color: #ffffff;
  line-height: 1.06;
  margin-bottom: 1.4rem;
  letter-spacing: -0.015em;
  animation: fadeUp 0.9s 0.2s ease both;
}

.hero__title--accent {
  color: #F9A825;
}

.hero__sub {
  font-family: 'Helvetica Neue', 'Segoe UI', sans-serif;
  font-size: clamp(0.88rem, 1.3vw, 1rem);
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.75;
  max-width: 520px;
  margin-bottom: 2.4rem;
  animation: fadeUp 0.9s 0.3s ease both;
}

/* ── CTA ──────────────────────────────────── */
.hero__cta-row {
  display: flex;
  align-items: center;
  gap: 14px;
  animation: fadeUp 0.9s 0.4s ease both;
}

.btn-primary {
  display: flex;
  align-items: center;
  gap: 0;
  background: #F9A825;
  border: none;
  border-radius: 999px;
  padding: 0 6px 0 26px;
  height: 52px;
  font-family: 'Helvetica Neue', 'Segoe UI', sans-serif;
  font-size: 0.92rem;
  font-weight: 600;
  color: #111;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 4px 20px rgba(249, 168, 37, 0.4);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(249, 168, 37, 0.55);
}

.btn-primary__arrow {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: #111;
  color: #F9A825;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  margin-left: 14px;
  flex-shrink: 0;
}

.btn-ghost {
  background: none;
  border: 1.5px solid rgba(255, 255, 255, 0.35);
  border-radius: 999px;
  padding: 14px 26px;
  font-family: 'Helvetica Neue', 'Segoe UI', sans-serif;
  font-size: 0.88rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  transition: border-color 0.2s, color 0.2s;
}

.btn-ghost:hover {
  border-color: #F9A825;
  color: #F9A825;
}

/* ── Bottom strip ─────────────────────────── */
.hero__strip {
  position: relative;
  z-index: 1;
  background: #141f14;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  animation: fadeUp 0.9s 0.5s ease both;
}

.strip__item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 2rem 2.2rem;
  border-right: 1px solid rgba(255, 255, 255, 0.06);
}

.strip__item:last-child { border-right: none; }

/* Item 1 */
.strip__img-wrap {
  flex-shrink: 0;
  width: 88px;
  height: 88px;
  border-radius: 14px;
  overflow: hidden;
}

.strip__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.strip__text h3 {
  font-size: 1rem;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.3;
  margin-bottom: 0.4rem;
}

.strip__text p {
  font-family: 'Helvetica Neue', 'Segoe UI', sans-serif;
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.55;
  margin-bottom: 0.8rem;
}

.strip__link {
  font-family: 'Helvetica Neue', 'Segoe UI', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  color: #ffffff;
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color 0.2s;
}

.strip__link:hover { color: #F9A825; }

/* Item 2 — stat */
.strip__item--stat {
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
}

.strip__avatars {
  display: flex;
  align-items: center;
}

.avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 2px solid #141f14;
  object-fit: cover;
  margin-right: -10px;
}

.avatar:last-child { margin-right: 0; }

.strip__stat {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.stat-num {
  font-size: 2.4rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.02em;
}

.stat-label {
  font-family: 'Helvetica Neue', 'Segoe UI', sans-serif;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.55);
  margin-top: 2px;
}

/* Item 3 — panel info */
.strip__item--panel { align-items: flex-start; gap: 14px; }

.strip__icon {
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  background: rgba(249, 168, 37, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.strip__item--panel h3 {
  font-size: 1rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.4rem;
}

.strip__item--panel p {
  font-family: 'Helvetica Neue', 'Segoe UI', sans-serif;
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.55;
}

/* ── Responsive ───────────────────────────── */
@media (max-width: 900px) {
  .hero__strip { grid-template-columns: 1fr; }
  .strip__item {
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }
  .strip__item:last-child { border-bottom: none; }
}

@media (max-width: 480px) {
  .hero__content { padding: 100px 1.2rem 40px; }
  .hero__cta-row  { flex-direction: column; width: 100%; }
  .btn-primary, .btn-ghost { width: 100%; justify-content: center; }
}
</style>