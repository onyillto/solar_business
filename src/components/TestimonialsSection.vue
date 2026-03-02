<template>
  <section class="testimonials">

    <!-- Decorative shooting star -->
    <div class="testimonials__deco">
      <svg viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg" width="120" height="60">
        <path d="M10 45 Q25 25 40 40 Q55 55 70 35 L95 20" stroke="#F9A825" stroke-width="2.5" stroke-linecap="round" fill="none"/>
        <path d="M88 14 L98 20 L90 28" stroke="#1565C0" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <polygon points="108,2 111,10 120,10 113,15 116,23 108,18 100,23 103,15 96,10 105,10" fill="#F9A825"/>
      </svg>
    </div>

    <div class="testimonials__inner">

      <!-- Left content -->
      <div class="testimonials__left">
        <p class="testimonials__eyebrow">Testimonials</p>
        <h2 class="testimonials__title">
          What Our<br />Customers Says
        </h2>
        <p class="testimonials__sub">
          Real stories from real clients — see how MOSKI HUB is transforming homes and businesses across Nigeria with clean energy and smart solutions.
        </p>
        <button class="testimonials__btn">View More</button>

        <!-- Pagination dots -->
        <div class="testimonials__dots">
          <button
            v-for="(_, i) in testimonials"
            :key="i"
            @click="goTo(i)"
            :class="['tdot', activeIndex === i ? 'tdot--active' : '']"
          />
        </div>
      </div>

      <!-- Right: stacked cards -->
      <div class="testimonials__right">
        <div class="cards__stack">
          <TransitionGroup name="card-slide" tag="div" class="cards__inner">
            <div
              v-for="(t, i) in visibleCards"
              :key="t.id"
              :class="['tcard', i === 1 ? 'tcard--featured' : '']"
            >
              <div class="tcard__head">
                <div class="tcard__logo-wrap">
                  <img
                    :src="t.logo"
                    :alt="t.company"
                    class="tcard__logo"
                    @error="onImgError($event, t)"
                  />
                </div>
                <div class="tcard__meta">
                  <span class="tcard__name">{{ t.name }}</span>
                  <span class="tcard__company">{{ t.company }}</span>
                  <div class="tcard__stars">
                    <span v-for="s in 5" :key="s" class="star">★</span>
                  </div>
                </div>
                <div class="tcard__quote">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.301-3.995 5.847h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.301-3.996 5.847h3.983v10h-9.983z"/>
                  </svg>
                </div>
              </div>
              <p class="tcard__text">{{ t.text }}</p>
              <span class="tcard__service">{{ t.service }}</span>
            </div>
          </TransitionGroup>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

// Nigerian bank logos via wovenfinance CDN (CBN bank codes)
const CDN = 'https://cdn.jsdelivr.net/gh/wovenfinance/cdn@main/logos'

const testimonials = [
  {
    id: 1,
    name: 'Chidi Okafor',
    company: 'GA Engineering',
    logo: `/test1.jpeg`,
    fallback: 'AB',
    text: 'MOSKI HUB powered our entire branch office with solar. No more diesel, no downtime. Our operational costs dropped significantly and the installation was done professionally.',
    service: 'Commercial Solar Installation',
  },
  {
    id: 2,
    name: 'Ngozi Adeyemi',
    company: 'Grippy Life Tech',
    logo: `/test2.jpeg`,
    fallback: 'GT',
    text: 'We outfitted our Lagos headquarters with a solar hybrid system. MOSKI HUB handled everything from design to commissioning. Our energy bills are now virtually zero.',
    service: 'Hybrid Solar System',
  },
  {
    id: 3,
    name: 'Emeka Eze',
    company: 'L&L Perfume and Clothing',
    logo: `/test3.jpeg`,
    fallback: 'ZB',
    text: 'MOSKI HUB installed solar street lights across our estate and smart security systems in our data centre. The team was excellent, delivering on time and within budget.',
    service: 'Solar Street Lighting & Smart Security',
  },
  {
    id: 4,
    name: 'Fatima Musa',
    company: 'TRIVE',
    logo: `/test4.jpeg`,
    fallback: 'UBA',
    text: 'Our borehole water project by MOSKI HUB has transformed operations at our Abuja complex. Clean, uninterrupted water supply and a solar pump — brilliant investment.',
    service: 'Borehole & Solar Pump',
  },
  {
    id: 5,
    name: 'Tunde Adewale',
    company: 'First Bank of Nigeria',
    logo: `/test1.jpeg`,
    fallback: 'FBN',
    text: 'From the smart home setup in our executive lounge to solar backup for our server room, MOSKI HUB delivered top-tier quality. We will definitely work with them again.',
    service: 'Smart Home & Solar Backup',
  },
]

const activeIndex = ref(0)
let timer = null

const visibleCards = computed(() => {
  const len = testimonials.length
  const prev = (activeIndex.value - 1 + len) % len
  const curr = activeIndex.value
  const next = (activeIndex.value + 1) % len
  return [
    testimonials[prev],
    testimonials[curr],
    testimonials[next],
  ]
})

function onImgError(event, t) {
  // Replace broken logo with a styled text fallback
  const el = event.target
  el.style.display = 'none'
  const parent = el.parentElement
  parent.setAttribute('data-fallback', t.fallback)
  parent.classList.add('logo-fallback')
}

