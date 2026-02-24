<template>
  <footer class="footer">

    <!-- Top gradient bar -->
    <div class="footer__accent" />

    <div class="footer__main">
      <div class="footer__inner">

        <!-- Brand -->
        <div class="footer__brand">
          <img src="../../public/logo.jpeg" alt="MOSKI HUB" class="footer__logo" />
          <span class="footer__tagline">Clean Energy. Smart Living.</span>
        </div>

        <!-- Nav links -->
        <nav class="footer__nav">
          <a v-for="link in links" :key="link" href="#" class="footer__link">{{ link }}</a>
        </nav>

        <!-- Right: CTA + Contact -->
        <div class="footer__actions">
          <a href="#" class="footer__cta">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="14" height="14">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
            Get a Free Quote
          </a>
          <button class="footer__contact-btn">Contact</button>
        </div>

      </div>
    </div>

    <!-- Bottom bar -->
    <div class="footer__bottom">
      <div class="footer__bottom-inner">
        <span class="footer__copy">© {{ year }} MOSKI HUB Ltd. All rights reserved.</span>
        <div class="footer__socials">
          <!-- Facebook -->
          <a href="#" class="social__icon" aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
            </svg>
          </a>
          <!-- Instagram -->
          <a href="#" class="social__icon" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
            </svg>
          </a>
          <!-- Twitter/X -->
          <a href="#" class="social__icon" aria-label="Twitter">
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <!-- LinkedIn -->
          <a href="#" class="social__icon" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
        </div>
        <div class="footer__legal">
          <a href="#" class="footer__legal-link">Privacy Policy</a>
          <span>·</span>
          <a href="#" class="footer__legal-link">Terms of Service</a>
        </div>
      </div>
    </div>

  </footer>
</template>

<script setup>
const year = new Date().getFullYear()

const links = [
  'Our Services',
  'Our Project',
  'Our Team',
  'Market Space',
  'Contact Us',
]
</script>

<style scoped>
/* ── Footer wrapper ───────────────────────── */
.footer {
  width: 100%;
  font-family: 'Helvetica Neue', 'Segoe UI', sans-serif;
}

/* ── Top gradient accent ──────────────────── */
.footer__accent {
  height: 4px;
  background: linear-gradient(90deg, #1565C0, #26C6DA, #E64A19, #F9A825);
}

/* ── Main white bar ───────────────────────── */
.footer__main {
  background: #ffffff;
  border-bottom: 1px solid #f0f0f0;
  padding: 0 2rem;
}

.footer__inner {
  max-width: 1200px;
  margin: 0 auto;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

/* ── Brand ────────────────────────────────── */
.footer__brand {
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex-shrink: 0;
}

.footer__logo {
  height: 44px;
  width: auto;
}

.footer__tagline {
  font-size: 0.68rem;
  color: #E64A19;
  font-weight: 600;
  letter-spacing: 0.06em;
}

/* ── Nav ──────────────────────────────────── */
.footer__nav {
  display: flex;
  align-items: center;
  gap: 0;
  border: 1.5px solid #e5e7eb;
  border-radius: 999px;
  padding: 6px 8px;
  gap: 2px;
}

.footer__link {
  padding: 6px 16px;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 500;
  color: #374151;
  text-decoration: none;
  white-space: nowrap;
  transition: background 0.2s, color 0.2s;
}

.footer__link:hover {
  background: #f3f4f6;
  color: #111827;
}

/* ── Actions ──────────────────────────────── */
.footer__actions {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}

.footer__cta {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 0.8rem;
  font-weight: 500;
  color: #374151;
  text-decoration: none;
  padding: 8px 16px;
  border: 1.5px solid #e5e7eb;
  border-radius: 999px;
  transition: border-color 0.2s, color 0.2s;
  white-space: nowrap;
}

.footer__cta:hover {
  border-color: #1565C0;
  color: #1565C0;
}

.footer__contact-btn {
  background: #E64A19;
  border: none;
  border-radius: 999px;
  padding: 9px 22px;
  font-family: 'Helvetica Neue', 'Segoe UI', sans-serif;
  font-size: 0.82rem;
  font-weight: 700;
  color: #ffffff;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
  white-space: nowrap;
}

.footer__contact-btn:hover {
  background: #bf360c;
  transform: translateY(-1px);
}

/* ── Bottom bar ───────────────────────────── */
.footer__bottom {
  background: #111827;
  padding: 0 2rem;
}

.footer__bottom-inner {
  max-width: 1200px;
  margin: 0 auto;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

.footer__copy {
  font-size: 0.75rem;
  color: #6b7280;
}

/* Social icons */
.footer__socials {
  display: flex;
  align-items: center;
  gap: 6px;
}

.social__icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.1);
  color: #9ca3af;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: background 0.2s, color 0.2s, border-color 0.2s;
}

.social__icon:hover {
  background: #E64A19;
  border-color: #E64A19;
  color: #fff;
}

/* Legal links */
.footer__legal {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.72rem;
  color: #4b5563;
}

.footer__legal-link {
  color: #6b7280;
  text-decoration: none;
  transition: color 0.2s;
}

.footer__legal-link:hover { color: #F9A825; }

/* ── Responsive ───────────────────────────── */
@media (max-width: 900px) {
  .footer__nav { display: none; }
  .footer__inner { justify-content: space-between; }
}

@media (max-width: 560px) {
  .footer__inner { height: auto; padding: 1.2rem 0; flex-wrap: wrap; }
  .footer__bottom-inner { height: auto; padding: 1rem 0; flex-direction: column; gap: 0.8rem; text-align: center; }
  .footer { padding: 0; }
}
</style>