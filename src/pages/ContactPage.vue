<template>
   <ContactHeader />
  <Contactsection />
  <Footer />  
</template>


<script>
import Contactsection from "../components/Contactsection.vue";
import ContactHeader from "../components/ContactHeader.vue";
import Footer from "../components/FooterSection.vue";

export default {
  components: {
    Contactsection,
    ContactHeader,
    Footer,
  },
};
</script>

<style scoped>
/* Add any page-specific styles here */
</style>
