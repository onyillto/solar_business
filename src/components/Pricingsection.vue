<template>
  <section class="pricing">
    <!-- Section header -->
    <div class="pricing__header">
      <p class="pricing__eyebrow">Our Service Plans</p>
      <!-- <h2 class="pricing__title">
        Affordable &amp; Transparent Pricing for<br />Every Energy Need
      </h2> -->
    </div>

    <!-- Cards grid -->
    <div class="pricing__grid">
      <!-- Card 1: BOREHOLE -->
      <div class="card card--basic">
        <div class="card__top">
          <div class="card__badge">Basic Engineering</div>
          <div class="card__icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              width="22"
              height="22"
            >
              <path
                d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
              />
            </svg>
          </div>
        </div>
        <!-- <div class="card__price">
          <span class="price__currency">$</span>
          <span class="price__amount">299</span>
          <span class="price__per">Per Panel</span>
        </div> -->
        <p class="card__desc">
          Comprehensive engineering solutions including cabin homes, gazebos,
          water systems, pools, and general construction services.
        </p>
        <button class="card__btn">
          Get Started
          <span class="btn__arrow">↗</span>
        </button>
        <ul class="card__features">
          <li v-for="f in boreholeFeatures" :key="f">
            <span class="feature__check">✓</span>
            {{ f }}
          </li>
        </ul>
      </div>

      <!-- Card 2: SMART SETUP (featured) -->
      <div class="card card--featured">
        <div class="card__top">
          <div class="card__badge card__badge--featured">Smart Home</div>
          <div class="card__icon card__icon--featured">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              width="22"
              height="22"
            >
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>
        </div>
        <!-- <div class="card__price">
          <span class="price__currency">$</span>
          <span class="price__amount">599</span>
          <span class="price__per">Per Panel</span>
        </div> -->
        <p class="card__desc">
          Advanced smart home integration covering security, gadgets, CCTV, and
          network installations for modern living.
        </p>
        <button class="card__btn card__btn--featured">
          Get Started
          <span class="btn__arrow">↗</span>
        </button>
        <ul class="card__features">
          <li v-for="f in smartFeatures" :key="f">
            <span class="feature__check feature__check--featured">✓</span>
            {{ f }}
          </li>
        </ul>
      </div>

      <!-- Card 3: SOLAR -->
      <div class="card card--premium">
        <div class="card__top">
          <div class="card__badge">Solar Panels</div>
          <div class="card__icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              width="22"
              height="22"
            >
              <rect x="2" y="7" width="20" height="14" rx="2" />
              <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
              <line x1="12" y1="12" x2="12" y2="16" />
              <line x1="10" y1="14" x2="14" y2="14" />
            </svg>
          </div>
        </div>
        <!-- <div class="card__price">
          <span class="price__currency">$</span>
          <span class="price__amount">999</span>
          <span class="price__per">Per Panel</span>
        </div> -->
        <p class="card__desc">
          Complete solar energy solutions including inverters, street lights,
          pumps, water heaters, and industrial installations.
        </p>
        <button class="card__btn">
          Get Started
          <span class="btn__arrow">↗</span>
        </button>
        <ul class="card__features">
          <li v-for="f in solarFeatures" :key="f">
            <span class="feature__check">✓</span>
            {{ f }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
const boreholeFeatures = [
  "Cabin and capsule home",
  "Gazebo",
  "Stanchion and water tank construction",
  "Carport",
  "Borehole survey",
  "Borehole drilling",
  "Swimming pools",
  "Water fountains",
];

const smartFeatures = [
  "Smart home",
  "Smart security",
  "Smart gadgets",
  "Smart installations and monitoring service",
  "Smart CCTV cameras",
  "Networks installations",
];

const solarFeatures = [
  "Inverter",
  "Solar StreetLight",
  "Solar Powered Pumps",
  "Solar Charging Station",
  "Solar water heater",
  "Solar Powered Device",
  "Smart Metering",
  "Battery Bank",
  "Industrial and domestic installations",
];
</script>

<style scoped>
/* ── Section ──────────────────────────────── */
.pricing {
  width: 100%;
  background: #f8f9fa;
  padding: 90px 2rem;
  font-family: "Helvetica Neue", "Segoe UI", sans-serif;
}

/* ── Header ───────────────────────────────── */
.pricing__header {
  text-align: center;
  margin-bottom: 3.5rem;
}

.pricing__eyebrow {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #f9a825;
  margin-bottom: 0.8rem;
}

.pricing__title {
  font-family: "Georgia", "Times New Roman", serif;
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  font-weight: 700;
  color: #111827;
  line-height: 1.2;
}

/* ── Grid ─────────────────────────────────── */
.pricing__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 1100px;
  margin: 0 auto;
  align-items: start;
}

