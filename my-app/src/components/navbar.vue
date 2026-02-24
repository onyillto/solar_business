<template>
  <nav class="navbar">
    <!-- Top accent line -->
    <div class="accent-line" />

    <div class="nav-inner">
      <!-- Logo -->
      <a href="#" class="logo">
        <img src="../../public/logo.jpeg" alt="Logo" class="logo-img" />
        <!-- <span class="logo-text">PORTFOLIO</span> -->
      </a>

      <!-- Nav Menu Pill -->
      <div class="nav-pill">
        <a
          v-for="item in navItems"
          :key="item.label"
          :href="item.href"
          @click.prevent="setActive(item.label)"
          :class="[
            'nav-link',
            activeItem === item.label ? 'nav-link--active' : '',
          ]"
        >
          <svg
            v-if="activeItem === item.label"
            class="nav-icon"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
          </svg>
          {{ item.label }}
        </a>
      </div>

      <!-- Right Actions -->
      <div class="nav-actions">
        <button class="btn-contact">Let's Talk</button>
      </div>

      <!-- Mobile hamburger -->
      <button
        class="hamburger"
        @click="mobileOpen = !mobileOpen"
        aria-label="Toggle menu"
      >
        <span :class="['bar', mobileOpen ? 'bar--top-open' : '']" />
        <span :class="['bar', mobileOpen ? 'bar--mid-open' : '']" />
        <span :class="['bar', mobileOpen ? 'bar--bot-open' : '']" />
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition name="mobile-menu">
      <div v-if="mobileOpen" class="mobile-menu">
        <a
          v-for="item in navItems"
          :key="item.label"
          :href="item.href"
          @click.prevent="
            setActive(item.label);
            mobileOpen = false;
          "
          :class="[
            'mobile-link',
            activeItem === item.label ? 'mobile-link--active' : '',
          ]"
        >
          <span v-if="activeItem === item.label" class="mobile-dot" />
          {{ item.label }}
        </a>
        <div class="mobile-actions">
          <button class="btn-contact btn-block">Let's Talk</button>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const activeItem = ref("OUR SERVICES");
const mobileOpen = ref(false);

const navItems = [
  { label: "OUR SERVICES", href: "#services" },
  { label: "OUR PROJECT", href: "#project" },
  { label: "OUR TEAM", href: "#team" },
  { label: "CONTACT US", href: "#contact" },
  { label: "MARKET SPACE", href: "#market" },
];

function setActive(label) {
  activeItem.value = label;
}
</script>

<style scoped>
/* ── Variables ─────────────────────────── */
.navbar {
  --c-blue: #1565c0;
  --c-blue-light: #42a5f5;
  --c-orange: #e64a19;
  --c-teal: #00897b;
  --c-teal-light: #26c6da;
  --c-gold: #f9a825;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background: #ffffff;
  border-bottom: 1px solid #f0f0f0;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.07);
}
.hero {
  width: 100vw;
  margin-left: calc(-50vw + 50%); /* break out of any container */
}
/* ── Accent gradient line ───────────────── */
.accent-line {
  height: 3px;
  background: linear-gradient(
    90deg,
    var(--c-blue),
    var(--c-teal-light),
    var(--c-orange),
    var(--c-gold)
  );
}

/* ── Inner layout ───────────────────────── */
.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  height: 64px;
}

/* ── Logo ───────────────────────────────── */
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  flex-shrink: 0;
}

.logo-img {
  height: 66px;
  width: auto;
}

.logo-text {
  font-family: "Segoe UI", system-ui, sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: #1f2937;
  letter-spacing: 0.06em;
}

/* ── Nav pill ───────────────────────────── */
.nav-pill {
  display: flex;
  align-items: center;
  background: #111827;
  border-radius: 999px;
  padding: 5px 6px;
  gap: 2px;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #9ca3af;
  text-decoration: none;
  transition: color 0.2s ease, background 0.2s ease;
  white-space: nowrap;
  cursor: pointer;
}

.nav-link:hover {
  color: #ffffff;
}

.nav-link--active {
  background: #ffffff;
  color: #111827 !important;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
}

.nav-icon {
  width: 13px;
  height: 13px;
  color: var(--c-blue);
  flex-shrink: 0;
}

/* ── Right buttons ──────────────────────── */
.nav-actions {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}

.btn-contact {
  background: var(--c-blue);
  border: 1px solid var(--c-blue);
  border-radius: 999px;
  font-size: 0.875rem;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
  padding: 8px 24px;
  transition: background 0.2s, border-color 0.2s;
  font-family: inherit;
}

.btn-contact:hover {
  background: var(--c-blue-light);
  border-color: var(--c-blue-light);
}

/* ── Hamburger ──────────────────────────── */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
}

.bar {
  display: block;
  width: 22px;
  height: 2px;
  background: #374151;
  border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.bar--top-open {
  transform: rotate(45deg) translate(5px, 5px);
}
.bar--mid-open {
  opacity: 0;
}
.bar--bot-open {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* ── Mobile dropdown ────────────────────── */
.mobile-menu {
  background: #ffffff;
  border-top: 1px solid #f3f4f6;
  padding: 8px 1.5rem 1.2rem;
  display: flex;
  flex-direction: column;
}

.mobile-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px 0;
  border-bottom: 1px solid #f3f4f6;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #4b5563;
  text-decoration: none;
  transition: color 0.2s;
  cursor: pointer;
}

.mobile-link:hover {
  color: #111827;
}
.mobile-link--active {
  color: var(--c-blue);
}

.mobile-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--c-blue);
  flex-shrink: 0;
}

.mobile-actions {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 14px;
}

.btn-block {
  width: 100%;
  padding: 11px;
  border-radius: 999px;
}

/* ── Transition ─────────────────────────── */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

/* ── Responsive ─────────────────────────── */
@media (max-width: 900px) {
  .nav-pill {
    display: none;
  }
  .nav-actions {
    display: none;
  }
  .hamburger {
    display: flex;
  }
}

@media (max-width: 480px) {
  .nav-inner {
    padding: 0 1rem;
  }
}
</style>
