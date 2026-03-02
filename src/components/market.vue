<template>
  <section class="marketplace">
    <!-- Section Header -->
    <div class="marketplace__header">
      <p class="marketplace__eyebrow">Our Plans</p>
      <h2 class="marketplace__title">
        Solar Packages<br /><em>for Every Need</em>
      </h2>
      <p class="marketplace__sub">
        Flexible monthly lease plans — no upfront cost, just clean energy
        delivered.
      </p>
    </div>

    <!-- Cards Grid -->
    <div class="marketplace__grid">
      <div
        v-for="(plan, i) in plans"
        :key="plan.id"
        :class="['pcard', i === 0 ? 'pcard--lifted' : '']"
        @click="openModal(plan)"
      >
        <div class="pcard__body">
          <span v-if="plan.badge" class="pcard__badge">{{ plan.badge }}</span>

          <div class="pcard__icon">
            <svg
              v-if="plan.panels"
              viewBox="0 0 40 40"
              fill="none"
              width="40"
              height="40"
            >
              <rect
                x="4"
                y="8"
                width="14"
                height="10"
                rx="1.5"
                fill="rgba(255,255,255,0.3)"
                stroke="white"
                stroke-width="1.5"
              />
              <rect
                x="22"
                y="8"
                width="14"
                height="10"
                rx="1.5"
                fill="rgba(255,255,255,0.3)"
                stroke="white"
                stroke-width="1.5"
              />
              <rect
                x="4"
                y="22"
                width="14"
                height="10"
                rx="1.5"
                fill="rgba(255,255,255,0.3)"
                stroke="white"
                stroke-width="1.5"
              />
              <rect
                x="22"
                y="22"
                width="14"
                height="10"
                rx="1.5"
                fill="rgba(255,255,255,0.3)"
                stroke="white"
                stroke-width="1.5"
              />
              <line
                x1="20"
                y1="32"
                x2="20"
                y2="38"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <line
                x1="14"
                y1="38"
                x2="26"
                y2="38"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
            <svg v-else viewBox="0 0 40 40" fill="none" width="40" height="40">
              <rect
                x="6"
                y="10"
                width="28"
                height="18"
                rx="3"
                fill="rgba(255,255,255,0.3)"
                stroke="white"
                stroke-width="1.5"
              />
              <rect
                x="10"
                y="14"
                width="6"
                height="10"
                rx="1"
                fill="white"
                fill-opacity="0.6"
              />
              <rect
                x="18"
                y="14"
                width="6"
                height="10"
                rx="1"
                fill="white"
                fill-opacity="0.6"
              />
              <line
                x1="28"
                y1="16"
                x2="32"
                y2="16"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <line
                x1="28"
                y1="22"
                x2="32"
                y2="22"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <line
                x1="13"
                y1="8"
                x2="13"
                y2="10"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
              />
              <line
                x1="27"
                y1="8"
                x2="27"
                y2="10"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div>

          <div class="pcard__title-block">
            <span class="pcard__wattage">{{ plan.wattage }}</span>
            <h3 class="pcard__name">{{ plan.name }}</h3>
            <span v-if="plan.panels" class="pcard__panels-tag"
              >+ Panels Included</span
            >
          </div>

          <ul class="pcard__features">
            <li v-for="feat in plan.features" :key="feat">
              <svg viewBox="0 0 12 12" width="12" height="12" fill="none">
                <circle
                  cx="6"
                  cy="6"
                  r="5"
                  stroke="rgba(255,255,255,0.5)"
                  stroke-width="1"
                />
                <path
                  d="M3.5 6l1.8 1.8 3.2-3.6"
                  stroke="white"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {{ feat }}
            </li>
          </ul>

          <!-- <div class="pcard__price-block">
            <span class="pcard__price">&#8358;{{ plan.price.toLocaleString() }}</span>
            <span class="pcard__per">/Month</span>
            <span class="pcard__exclaim">!</span>
          </div> -->
        </div>

        <div class="pcard__footer">
          <button class="pcard__btn" @click.stop="openModal(plan)">
            <span>Purchase Now</span>
            <div class="pcard__btn-icon">
              <svg viewBox="0 0 16 16" width="14" height="14" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </button>
          <p class="pcard__note">Tap card to see full details</p>
        </div>
      </div>
    </div>

    <!-- Bottom CTA -->
   

    <!-- MODAL -->
    <Teleport to="body">
      <Transition name="modal-fade">
        <div v-if="activePlan" class="modal-overlay" @click.self="closeModal">
          <Transition name="modal-slide">
            <div v-if="activePlan" class="modal">
              <button class="modal__close" @click="closeModal">
                <svg viewBox="0 0 20 20" width="18" height="18" fill="none">
                  <path
                    d="M4 4l12 12M16 4L4 16"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </button>

              <!-- Hero image -->
              <div class="modal__hero">
                <img
                  :src="activePlan.image"
                  :alt="activePlan.name"
                  class="modal__img"
                />
                <div class="modal__hero-overlay">
                  <span v-if="activePlan.badge" class="modal__badge">{{
                    activePlan.badge
                  }}</span>
                </div>
              </div>

              <!-- Content -->
              <div class="modal__content">
                <div class="modal__title-row">
                  <div>
                    <span class="modal__wattage">{{ activePlan.wattage }}</span>
                    <h2 class="modal__title">{{ activePlan.name }}</h2>
                  </div>
                  <div class="modal__rating">
                    <span class="modal__stars"
                      >&#9733;&#9733;&#9733;&#9733;&#9733;</span
                    >
                    <span class="modal__reviews">4.9 (128 reviews)</span>
                  </div>
                </div>

                <p class="modal__desc">{{ activePlan.description }}</p>

                <!-- Specs -->
                <div class="modal__specs">
                  <div
                    v-for="spec in activePlan.specs"
                    :key="spec.label"
                    class="modal__spec"
                  >
                    <span class="modal__spec-label">{{ spec.label }}</span>
                    <span class="modal__spec-value">{{ spec.value }}</span>
                  </div>
                </div>

                <!-- Full features -->
                <div class="modal__features-section">
                  <h4 class="modal__features-title">What's Included</h4>
                  <div class="modal__features-grid">
                    <div
                      v-for="feat in activePlan.fullFeatures"
                      :key="feat.label"
                      class="modal__feat"
                    >
                      <div class="modal__feat-icon">
                        <svg
                          viewBox="0 0 16 16"
                          width="16"
                          height="16"
                          fill="none"
                        >
                          <path
                            d="M3 8l3.5 3.5L13 4"
                            stroke="#F9A825"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <span class="modal__feat-label">{{ feat.label }}</span>
                        <span class="modal__feat-detail">{{
                          feat.detail
                        }}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- CTA -->
                <div class="modal__cta">
                  <button
                    class="modal__purchase-btn"
                    @click="openWhatsapp(activePlan)"
                  >
                    Get This Plan
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none">
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup>
import { ref } from "vue";

