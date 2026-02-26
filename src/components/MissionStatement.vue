<template>
  <section class="section-container">
    <div class="content-wrapper">
      <div class="mission-grid">
        
        <div v-for="item in content" :key="item.title" class="card">
          <div class="icon-main">
            <component :is="item.icon" :size="70" stroke-width="1.5" />
          </div>

          <h3 class="title">
            <span class="text-dark">OUR</span> 
            <span class="text-accent">{{ item.title }}</span>
          </h3>

          <div class="divider-container">
            <div class="line"></div>
            <div class="icon-mini">
               <component :is="item.icon" :size="16" stroke-width="2" />
            </div>
            <div class="line"></div>
          </div>

          <p class="description">
            {{ item.description }}
          </p>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { markRaw } from 'vue';
import { Target, Lightbulb, Star } from 'lucide-vue-next';

const content = [
  {
    title: 'MISSION',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
    icon: markRaw(Target)
  },
  {
    title: 'VISION',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
    icon: markRaw(Lightbulb)
  },
  {
    title: 'VALUES',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
    icon: markRaw(Star)
  }
];
</script>

<style scoped>
/* Container Setup */
.section-container {
  padding: 80px 0;
  background-color: #ffffff;
  font-family: sans-serif;
}

.content-wrapper {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Layout Grid */
.mission-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
}

/* Card Styling */
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.icon-main {
  color: #F9A825; /* Cyan Accent */
  margin-bottom: 24px;
}

.title {
  font-size: 1.2rem;
  font-weight: 800;
  letter-spacing: 0.15em;
  margin-bottom: 20px;
}

.text-dark {
  color: #333333;
}

.text-accent {
  color:#F9A825;
  margin-left: 8px;
}

/* Decorative Divider */
.divider-container {
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 24px;
}

.line {
  flex-grow: 1;
  height: 1px;
  background-color: #e0e0e0;
}

.icon-mini {
  margin: 0 15px;
  color: #F9A825;
  opacity: 0.6;
}

/* Typography */
.description {
  color: #777777;
  font-size: 0.9rem;
  line-height: 1.6;
  max-width: 300px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .mission-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
</style>