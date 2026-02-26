<template>
  <ProjectHeader />
  <ProjectsGallery />
  <Footer />
</template>

<script>
import ProjectHeader from "../components/ProjectHeader.vue";
import ProjectsGallery from "../components/ProjectGallery.vue";
import Footer from "../components/FooterSection.vue";
export default {
  components: {
    ProjectHeader,
    ProjectsGallery,
    Footer,
  },
};
</script>

<style scoped>
/* Add any page-specific styles here */
</style>