const activePlan = ref(null);

function openModal(plan) {
  activePlan.value = plan;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  activePlan.value = null;
  document.body.style.overflow = "";
}

function openWhatsapp(plan) {
  const phone = "07011136719"; // Replace with your actual WhatsApp number
  let text = `Hello, I am interested in the ${plan.name} (${plan.wattage}) plan`;
  if (plan.price > 0) {
    text += ` priced at ₦${plan.price.toLocaleString()}.`;
  } else {
    text += `.`;
  }
  window.open(
    `https://wa.me/${phone}?text=${encodeURIComponent(text)}`,
    "_blank"
  );
}

const plans = [
  {
    id: 1,
    wattage: "Smart",
    name: "Smart Home",
    panels: false,
    badge: "Automation",
    price: 0,
    image: "/smarthome.jpeg",
    description:
      "Experience the future of living with our comprehensive smart home solutions. From security to convenience, we integrate technology seamlessly into your daily life.",
    features: [
      "Smart home",
      "Smart security",
      "Smart gadgets",
      "Smart installations and monitoring service",
      "Smart CCTV cameras",
      "Networks installations",
    ],
    fullFeatures: [
      { label: "Smart home", detail: "Complete home automation integration" },
      {
        label: "Smart security",
        detail: "Advanced security systems for peace of mind",
      },
      { label: "Smart gadgets", detail: "Integration of latest smart devices" },
      {
        label: "Smart installations",
        detail: "Professional setup and monitoring service",
      },
      {
        label: "Smart CCTV cameras",
        detail: "High-definition surveillance systems",
      },
      {
        label: "Networks installations",
        detail: "Robust home networking solutions",
      },
    ],
  },
  {
    id: 2,
    wattage: "Civil",
    name: "Basic Engineering Services",
    panels: false,
    badge: "Engineering",
    price: 0,
    image: "/borehole.jpg",
    description:
      "Our basic engineering services cover a wide range of construction and installation needs, ensuring quality and durability for your property.",
    features: [
      "Cabin and capsule home",
      "Gazebo",
      "Stanchion and water tank construction",
      "Carport",
      "Borehole survey",
      "Borehole drilling",
      "Swimming pools",
      "Water fountains",
    ],
    fullFeatures: [
      {
        label: "Cabin and capsule home",
        detail: "Modern compact living solutions",
      },
      { label: "Gazebo", detail: "Outdoor relaxation structures" },
      {
        label: "Stanchion & water tank",
        detail: "Reliable water storage construction",
      },
      { label: "Carport", detail: "Protective vehicle shelters" },
      { label: "Borehole survey", detail: "Professional site assessment" },
      { label: "Borehole drilling", detail: "Deep water access drilling" },
      {
        label: "Swimming pools",
        detail: "Custom pool design and construction",
      },
      { label: "Water fountains", detail: "Decorative water features" },
    ],
  },
  {
    id: 3,
    wattage: "Solar",
    name: "Solar Panels",
    panels: true,
    badge: "Renewable",
    price: 0,
    image: "/commercial.jpeg",
    description:
      "Harness the power of the sun with our extensive range of solar products and installation services for both industrial and domestic needs.",
    features: [
      "Inverter",
      "Solar StreetLight",
      "Solar Powered Pumps",
      "Solar Charging Station",
      "Solar water heater",
      "Solar Powered Device",
      "Smart Metering",
      "Battery Bank",
      "Industrial and domestic installations",
    ],
    fullFeatures: [
      { label: "Inverter", detail: "Efficient power conversion systems" },
      { label: "Solar StreetLight", detail: "Sustainable outdoor lighting" },
      {
        label: "Solar Powered Pumps",
        detail: "Reliable water pumping solutions",
      },
      {
        label: "Solar Charging Station",
        detail: "Charging for EVs and devices",
      },
      { label: "Solar water heater", detail: "Eco-friendly water heating" },
      {
        label: "Solar Powered Device",
        detail: "Various solar-enabled gadgets",
      },
      { label: "Smart Metering", detail: "Precise energy usage monitoring" },
      { label: "Battery Bank", detail: "High-capacity energy storage" },
      { label: "Installations", detail: "Industrial and domestic setups" },
    ],
  },
];
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&family=DM+Sans:wght@400;500;600&display=swap");

