<template>
  <div id="app">
    <Navbar />
    <main>
      <HeroSection />
      <AboutSection />
      <PricingSection />
      <WhatWeOffer />
      <ProjectsSection />
      <TestimonialsSection />
      <Contactsection />
      <FooterSection />
    </main>
  </div>
</template>

<script setup>
import Navbar from './components/navbar.vue'
import HeroSection from './components/Herosection.vue'
import AboutSection from './components/AboutSection.vue'
import PricingSection from './components/Pricingsection.vue'
import WhatWeOffer from './components/Whatweoffer.vue'
import ProjectsSection from './components/Projectssection.vue'
import TestimonialsSection from './components/TestimonialsSection.vue'
import Contactsection from './components/Contactsection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<style>
/* ── Global reset ── */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
  width: 100%;
  overflow-x: hidden;
}

body {
  font-family: 'Helvetica Neue', 'Segoe UI', sans-serif;
  
}

/* ── Root app — NO max-width, NO padding ── */
#app {
  width: 100%;
  min-height: 100vh;
}

/* ── Main content sits below fixed navbar ── */
main {
  padding-top: 0; /* hero handles its own top padding */
  width: 100%;
}
</style>