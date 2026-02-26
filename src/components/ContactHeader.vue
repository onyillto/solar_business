<template>
  <header class="contact-header">
    <div class="blob-container">
      <div class="blob blob-1"></div>
      <div class="blob blob-2"></div>
    </div>
    <div class="grid-texture"></div>

    <div class="header-content">
      <div class="badge">
        <span class="badge-dot"></span>
        Get In Touch
      </div>
      
      <h1 class="header-title">
        Let's Build <br class="break" />
        <span class="title-highlight">Something Great</span>
      </h1>
      
      <p class="header-subtitle">
        Have a project in mind? We're here to help you bring your vision to life 
        with sustainable energy and quality engineering.
      </p>

      <div class="scroll-hint">
        <div class="scroll-dot"></div>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* ── Base Configuration ── */
.contact-header {
  --theme-orange: #eb662b; /* Your regular orange */
  --theme-orange-soft: rgba(235, 102, 43, 0.15);
  
  position: relative;
  margin-top: 64px;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #0f1115; /* Deep slate background */
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  padding: 80px 24px;
  font-family: 'Inter', system-ui, sans-serif;
}

/* ── Decorative Glow ── */
.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.2;
  pointer-events: none;
}

.blob-1 {
  width: 500px;
  height: 500px;
  background: var(--theme-orange);
  top: -150px;
  left: -100px;
  animation: drift 12s ease-in-out infinite alternate;
}

.blob-2 {
  width: 400px;
  height: 400px;
  background: var(--theme-orange);
  bottom: -100px;
  right: -50px;
  animation: drift 15s ease-in-out infinite alternate-reverse;
}

@keyframes drift {
  from { transform: translate(0, 0) scale(1); }
  to   { transform: translate(40px, 30px) scale(1.1); }
}

.grid-texture {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 50px 50px;
  pointer-events: none;
}

/* ── Content ── */
.header-content {
  position: relative;
  z-index: 2;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

/* ── Badge ── */
.badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #ffffff;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 8px 20px;
  border-radius: 100px;
  backdrop-filter: blur(10px);
}

.badge-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--theme-orange);
  box-shadow: 0 0 12px var(--theme-orange);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.3); opacity: 0.7; }
}

/* ── Title & Subtitle ── */
.header-title {
  font-size: clamp(2.5rem, 7vw, 4.5rem);
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: -0.04em;
  color: #ffffff;
  margin: 0;
}

.title-highlight {
  color: var(--theme-orange);
  position: relative;
}

.header-subtitle {
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.7;
  max-width: 550px;
  margin: 0 auto;
}

/* ── Scroll indicator ── */
.scroll-hint {
  margin-top: 15px;
  width: 26px;
  height: 44px;
  border: 2px solid rgba(255, 255, 255, 0.15);
  border-radius: 100px;
  display: flex;
  justify-content: center;
  padding-top: 8px;
}

.scroll-dot {
  width: 6px;
  height: 6px;
  background: var(--theme-orange);
  border-radius: 50%;
  animation: scroll 2.2s cubic-bezier(.15,.41,.69,.94) infinite;
}

@keyframes scroll {
  0%   { transform: translateY(0); opacity: 0; }
  30%  { opacity: 1; }
  100% { transform: translateY(18px); opacity: 0; }
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .contact-header { min-height: 350px; padding: 60px 20px; }
  .break { display: none; }
}
</style>