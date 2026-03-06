<template>
  <section class="projects">
    <!-- Header -->
    <div class="projects__header">
      <p class="projects__eyebrow">Our Portfolio</p>
      <h2 class="projects__title">Our Latest Projects</h2>
      <p class="projects__sub">
        Delivering clean energy and smart technology solutions across Nigeria
      </p>
    </div>

    <!-- Slider wrapper – pause autoplay when hovering here -->
    <div 
      class="projects__slider-wrap"
      @mouseenter="pauseAutoPlay"
      @mouseleave="resumeAutoPlay"
    >
      <div class="projects__track" :style="trackStyle">
        <div
          v-for="(project, i) in projects"
          :key="project.id"
          class="projects__card"
        >
          <div class="card__img-wrap">
            <img :src="project.image" :alt="project.title" class="card__img" />
            <div class="card__overlay">
              <span class="card__category">{{ project.category }}</span>
              <h3 class="card__title">{{ project.title }}</h3>
              <p class="card__location">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  width="13"
                  height="13"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {{ project.location }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Controls -->
    <div class="projects__controls">
      <button
        class="ctrl__arrow ctrl__arrow--prev"
        @click="prev"
        :disabled="currentIndex === 0"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
          width="16"
          height="16"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <div class="ctrl__dots">
        <button
          v-for="(_, i) in dotCount"
          :key="i"
          @click="goTo(i)"
          :class="['dot', { 'dot--active': currentIndex === i }]"
        />
      </div>

      <button
        class="ctrl__arrow ctrl__arrow--next"
        @click="next"
        :disabled="currentIndex >= maxIndex"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
          width="16"
          height="16"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const currentIndex = ref(0)
const visibleCount = ref(3)

const AUTO_PLAY_DELAY = 5000  // 5 seconds
let autoPlayTimer = null

const projects = [
  {
    id: 1,
    title: "Industrial Solar Farm",
    category: "Solar Installation",
    location: "Lagos, Nigeria",
    image: "/mo1.jpeg",
  },
  {
    id: 2,
    title: "Smart Home Automation",
    category: "Smart Setup",
    location: "Abuja, Nigeria",
    image: "borehole.jpeg",
  },
  {
    id: 3,
    title: "Residential Borehole",
    category: "Borehole Services",
    location: "Port Harcourt, Nigeria",
    image: "/residential.jpeg",
  },
  {
    id: 4,
    title: "Commercial Solar Rooftop",
    category: "Commercial Installation",
    location: "Enugu, Nigeria",
    image: "/commercial.jpeg",
  },
  {
    id: 5,
    title: "Solar Street Lighting",
    category: "Solar StreetLight",
    location: "Ibadan, Nigeria",
    image: "/street-light.jpeg",
  },
  {
    id: 6,
    title: "Solar Panel Installation",
    category: "Residential Installation",
    location: "Kaduna, Nigeria",
    image: "/mo2.jpeg",
  },
  {
    id: 7,
    title: "Drilling Services",
    category: "Drilling Services",
    location: "Lagos, Nigeria",
    image: "/con.jpeg",
  },
  {
    id: 8,
    title: "Smart Inverter Setup",
    category: "Smart Setup",
    location: "Abuja, Nigeria",
    
    image: "/co.jpeg",
  },
]

const maxIndex = computed(() => Math.max(0, projects.length - visibleCount.value))
const dotCount = computed(() => maxIndex.value + 1)

const trackStyle = computed(() => ({
  transform: `translateX(calc(-${currentIndex.value} * (100% / ${visibleCount.value}) - ${currentIndex.value} * 1.5rem / ${visibleCount.value}))`,
  transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
}))

// Navigation
function next() {
  if (currentIndex.value < maxIndex.value) {
    currentIndex.value++
  } else {
    currentIndex.value = 0   // loop to first
  }
}

function prev() {
  if (currentIndex.value > 0) {
    currentIndex.value--
  } else {
    currentIndex.value = maxIndex.value   // loop to last
  }
}

function goTo(index) {
  currentIndex.value = index
}

// Auto-play
function startAutoPlay() {
  stopAutoPlay() // prevent duplicates
  autoPlayTimer = setInterval(next, AUTO_PLAY_DELAY)
}

function stopAutoPlay() {
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer)
    autoPlayTimer = null
  }
}

function pauseAutoPlay() {
  stopAutoPlay()
}

function resumeAutoPlay() {
  startAutoPlay()
}

// Responsive logic
function updateVisibleCount() {
  const width = window.innerWidth
  if (width <= 560) visibleCount.value = 1
  else if (width <= 860) visibleCount.value = 2
  else visibleCount.value = 3

  // Clamp current index if needed
  if (currentIndex.value > maxIndex.value) {
    currentIndex.value = maxIndex.value
  }
}

onMounted(() => {
  updateVisibleCount()
  window.addEventListener('resize', updateVisibleCount)
  startAutoPlay()
})

onUnmounted(() => {
  window.removeEventListener('resize', updateVisibleCount)
  stopAutoPlay()
})
</script>

<style scoped>
.projects {
  width: 100%;
  background: #ffffff;
  padding: 90px 0 70px;
  font-family: "Helvetica Neue", "Segoe UI", sans-serif;
  overflow: hidden;
}

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
  color: #f9a825;
  margin-bottom: 0.6rem;
}

.projects__title {
  font-family: "Georgia", "Times New Roman", serif;
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.6rem;
}

.projects__sub {
  font-size: 0.88rem;
  color: #9ca3af;
}

.projects__slider-wrap {
  overflow: hidden;
  padding: 0 2rem;
}

.projects__track {
  display: flex;
  gap: 1.5rem;
  will-change: transform;
}

.projects__card {
  flex: 0 0 calc((100% - 3rem) / 3);
  border-radius: 16px;
  overflow: hidden;
  position: relative;
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

.card__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 55%, transparent 100%);
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
  background: #e64a19;
  padding: 3px 10px;
  border-radius: 999px;
  margin-bottom: 6px;
}

.card__title {
  font-family: "Georgia", serif;
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
  background: #e64a19;
  border-color: #e64a19;
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
  background: #e64a19;
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
  .card__img-wrap {
    height: 220px;
  }
  .projects {
    padding: 60px 0 50px;
  }
}
</style>