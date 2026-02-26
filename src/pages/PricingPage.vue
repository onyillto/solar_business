<template>
    <ServiceHeader />
    <ServicesSection />
      <Pricingsection />
    <Footer />
</template>

<script>
import Pricingsection from "../components/Pricingsection.vue";
import Footer from "../components/FooterSection.vue";
import ServicesSection from "../components/ServicesSection.vue";
import ServiceHeader from "../components/ServiceHeader.vue";

export default {
  components: {
    Pricingsection,
    Footer,
    ServicesSection,
    ServiceHeader,
  },
};
</script>

<style scoped>
/* Add any page-specific styles here */
</style>