/* ── Card base ────────────────────────────── */
.card {
  background: #111827;
  border-radius: 20px;
  padding: 2rem 1.8rem;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  position: relative;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 24px 50px rgba(0, 0, 0, 0.2);
}

/* Featured card */
.card--featured {
  background: #1a2e1a;
  border: 2px solid #22c55e;
  transform: scale(1.04);
  box-shadow: 0 20px 50px rgba(34, 197, 94, 0.2);
}

.card--featured:hover {
  transform: scale(1.04) translateY(-6px);
}

/* ── Card top row ─────────────────────────── */
.card__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card__badge {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #9ca3af;
  background: rgba(255, 255, 255, 0.07);
  padding: 4px 12px;
  border-radius: 999px;
}

.card__badge--featured {
  background: rgba(34, 197, 94, 0.15);
  color: #22c55e;
}

.card__icon {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: rgba(249, 168, 37, 0.12);
  border: 1px solid rgba(249, 168, 37, 0.25);
  color: #f9a825;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card__icon--featured {
  background: rgba(34, 197, 94, 0.12);
  border-color: rgba(34, 197, 94, 0.3);
  color: #22c55e;
}

/* ── Price ────────────────────────────────── */
.card__price {
  display: flex;
  align-items: baseline;
  gap: 4px;
  flex-wrap: wrap;
}

.price__currency {
  font-size: 1.4rem;
  font-weight: 700;
  color: #ffffff;
  line-height: 1;
}

.price__amount {
  font-family: "Georgia", serif;
  font-size: 3rem;
  font-weight: 700;
  color: #ffffff;
  line-height: 1;
  letter-spacing: -0.02em;
}

.price__per {
  font-size: 0.78rem;
  color: #6b7280;
  margin-left: 4px;
  align-self: flex-end;
  padding-bottom: 6px;
}

/* ── Description ──────────────────────────── */
.card__desc {
  font-size: 0.82rem;
  color: #9ca3af;
  line-height: 1.65;
}

/* ── Button ───────────────────────────────── */
.card__btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: #1f2937;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 13px 16px;
  font-family: "Helvetica Neue", "Segoe UI", sans-serif;
  font-size: 0.88rem;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s;
}

.card__btn:hover {
  background: #374151;
  border-color: #f9a825;
}

.card__btn--featured {
  background: #22c55e;
  border-color: #22c55e;
  color: #fff;
}

.card__btn--featured:hover {
  background: #16a34a;
  border-color: #16a34a;
}

.btn__arrow {
  width: 30px;
  height: 30px;
  border-radius: 8px;
  background: rgba(249, 168, 37, 0.15);
  color: #f9a825;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  flex-shrink: 0;
}

.card__btn--featured .btn__arrow {
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
}

/* ── Features list ────────────────────────── */
.card__features {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 0.4rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.card__features li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.82rem;
  color: #d1d5db;
  line-height: 1.4;
}

.feature__check {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgba(249, 168, 37, 0.12);
  color: #f9a825;
  font-size: 0.65rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.feature__check--featured {
  background: rgba(34, 197, 94, 0.15);
  color: #22c55e;
}

/* ── Responsive ───────────────────────────── */
@media (max-width: 900px) {
  .pricing__grid {
    grid-template-columns: 1fr;
    max-width: 460px;
  }

  .card--featured {
    transform: scale(1);
  }

  .card--featured:hover {
    transform: translateY(-6px);
  }
}

@media (max-width: 480px) {
  .pricing {
    padding: 60px 1.2rem;
  }
}
</style>
