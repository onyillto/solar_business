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

          <p v-if="typeof item.description === 'string'" class="description">
            {{ item.description }}
          </p>

          <ul v-else class="values-list">
            <li v-for="(point, index) in item.description" :key="index">
              <strong>{{ point.label }}:</strong> {{ point.text }}
            </li>
          </ul>
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
    description: 'We are committed to delivering comprehensive solutions through swimming pool construction, water heating, solar panels, battery selling, smart homes, and all forms of heating, ensuring top-quality and efficient service.',
    icon: markRaw(Target)
  },
  {
    title: 'VISION',
    description: 'To be the leading provider of integrated, innovative, and sustainable energy and water solutions, enhancing comfort for homes and businesses.',
    icon: markRaw(Lightbulb)
  },
  {
    title: 'VALUES',
    description: [
      { label: 'Excellence', text: 'Delivering superior quality and innovative solutions to exceed customer expectations.' },
      { label: 'Sustainability', text: 'Committed to eco-friendly and energy-efficient practices.' },
      { label: 'Customer Satisfaction', text: 'Prioritizing client needs and ensuring a seamless experience.' }
    ],
    icon: markRaw(Star)
  }
];
</script>

<style scoped>
/* ... Existing Styles ... */
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

.mission-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.icon-main {
  color: #F9A825; 
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

.description {
  color: #777777;
  font-size: 0.9rem;
  line-height: 1.6;
  max-width: 300px;
}

/* New Styles for the Points */
.values-list {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left; /* Better readability for lists */
  color: #777777;
  font-size: 0.9rem;
  line-height: 1.6;
}

.values-list li {
  margin-bottom: 12px;
  position: relative;
  padding-left: 20px;
}

.values-list li::before {
  content: "•";
  color: #F9A825;
  font-weight: bold;
  position: absolute;
  left: 0;
}

@media (max-width: 768px) {
  .mission-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
</style>