function goTo(i) {
  activeIndex.value = i
  resetTimer()
}

function advance() {
  activeIndex.value = (activeIndex.value + 1) % testimonials.length
}

function resetTimer() {
  clearInterval(timer)
  timer = setInterval(advance, 3500)
}

onMounted(() => {
  timer = setInterval(advance, 3500)
})

onBeforeUnmount(() => {
  clearInterval(timer)
})
</script>

<style scoped>
/* ── Section ──────────────────────────────── */
.testimonials {
  width: 100%;
  background: #ffffff;
  padding: 80px 2rem 90px;
  font-family: 'Helvetica Neue', 'Segoe UI', sans-serif;
  position: relative;
  overflow: hidden;
}

/* ── Deco star ────────────────────────────── */
.testimonials__deco {
  position: absolute;
  top: 32px;
  left: 50%;
  transform: translateX(-50%);
}

/* ── Inner layout ─────────────────────────── */
.testimonials__inner {
  max-width: 1100px;
  margin: 60px auto 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
}

/* ── Left ─────────────────────────────────── */
.testimonials__left {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
}

.testimonials__eyebrow {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #F9A825;
}

.testimonials__title {
  font-family: 'Georgia', 'Times New Roman', serif;
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  font-weight: 700;
  color: #111827;
  line-height: 1.15;
}

.testimonials__sub {
  font-size: 0.85rem;
  color: #6b7280;
  line-height: 1.75;
  max-width: 380px;
}

.testimonials__btn {
  align-self: flex-start;
  background: linear-gradient(135deg, #E64A19, #F9A825);
  border: none;
  border-radius: 8px;
  padding: 12px 28px;
  font-family: 'Helvetica Neue', 'Segoe UI', sans-serif;
  font-size: 0.88rem;
  font-weight: 700;
  color: #ffffff;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 6px 20px rgba(230,74,25,0.3);
}

.testimonials__btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 28px rgba(230,74,25,0.4);
}

/* Dots */
.testimonials__dots {
  display: flex;
  gap: 6px;
  align-items: center;
  margin-top: 0.5rem;
}

.tdot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #e5e7eb;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.tdot--active {
  background: #E64A19;
  width: 24px;
  border-radius: 999px;
}

/* ── Right: card stack ────────────────────── */
.testimonials__right {
  display: flex;
  flex-direction: column;
}

.cards__stack {
  position: relative;
}

.cards__inner {
  display: flex;
  flex-direction: column;
  gap: 14px;
  position: relative;
}

/* ── Individual card ──────────────────────── */
.tcard {
  background: #f9fafb;
  border: 1px solid #f0f0f0;
  border-radius: 16px;
  padding: 1.3rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  will-change: transform, opacity;
}

/* Featured (middle) card */
.tcard--featured {
  background: #ffffff;
  border-color: transparent;
  border-left: 3px solid #E64A19;
  box-shadow: 0 8px 32px rgba(0,0,0,0.09);
  transform: translateX(10px);
}

.tcard__head {
  display: flex;
  align-items: center;
  gap: 12px;
}

/* ── Logo wrapper ─────────────────────────── */
.tcard__logo-wrap {
  width: 48px;
  height: 48px;
  border-radius: 10px;
  border: 1.5px solid #e5e7eb;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
}

.tcard--featured .tcard__logo-wrap {
  border-color: #F9A825;
}

.tcard__logo {
  width: 36px;
  height: 36px;
  object-fit: contain;
}

/* Fallback text badge when logo fails */
.tcard__logo-wrap.logo-fallback::after {
  content: attr(data-fallback);
  font-size: 0.65rem;
  font-weight: 800;
  color: #E64A19;
  letter-spacing: 0.05em;
}

.tcard__meta {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.tcard__name {
  font-size: 0.88rem;
  font-weight: 700;
  color: #111827;
  line-height: 1.2;
}

.tcard__company {
  font-size: 0.72rem;
  color: #6b7280;
  font-weight: 500;
}

.tcard__stars {
  display: flex;
  gap: 1px;
  margin-top: 2px;
}

.star {
  font-size: 0.7rem;
  color: #F9A825;
}

.tcard__quote {
  color: #e5e7eb;
  flex-shrink: 0;
}

.tcard--featured .tcard__quote {
  color: #E64A19;
  opacity: 0.25;
}

.tcard__text {
  font-size: 0.82rem;
  color: #374151;
  line-height: 1.7;
}

.tcard--featured .tcard__text {
  color: #111827;
}

.tcard__service {
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #E64A19;
}

/* ── Transition animations ────────────────── */
.card-slide-enter-active,
.card-slide-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.card-slide-leave-active {
  position: absolute;
  width: 100%;
  left: 0;
}

.card-slide-enter-from {
  opacity: 0;
  transform: translateY(24px);
}

.card-slide-leave-to {
  opacity: 0;
  transform: translateY(-24px);
}

.card-slide-move {
  transition: transform 0.4s ease;
}

/* ── Responsive ───────────────────────────── */
@media (max-width: 860px) {
  .testimonials__inner {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .testimonials__sub { max-width: 100%; }
  .tcard--featured { transform: translateX(0); }
}

@media (max-width: 480px) {
  .testimonials { padding: 60px 1.2rem; }
}
</style>