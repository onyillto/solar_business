<template>
  <section class="offer">

    <!-- Header -->
    <div class="offer__header">
      <p class="offer__eyebrow">What We Offer</p>
      <h2 class="offer__title">
        Select Green Energy for Business<br />Success and a Healthier Planet
      </h2>
    </div>

    <!-- Body -->
    <div class="offer__body">

      <!-- Left sidebar tabs -->
      <div class="offer__tabs">
        <button
          v-for="(item, index) in services"
          :key="item.id"
          @click="active = index"
          :class="['tab', active === index ? 'tab--active' : '']"
        >
          <span class="tab__icon" v-html="item.icon" />
          <span class="tab__label">{{ item.title }}</span>
        </button>
      </div>

      <!-- Right content panel -->
      <div class="offer__panel">
        <div class="panel__img-wrap">
          <img :src="services[active].image" :alt="services[active].title" class="panel__img" />
        </div>
        <div class="panel__info">
          <h3 class="panel__title">{{ services[active].title }}</h3>
          <p class="panel__desc">{{ services[active].desc }}</p>
          <ul class="panel__features">
            <li v-for="f in services[active].features" :key="f">
              <span class="feat__dot" />
              {{ f }}
            </li>
          </ul>
          <button class="panel__btn">Learn More</button>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const active = ref(0)

const services = [
  {
    id: 'residential',
    title: 'Residential Installations',
    desc: 'Residential solar installations involve the placement of solar panels on rooftops or ground-mounted systems in the homeowner\'s property, providing clean, affordable energy directly to your home.',
    image: '/residential.jpeg',
    features: [
      'Rooftop & Ground-Mount Systems',
      'Battery Storage Integration',
      'Smart Energy Monitoring',
    ],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="18" height="18">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>`,
  },
  {
    id: 'commercial',
    title: 'Commercial Installation',
    desc: 'Commercial solar installations are larger-scale systems designed for businesses, offices, or industrial buildings — reducing operational costs and carbon footprint at scale.',
    image: '/commercial.jpeg',
    features: [
      'Large-Scale Rooftop Arrays',
      'Grid-Tied & Off-Grid Systems',
      'Energy Audit & ROI Analysis',
    ],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="18" height="18">
      <rect x="2" y="7" width="20" height="14" rx="1"/>
      <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
    </svg>`,
  },
  {
    id: 'borehole',
    title: 'Borehole Services',
    desc: 'Complete borehole drilling and construction services ensuring clean water access for residential and commercial properties, from initial consultation to full water bank construction.',
    image: '/borehole.jpg',
    features: [
      'Site Survey & Consultation',
      'Stanchion Fabrication',
      'Water Bank Construction',
    ],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="18" height="18">
      <path d="M12 2v20M2 12h20"/>
      <circle cx="12" cy="12" r="4"/>
    </svg>`,
  },
  {
    id: 'smarthome',
    title: 'Smart Home Setup',
    desc: 'Transform your home with intelligent automation — from smart lighting and security systems to full remote control and 24/7 monitoring of all connected devices.',
    image: '/smarthome.jpeg',
    features: [
      'Smart Lighting & Security',
      'Remote Control & Monitoring',
      '24/7 Live Support',
    ],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="18" height="18">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
    </svg>`,
  },
  {
    id: 'streetlight',
    title: 'Solar Street Lighting',
    desc: 'Reliable, energy-efficient solar-powered street and outdoor lighting solutions for communities, estates, roads, and commercial premises — zero electricity cost.',
    image: '/street-light.jpeg',
    features: [
      'Automatic Dusk-to-Dawn Control',
      'High-Lumen LED Fixtures',
      'Solar Panel & Battery Pack',
    ],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="18" height="18">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>`,
  },
]
</script>

<style scoped>
/* ── Section ──────────────────────────────── */
.offer {
  width: 100%;
  background: #f8f9fa;
  padding: 90px 2rem;
  font-family: 'Helvetica Neue', 'Segoe UI', sans-serif;
}

/* ── Header ───────────────────────────────── */
.offer__header {
  text-align: center;
  margin-bottom: 3rem;
}

.offer__eyebrow {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #F9A825;
  background: rgba(230, 74, 25, 0.08);
  border: 1px solid rgba(230, 74, 25, 0.2);
  padding: 4px 14px;
  border-radius: 999px;
  margin-bottom: 1rem;
}

.offer__title {
  font-family: 'Georgia', 'Times New Roman', serif;
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  font-weight: 700;
  color: #111827;
  line-height: 1.2;
}

/* ── Body layout ──────────────────────────── */
.offer__body {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 2rem;
  align-items: start;
}

/* ── Sidebar tabs ─────────────────────────── */
.offer__tabs {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.tab {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 12px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  font-family: 'Helvetica Neue', 'Segoe UI', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  color: #374151;
  cursor: pointer;
  text-align: left;
  transition: all 0.2s ease;
}

.tab:hover {
  border-color: #F9A825;
  color: #111827;
}

.tab--active {
  background: #F9A825;
  border-color: #F9A825;
  color: #ffffff;
  font-weight: 600;
  box-shadow: 0 6px 20px rgba(230, 74, 25, 0.3);
}

.tab__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  opacity: 0.85;
}

.tab--active .tab__icon { opacity: 1; }

.tab__label { line-height: 1.3; }

/* ── Right panel ──────────────────────────── */
.offer__panel {
  background: #ffffff;
  border-radius: 18px;
  border: 1px solid #e5e7eb;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 320px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.06);
}

.panel__img-wrap {
  overflow: hidden;
  height: 400px;
}

.panel__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.offer__panel:hover .panel__img {
  transform: scale(1.04);
}

.panel__info {
  padding: 2rem 1.8rem;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.panel__title {
  font-family: 'Georgia', 'Times New Roman', serif;
  font-size: 1.3rem;
  font-weight: 700;
  color: #111827;
  line-height: 1.25;
}

.panel__desc {
  font-size: 0.83rem;
  color: #6b7280;
  line-height: 1.7;
}

/* Features */
.panel__features {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.panel__features li {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.82rem;
  color: #374151;
  font-weight: 500;
}

.feat__dot {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #F9A825;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.feat__dot::after {
  content: '✓';
  font-size: 0.55rem;
  color: #fff;
  font-weight: 700;
}

/* CTA button */
.panel__btn {
  margin-top: auto;
  align-self: flex-start;
  background: #F9A825;
  border: none;
  border-radius: 8px;
  padding: 11px 24px;
  font-family: 'Helvetica Neue', 'Segoe UI', sans-serif;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #ffffff;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
}

.panel__btn:hover {
  background: #bf360c;
  transform: translateY(-1px);
}

/* ── Responsive ───────────────────────────── */
@media (max-width: 860px) {
  .offer__body {
    grid-template-columns: 1fr;
  }

  .offer__tabs {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 8px;
  }

  .tab {
    flex: 1 1 auto;
    min-width: 140px;
    justify-content: center;
    text-align: center;
  }
}

@media (max-width: 600px) {
  .offer__panel {
    grid-template-columns: 1fr;
  }

  .panel__img-wrap {
    height: 200px;
  }

  .offer { padding: 60px 1.2rem; }
}
</style>