/* ── Section ─────────────────────────────────── */
.marketplace {
  width: 100%;
  background: #f7f5f2;
  padding: 80px 2rem 90px;
  font-family: "DM Sans", sans-serif;
  position: relative;
}

.marketplace::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: radial-gradient(
    circle,
    rgba(249, 168, 37, 0.08) 1px,
    transparent 1px
  );
  background-size: 28px 28px;
  pointer-events: none;
}

/* ── Header ──────────────────────────────────── */
.marketplace__header {
  text-align: center;
  margin-bottom: 56px;
  position: relative;
}

.marketplace__eyebrow {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: #f9a825;
  margin: 0 0 12px;
}

.marketplace__title {
  font-family: "Barlow Condensed", sans-serif;
  font-size: clamp(2.4rem, 5vw, 3.8rem);
  font-weight: 900;
  color: #1a1a1a;
  line-height: 1.05;
  margin: 0 0 14px;
  text-transform: uppercase;
}

.marketplace__title em {
  font-style: italic;
  color: #f9a825;
}

.marketplace__sub {
  font-size: 0.9rem;
  color: #666;
  max-width: 400px;
  margin: 0 auto;
  line-height: 1.7;
}

/* ── Grid ────────────────────────────────────── */
.marketplace__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  max-width: 1160px;
  margin: 0 auto;
  align-items: end;
  position: relative;
}

/* ── Card ────────────────────────────────────── */
.pcard {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  transition: transform 0.32s cubic-bezier(0.34, 1.56, 0.64, 1),
    box-shadow 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

.pcard:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 20px 48px rgba(249, 168, 37, 0.28);
}

.pcard--lifted {
  transform: translateY(-18px);
  box-shadow: 0 16px 48px rgba(249, 168, 37, 0.22);
}

.pcard--lifted:hover {
  transform: translateY(-28px) scale(1.02);
}

