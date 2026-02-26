<template>
    <AboutHeader />
  <AboutSection />
  <MissionStatement />
    <Footer />
</template>

<script>
import AboutHeader from "../components/AboutHeader.vue";
import AboutSection from "../components/AboutSection.vue";
import MissionStatement from "../components/MissionStatement.vue";
import Footer from "../components/FooterSection.vue";
export default {
  components: {
    AboutSection,
    AboutHeader,
    MissionStatement,
        Footer,
  },
};
</script>

<style scoped>
/* Add any page-specific styles here */
</style>
