<template>
  <section class="services">
    <div class="services__header">
      <h2 class="services__title">Our services</h2>
      <p class="services__subtitle">
        Discover our comprehensive solutions tailored to your needs, <br />
spanning from smart home automation and innovative solar technology to  <br /> water heating and all forms of sustainable construction. 
      </p>
      <!-- <div class="services__btns">
        <button class="btn btn--primary">Get a quote</button>
        <button class="btn btn--outline">Learn more</button>
      </div> -->
    </div>

    <div class="services__grid">
      <div v-for="(service, index) in services" :key="index" class="service-card">
        <div class="service-card__icon">
          <component :is="service.icon" :size="48" stroke-width="1.2" />
        </div>
        <h3 class="service-card__title">{{ service.title }}</h3>
        <p class="service-card__text">{{ service.description }}</p>
        <!-- <a href="#" class="service-card__link">
          <span class="link__icon">↗</span>
          Learn more
        </a> -->
      </div>
    </div>
  </section>
</template>

<script setup>
import { markRaw } from 'vue';
import { 
  LayoutTemplate, 
  HardHat, 
  Construction, 
  Palette, 
  Compass, 
  Box 
} from 'lucide-vue-next';

const services = [
  {
    title: 'Industrial Solar Farm',
    description: 'Large-scale solar energy solutions designed for industrial efficiency, providing sustainable power for factories and large facilities across Lagos.',
    icon: markRaw(LayoutTemplate)
  },
  {
    title: 'Smart Home Automation',
    description: 'Cutting-edge smart setups in Abuja that integrate energy management and home security for a seamless, modern living experience.',
    icon: markRaw(HardHat)
  },
  {
    title: 'Residential Borehole',
    description: 'Professional borehole drilling and water treatment services in Port Harcourt, ensuring clean and reliable water access for homes.',
    icon: markRaw(Construction)
  },
  {
    title: 'Commercial Solar Rooftop',
    description: 'Optimizing commercial spaces in Enugu with high-performance rooftop solar panels to significantly reduce operational energy costs.',
    icon: markRaw(Palette)
  },
  {
    title: 'Solar Street Lighting',
    description: 'Advanced solar-powered street lighting installations in Ibadan, enhancing safety and visibility with eco-friendly technology.',
    icon: markRaw(Compass)
  },
  {
    title: 'Solar Panel Installation',
    description: 'Expert residential solar installations in Kaduna, tailored to provide consistent and renewable energy for your household needs.',
    icon: markRaw(Box)
  }
];
</script>

<style scoped>
.services {
  --theme-color: #eb662b; /* Change to #00bcd4 for your cyan theme */
  --text-main: #1a1a1a;
  --text-muted: #666666;
  
  padding: 100px 2rem;
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Inter', system-ui, sans-serif;
}

/* ── Header ── */
.services__header {
  text-align: center;
  margin-bottom: 80px;
}

.services__title {
  font-size: 3rem;
  font-weight: 800;
  color: var(--text-main);
  margin-bottom: 1.5rem;
}

.services__subtitle {
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 2.5rem;
}

.services__btns {
  display: flex;
  gap: 15px;
  justify-content: center;
}

/* ── Buttons ── */
.btn {
  padding: 14px 28px;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 0.9rem;
}

.btn--primary {
  background: var(--theme-color);
  color: white;
  border: none;
}

.btn--outline {
  background: transparent;
  border: 1.5px solid #ccc;
  color: var(--text-main);
}

.btn:hover {
  transform: translateY(-2px);
  opacity: 0.9;
}

/* ── Grid & Stagger Effect ── */
.services__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  align-items: start;
}

/* The magic for the "staggered" look */
.services__grid > :nth-child(3n+2) {
  margin-top: 60px;
}

.services__grid > :nth-child(3n) {
  margin-top: 120px;
}

/* ── Card Styling ── */
.service-card {
  background: white;
  border: 1px solid #eeeeee;
  padding: 40px;
  text-align: left;
  transition: box-shadow 0.3s ease;
}

.service-card:hover {
  box-shadow: 0 20px 40px rgba(0,0,0,0.05);
}

.service-card__icon {
  color: var(--theme-color);
  margin-bottom: 25px;
}

.service-card__title {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 15px;
  color: var(--text-main);
}

.service-card__text {
  font-size: 0.95rem;
  color: var(--text-muted);
  line-height: 1.7;
  margin-bottom: 25px;
}

.service-card__link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: var(--text-main);
  font-weight: 700;
  font-size: 0.85rem;
}

.link__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: var(--text-main);
  color: white;
  font-size: 12px;
  border-radius: 2px;
}

/* ── Responsive ── */
@media (max-width: 992px) {
  .services__grid { grid-template-columns: repeat(2, 1fr); }
  .services__grid > :nth-child(even) { margin-top: 60px; }
  .services__grid > :nth-child(odd) { margin-top: 0; }
}

@media (max-width: 600px) {
  .services__grid { grid-template-columns: 1fr; }
  .services__grid > * { margin-top: 0 !important; }
  .services__title { font-size: 2.2rem; }
}
</style>