/* ── Card Body ───────────────────────────────── */
.pcard__body {
  background: linear-gradient(160deg, #ffbb33 0%, #f9a825 60%, #f08000 100%);
  padding: 28px 22px 24px;
  flex: 1;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.pcard__body::before {
  content: "";
  position: absolute;
  top: -30px;
  right: -30px;
  width: 120px;
  height: 120px;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.15) 0%,
    transparent 70%
  );
  pointer-events: none;
}

.pcard__badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.22);
  border: 1px solid rgba(255, 255, 255, 0.35);
  color: #fff;
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 3px 10px;
  border-radius: 999px;
  align-self: flex-start;
  margin-bottom: 14px;
}

.pcard__icon {
  margin-bottom: 14px;
  opacity: 0.9;
}

.pcard__title-block {
  margin-bottom: 18px;
}

.pcard__wattage {
  font-family: "Barlow Condensed", sans-serif;
  font-size: 2.6rem;
  font-weight: 900;
  color: #fff;
  line-height: 1;
  display: block;
}

.pcard__name {
  font-family: "Barlow Condensed", sans-serif;
  font-size: 1.05rem;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.95);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  line-height: 1.25;
  margin: 4px 0 0;
}

.pcard__panels-tag {
  display: inline-block;
  margin-top: 6px;
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 2px 8px;
  border-radius: 4px;
}

.pcard__features {
  list-style: none;
  padding: 0;
  margin: 0 0 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.pcard__features li {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.88);
}

.pcard__price-block {
  display: flex;
  align-items: baseline;
  gap: 3px;
  margin-top: auto;
  padding-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.pcard__price {
  font-family: "Barlow Condensed", sans-serif;
  font-size: 2rem;
  font-weight: 900;
  color: #fff;
  line-height: 1;
}

.pcard__per {
  font-size: 0.78rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.75);
}
.pcard__exclaim {
  font-family: "Barlow Condensed", sans-serif;
  font-size: 1.8rem;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.4);
  line-height: 1;
}

/* ── Footer ──────────────────────────────────── */
.pcard__footer {
  background: #fff;
  padding: 16px 22px 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.pcard__btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: #f9a825;
  border: none;
  border-radius: 10px;
  padding: 11px 14px 11px 18px;
  cursor: pointer;
  font-family: "DM Sans", sans-serif;
  font-size: 0.82rem;
  font-weight: 700;
  color: #fff;
  transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
  box-shadow: 0 4px 14px rgba(249, 168, 37, 0.35);
}

.pcard__btn:hover {
  background: #e08e00;
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(249, 168, 37, 0.45);
}

.pcard__btn-icon {
  width: 26px;
  height: 26px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.pcard__note {
  font-size: 0.65rem;
  color: #bbb;
  text-align: center;
  margin: 0;
}

/* ── CTA ──────────────────────────────────────── */
.marketplace__cta {
  text-align: center;
  margin-top: 52px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  position: relative;
}

.marketplace__cta p {
  font-size: 0.88rem;
  color: #666;
  margin: 0;
}

.marketplace__cta-btn {
  background: transparent;
  border: 2px solid #f9a825;
  color: #f9a825;
  font-family: "DM Sans", sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  padding: 10px 26px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
}

.marketplace__cta-btn:hover {
  background: #f9a825;
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(249, 168, 37, 0.3);
}

/* ══════════════ MODAL ══════════════ */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(10, 8, 4, 0.72);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.modal {
  background: #fff;
  border-radius: 24px;
  width: 100%;
  max-width: 680px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 32px 80px rgba(0, 0, 0, 0.35);
  scrollbar-width: thin;
  scrollbar-color: #f9a825 #f0f0f0;
}

.modal::-webkit-scrollbar {
  width: 4px;
}
.modal::-webkit-scrollbar-thumb {
  background: #f9a825;
  border-radius: 4px;
}

.modal__close {
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 10;
  width: 36px;
  height: 36px;
  background: rgba(255, 255, 255, 0.92);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
  transition: background 0.2s, transform 0.25s;
}

.modal__close:hover {
  background: #fff;
  transform: rotate(90deg) scale(1.1);
}

/* Hero */
.modal__hero {
  position: relative;
  height: 260px;
  overflow: hidden;
  border-radius: 24px 24px 0 0;
}

.modal__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.modal__hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.65) 0%,
    rgba(0, 0, 0, 0.1) 60%,
    transparent 100%
  );
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 20px 24px;
}

