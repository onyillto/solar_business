import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import AboutPage from "./pages/AboutPage.vue";
import ContactPage from "./pages/ContactPage.vue";
import PricingPage from "./pages/PricingPage.vue";
import ProjectsPage from "./pages/ProjectsPage.vue";
import MarketPlacePage from "./pages/MarketPlacePage.vue";
const routes = [
  { path: "/", component: HomePage },
  { path: "/about", component: AboutPage },
  { path: "/contact", component: ContactPage },
  { path: "/service", component: PricingPage },
  { path: "/projects", component: ProjectsPage },
  {
    path: "/testimonials",
    component: () => import("./components/TestimonialsSection.vue"),
  },
  {
    path: "/services",
    component: () => import("./components/Whatweoffer.vue"),
  },
  {
    path: "/footer",
    component: () => import("./components/FooterSection.vue"),
  },
  {
    path: "/market",
    component: MarketPlacePage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
