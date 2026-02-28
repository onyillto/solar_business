<template>
  <div class="hero-slider">
    <div
      class="slides"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div
        class="slide"
        v-for="(slide, index) in slides"
        :key="index"
      >
        <img :src="slide.image" class="slide-image" />

        <div class="overlay"></div>

        <div class="content">
          <div class="price-circle">
            <p>AS LOW AS</p>
            <h2>₦72K</h2>
            <p>PER MONTH</p>
          </div>

          <h1>
            POWER YOUR SHOPS
            <span>WITH SOLAR ENERGY</span>
          </h1>

          <button class="cta-btn">
            Learn More ↗
          </button>
        </div>
      </div>
    </div>

    <!-- Arrows -->
    <button class="arrow left" @click="prevSlide">‹</button>
    <button class="arrow right" @click="nextSlide">›</button>

    <!-- Dots -->
    <div class="dots">
      <span
        v-for="(slide, index) in slides"
        :key="index"
        :class="{ active: currentIndex === index }"
        @click="goToSlide(index)"
      ></span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const currentIndex = ref(0);

const slides = ref([
  { image: "/borehole.jpeg" },
  { image: "/commercial.jpeg" },
  { image: "/residential.jpeg" },
]);

const nextSlide = () => {
  currentIndex.value =
    (currentIndex.value + 1) % slides.value.length;
};

const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + slides.value.length) %
    slides.value.length;
};

const goToSlide = (index) => {
  currentIndex.value = index;
};

let interval;

onMounted(() => {
  interval = setInterval(() => {
    nextSlide();
  }, 5000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<style scoped>
.hero-slider {
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
}

.slides {
  display: flex;
  height: 100%;
  transition: transform 0.7s ease-in-out;
}

.slide {
  min-width: 100%;
  height: 100%;
  position: relative;
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Orange gradient overlay */
.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    rgba(205, 210, 126, 0.8),
    #F9A825
  );
}

/* Content */
.content {
  position: absolute;
  right: 80px;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  max-width: 500px;
}

/* Price Circle */
.price-circle {
  width: 180px;
  height: 180px;
  background: white;
  color: #F9A825;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.price-circle h2 {
  font-size: 40px;
  margin: 5px 0;
}

.price-circle p {
  font-size: 14px;
  font-weight: 600;
}

/* Heading */
.content h1 {
  font-size: 38px;
  font-weight: 800;
  line-height: 1.2;
}

.content h1 span {
  display: block;
  font-size: 22px;
  font-weight: 600;
}

/* Button */
.cta-btn {
  margin-top: 20px;
  padding: 12px 25px;
  border-radius: 30px;
  border: none;
  background: white;
  color: #F9A825;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
}

.cta-btn:hover {
  background: #f2f2f2;
}

/* Arrows */
.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 40px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}

.arrow.left {
  left: 20px;
}

.arrow.right {
  right: 20px;
}

/* Dots */
.dots {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
}

.dots span {
  width: 10px;
  height: 10px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  cursor: pointer;
}

.dots span.active {
  background: white;
}

/* Responsive */
@media (max-width: 768px) {
  .content {
    right: 20px;
    max-width: 90%;
  }

  .price-circle {
    width: 130px;
    height: 130px;
  }

  .price-circle h2 {
    font-size: 26px;
  }

  .content h1 {
    font-size: 24px;
  }

  .content h1 span {
    font-size: 16px;
  }
}
</style>