.modal__badge {
  background: #f9a825;
  color: #fff;
  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 5px 12px;
  border-radius: 999px;
  align-self: flex-start;
  margin-top: 16px;
}

.modal__hero-price {
  display: flex;
  align-items: baseline;
  gap: 4px;
}

.modal__hero-amount {
  font-family: "Barlow Condensed", sans-serif;
  font-size: 2.2rem;
  font-weight: 900;
  color: #fff;
  line-height: 1;
}

.modal__hero-per {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
}

/* Content */
.modal__content {
  padding: 24px 28px 28px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.modal__title-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
}

.modal__wattage {
  font-family: "Barlow Condensed", sans-serif;
  font-size: 0.85rem;
  font-weight: 800;
  color: #f9a825;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  display: block;
  margin-bottom: 2px;
}

.modal__title {
  font-family: "Barlow Condensed", sans-serif;
  font-size: 1.65rem;
  font-weight: 900;
  color: #111;
  text-transform: uppercase;
  line-height: 1.1;
  margin: 0;
}

.modal__rating {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
  flex-shrink: 0;
}
.modal__stars {
  font-size: 0.9rem;
  color: #f9a825;
  letter-spacing: -1px;
}
.modal__reviews {
  font-size: 0.68rem;
  color: #999;
}

.modal__desc {
  font-size: 0.88rem;
  color: #555;
  line-height: 1.75;
  margin: 0;
  border-left: 3px solid #f9a825;
  padding-left: 14px;
}

/* Specs */
.modal__specs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.modal__spec {
  background: #f9f7f4;
  border-radius: 10px;
  padding: 12px 14px;
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.modal__spec-label {
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #aaa;
}

.modal__spec-value {
  font-family: "Barlow Condensed", sans-serif;
  font-size: 1.1rem;
  font-weight: 800;
  color: #1a1a1a;
  line-height: 1;
}

/* Full features */
.modal__features-title {
  font-family: "Barlow Condensed", sans-serif;
  font-size: 1rem;
  font-weight: 800;
  color: #111;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin: 0 0 12px;
}

.modal__features-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.modal__feat {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.modal__feat-icon {
  width: 28px;
  height: 28px;
  background: rgba(249, 168, 37, 0.1);
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 1px;
}

.modal__feat-label {
  display: block;
  font-size: 0.8rem;
  font-weight: 700;
  color: #222;
  line-height: 1.3;
}
.modal__feat-detail {
  display: block;
  font-size: 0.72rem;
  color: #888;
  line-height: 1.4;
  margin-top: 1px;
}

/* CTA */
.modal__cta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 16px;
  border-top: 1px solid #f0eee9;
  gap: 16px;
}

.modal__price-big {
  font-family: "Barlow Condensed", sans-serif;
  font-size: 2rem;
  font-weight: 900;
  color: #1a1a1a;
  line-height: 1;
}

.modal__price-note {
  display: block;
  font-size: 0.7rem;
  color: #999;
  margin-top: 2px;
}

.modal__purchase-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(135deg, #ffbb33, #f9a825, #e08e00);
  border: none;
  border-radius: 12px;
  padding: 14px 28px;
  font-family: "DM Sans", sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 6px 20px rgba(249, 168, 37, 0.4);
  white-space: nowrap;
}

.modal__purchase-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(249, 168, 37, 0.5);
}

/* ── Transitions ── */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-slide-enter-active {
  transition: opacity 0.35s ease,
    transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.modal-slide-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.modal-slide-enter-from {
  opacity: 0;
  transform: translateY(40px) scale(0.96);
}
.modal-slide-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.97);
}

/* ── Responsive ──────────────────────────────── */
@media (max-width: 960px) {
  .marketplace__grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .pcard--lifted {
    transform: none;
  }
  .modal__specs {
    grid-template-columns: repeat(2, 1fr);
  }
  .modal__features-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .marketplace__grid {
    grid-template-columns: 1fr;
    max-width: 360px;
  }
  .marketplace {
    padding: 60px 1.2rem;
  }
  .modal__content {
    padding: 18px 18px 22px;
  }
  .modal__hero {
    height: 200px;
  }
  .modal__cta {
    flex-direction: column;
    align-items: stretch;
  }
  .modal__purchase-btn {
    justify-content: center;
  }
  .modal__title-row {
    flex-direction: column;
  }
}
</style>
