<template>
  <section class="services-section">
    <div class="services-header">
      <div class="badge">
        <span class="badge-dot"></span>
        Professional Services
      </div>
      <h2 class="services-title">
        Our <span class="theme-text">Expertise</span>
      </h2>
      <div class="header-divider"></div>
      <!-- <p class="services-subtitle">
        We provide cutting-edge solutions tailored to Nigeria's unique environment, 
        ensuring reliability, efficiency, and long-term sustainability.
      </p> -->
    </div>


  </section>
</template>

<script setup>
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
    image: '/residential.jpeg',
  },
  {
    id: 4,
    title: 'Commercial Solar Rooftop',
    category: 'Commercial Installation',
    location: 'Enugu, Nigeria',
    image: '/commercial.jpeg',
  },
  {
    id: 5,
    title: 'Solar Street Lighting',
    category: 'Solar StreetLight',
    location: 'Ibadan, Nigeria',
    image: '/street-light.jpeg',
  },
  {
    id: 6,
    title: 'Solar Panel Installation',
    category: 'Residential Installation',
    location: 'Kaduna, Nigeria',
    image: '/',
  }
]
</script>

<style scoped>
.services-section {
  --theme-orange: #eb662b;
  --bg-dark: #0f1115;
  
  background-color: var(--bg-dark);
  padding: 120px 24px;
  color: #ffffff;
  overflow: hidden;
}

/* ── Centered Header ── */
.services-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #ffffff;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 8px 20px;
  border-radius: 100px;
  margin-bottom: 24px;
}

.badge-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--theme-orange);
  box-shadow: 0 0 10px var(--theme-orange);
}

.services-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 900;
  margin: 0;
  line-height: 1.1;
}

.theme-text {
  color: var(--theme-orange);
}

.header-divider {
  width: 60px;
  height: 4px;
  background: var(--theme-orange);
  margin: 24px 0;
  border-radius: 2px;
}

.services-subtitle {
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.7;
  font-size: 1.1rem;
}

/* ── Grid with Stagger ── */
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
}

.stagger-middle { transform: translateY(40px); }
.stagger-end { transform: translateY(80px); }

/* ── Card Styling ── */
.service-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 4px; /* Matches your squared-off screenshot style */
  transition: all 0.3s ease;
}

.service-card:hover {
  border-color: var(--theme-orange);
  transform: translateY(-5px); /* Gentle lift on top of stagger */
}

.card-image-wrap {
  position: relative;
  height: 220px;
  overflow: hidden;
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.9;
}

.card-badge {
  position: absolute;
  top: 16px;
  left: 16px;
  background: #ffffff;
  color: #000;
  padding: 4px 12px;
  font-size: 0.7rem;
  font-weight: 900;
  text-transform: uppercase;
}

.card-body {
  padding: 32px;
}

.card-title {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 12px;
}

.card-location {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.85rem;
  margin-bottom: 32px;
}

.service-link {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: #ffffff;
  font-weight: 800;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.arrow-box {
  width: 28px;
  height: 28px;
  background: var(--theme-orange);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}

/* ── Responsive ── */
@media (max-width: 992px) {
  .services-grid { grid-template-columns: 1fr 1fr; }
  .stagger-end { transform: translateY(0); }
  .service-card:nth-child(even) { transform: translateY(40px); }
}

@media (max-width: 600px) {
  .services-grid { grid-template-columns: 1fr; gap: 40px; }
  .stagger-middle, .service-card:nth-child(even) { transform: translateY(0); }
  .services-title { font-size: 2.2rem; }
}
</style>