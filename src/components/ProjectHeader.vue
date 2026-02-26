<template>
  <header class="about-header">
    <div class="blob-container">
      <div class="blob blob-1"></div>
      <div class="blob blob-2"></div>
    </div>
    <div class="grid-texture"></div>

    <div class="header-content">
      <div class="badge">
        <span class="badge-dot"></span>
        Our Project
      </div>
      
      <h1 class="header-title">
        Powering the <br class="break" />
        <span class="title-highlight">Future of Nigeria</span>
      </h1>
      
      <!-- <p class="header-subtitle">
        Dedicated to providing sustainable energy and clean water solutions. 
        Learn how we're building a greener tomorrow through innovation and engineering.
      </p> -->

      <div class="scroll-hint">
        <div class="scroll-dot"></div>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* ── Base Configuration ── */
.about-header {
  --theme-orange: #eb662b; /* Your core orange theme */
  --theme-orange-soft: rgba(235, 102, 43, 0.15);
  
  position: relative;
  margin-top: 64px; /* Offset for Navbar */
  min-height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #0f1115; /* Deep slate professional background */
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  padding: 100px 24px 80px;
  font-family: 'Inter', system-ui, sans-serif;
}

/* ── Decorative Glow Blobs ── */
.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.18; /* Subtle glow */
  pointer-events: none;
}

.blob-1 {
  width: 550px;
  height: 550px;
  background: var(--theme-orange);
  top: -180px;
  left: -120px;
  animation: drift 14s ease-in-out infinite alternate;
}

.blob-2 {
  width: 450px;
  height: 450px;
  background: var(--theme-orange);
  bottom: -120px;
  right: -80px;
  animation: drift 18s ease-in-out infinite alternate-reverse;
}

@keyframes drift {
  from { transform: translate(0, 0) scale(1); }
  to   { transform: translate(50px, 40px) scale(1.1); }
}

/* ── Subtle Grid Texture ── */
.grid-texture {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 60px 60px;
  pointer-events: none;
}

/* ── Content Layout ── */
.header-content {
  position: relative;
  z-index: 2;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
}

/* ── Status Badge ── */
.badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #ffffff;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 8px 22px;
  border-radius: 100px;
  backdrop-filter: blur(12px);
}

.badge-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--theme-orange);
  box-shadow: 0 0 15px var(--theme-orange);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.4); opacity: 0.6; }
}

/* ── Typography ── */
.header-title {
  font-size: clamp(2.8rem, 8vw, 4.8rem);
  font-weight: 900;
  line-height: 1.0;
  letter-spacing: -0.04em;
  color: #ffffff;
  margin: 0;
}

.title-highlight {
  color: var(--theme-orange);
  position: relative;
}

.header-subtitle {
  font-size: clamp(1.05rem, 2vw, 1.25rem);
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.75;
  max-width: 600px;
  margin: 0 auto;
  font-weight: 400;
}

/* ── Animated Scroll Hint ── */
.scroll-hint {
  margin-top: 20px;
  width: 28px;
  height: 48px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 100px;
  display: flex;
  justify-content: center;
  padding-top: 10px;
}

.scroll-dot {
  width: 6px;
  height: 6px;
  background: var(--theme-orange);
  border-radius: 50%;
  animation: scroll-anim 2.2s cubic-bezier(.15,.41,.69,.94) infinite;
}

@keyframes scroll-anim {
  0%   { transform: translateY(0); opacity: 0; }
  30%  { opacity: 1; }
  100% { transform: translateY(20px); opacity: 0; }
}

/* ── Responsive Behavior ── */
@media (max-width: 768px) {
  .about-header { min-height: 380px; padding: 70px 20px; }
  .break { display: none; }
}
</style>
