<template>
  <section class="projects">

    <!-- Header -->
    <div class="projects__header">
      <p class="projects__eyebrow">Our Portfolio</p>
      <h2 class="projects__title">Our Latest Projects</h2>
      <p class="projects__sub">Delivering clean energy and smart technology solutions across Nigeria</p>
    </div>

    <!-- Slider -->
    <div class="projects__slider-wrap">
      <div class="projects__track" :style="trackStyle">
        <div
          v-for="(project, i) in projects"
          :key="project.id"
          class="projects__card"
          @mouseenter="hoveredCard = i"
          @mouseleave="hoveredCard = null"
        >
          <div class="card__img-wrap">
            <img :src="project.image" :alt="project.title" class="card__img" />
            <div class="card__overlay">
              <span class="card__category">{{ project.category }}</span>
              <h3 class="card__title">{{ project.title }}</h3>
              <p class="card__location">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                {{ project.location }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Dots + arrows -->
    <div class="projects__controls">
      <button class="ctrl__arrow ctrl__arrow--prev" @click="prev" :disabled="currentIndex === 0">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16">
          <polyline points="15 18 9 12 15 6"/>
        </svg>
      </button>

      <div class="ctrl__dots">
        <button
          v-for="(_, i) in dotCount"
          :key="i"
          @click="goTo(i)"
          :class="['dot', currentIndex === i ? 'dot--active' : '']"
        />
      </div>

      <button class="ctrl__arrow ctrl__arrow--next" @click="next" :disabled="currentIndex >= maxIndex">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16">
          <polyline points="9 18 15 12 9 6"/>
        </svg>
      </button>
    </div>

  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const currentIndex = ref(0)
const hoveredCard = ref(null)
const visibleCount = 3

const projects = [
  {
    id: 1,
    title: 'Industrial Solar Farm',
    category: 'Solar Installation',
    location: 'Lagos, Nigeria',
    image: '/residential.jpeg',
  },
  {
    id: 2,
    title: 'Smart Home Automation',
    category: 'Smart Setup',
    location: 'Abuja, Nigeria',
    image: 'borehole.jpeg',
  },
  {
    id: 3,
    title: 'Residential Borehole',
    category: 'Borehole Services',
    location: 'Port Harcourt, Nigeria',
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'Commercial Solar Rooftop',
    category: 'Commercial Installation',
    location: 'Enugu, Nigeria',
    image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    title: 'Solar Street Lighting',
    category: 'Solar StreetLight',
    location: 'Ibadan, Nigeria',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    title: 'Solar Panel Installation',
    category: 'Residential Installation',
    location: 'Kaduna, Nigeria',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80',
  },
]

const maxIndex = computed(() => projects.length - visibleCount)
const dotCount = computed(() => maxIndex.value + 1)

const trackStyle = computed(() => ({
  transform: `translateX(calc(-${currentIndex.value} * (100% / ${visibleCount}) - ${currentIndex.value} * 1.5rem / ${visibleCount}))`,
  transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
}))

function prev() {
  if (currentIndex.value > 0) currentIndex.value--
}
function next() {
  if (currentIndex.value < maxIndex.value) currentIndex.value++
}
function goTo(i) {
  currentIndex.value = i
}
</script>

<style scoped>
/* ── Section ──────────────────────────────── */
.projects {
  width: 100%;
  background: #ffffff;
  padding: 90px 0 70px;
  font-family: 'Helvetica Neue', 'Segoe UI', sans-serif;
  overflow: hidden;
}

/* ── Header ───────────────────────────────── */
.projects__header {
  text-align: center;
  padding: 0 2rem;
  margin-bottom: 2.8rem;
}

.projects__eyebrow {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #F9A825;
  margin-bottom: 0.6rem;
}

.projects__title {
  font-family: 'Georgia', 'Times New Roman', serif;
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.6rem;
}

.projects__sub {
  font-size: 0.88rem;
  color: #9ca3af;
}

/* ── Slider ───────────────────────────────── */
.projects__slider-wrap {
  overflow: hidden;
  padding: 0 2rem;
}

.projects__track {
  display: flex;
  gap: 1.5rem;
}

/* ── Card ─────────────────────────────────── */
.projects__card {
  flex: 0 0 calc((100% - 3rem) / 3);
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
}

.card__img-wrap {
  position: relative;
  width: 100%;
  height: 260px;
  overflow: hidden;
  border-radius: 16px;
}

.card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}

.projects__card:hover .card__img {
  transform: scale(1.07);
}

/* Overlay */
.card__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0,0,0,0.75) 0%,
    rgba(0,0,0,0.1) 55%,
    transparent 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.4rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.projects__card:hover .card__overlay {
  opacity: 1;
}

.card__category {
  display: inline-block;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #fff;
  background: #E64A19;
  padding: 3px 10px;
  border-radius: 999px;
  margin-bottom: 6px;
  align-self: flex-start;
}

.card__title {
  font-family: 'Georgia', serif;
  font-size: 1rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 4px;
  line-height: 1.3;
}

.card__location {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.75rem;
  color: rgba(255,255,255,0.75);
}

/* ── Controls ─────────────────────────────── */
.projects__controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

.ctrl__arrow {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: #f3f4f6;
  border: 1.5px solid #e5e7eb;
  color: #374151;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.ctrl__arrow:hover:not(:disabled) {
  background: #E64A19;
  border-color: #E64A19;
  color: #fff;
}

.ctrl__arrow:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.ctrl__dots {
  display: flex;
  align-items: center;
  gap: 6px;
}

.dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #d1d5db;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 0;
}

.dot--active {
  background: #E64A19;
  width: 22px;
  border-radius: 999px;
}

/* ── Responsive ───────────────────────────── */
@media (max-width: 860px) {
  .projects__card {
    flex: 0 0 calc((100% - 1.5rem) / 2);
  }
}

@media (max-width: 560px) {
  .projects__card {
    flex: 0 0 100%;
  }

  .card__img-wrap { height: 220px; }
  .projects { padding: 60px 0 50px; }
}
</style>