<template>
  <Herosection />
    <AboutSection />
    <PricingSection />
    <WhatWeOffer />
    <ProjectsSection />
    <TestimonialsSection />
    <Contactsection />
    <FooterSection />
</template>

<script>
import Herosection from "../components/Herosection.vue";
import AboutSection from '../components/AboutSection.vue'
import PricingSection from '../components/Pricingsection.vue'
import WhatWeOffer from '../components/Whatweoffer.vue'
import ProjectsSection from '../components/Projectssection.vue'
import TestimonialsSection from '../components/TestimonialsSection.vue'
import Contactsection from '../components/Contactsection.vue'
import FooterSection from '../components/FooterSection.vue'

export default {
  components: {
    Herosection,
    AboutSection,
    PricingSection,
    WhatWeOffer,
    ProjectsSection,
    TestimonialsSection,
    Contactsection,
    FooterSection,

  },
};
</script>

<style scoped>
/* Add any page-specific styles here */
</style>
