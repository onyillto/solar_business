<template>
  <section class="projects-section">
    <div class="projects-header">
      <h1 class="projects-title">My Projects</h1>
      <p class="projects-subtitle">
        Explore my portfolio of web and mobile applications. Each project showcases unique
        solutions and innovative approaches to modern development challenges.
      </p>
    </div>

    <div class="projects-grid">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="project-card"
        @click="openModal(project)"
      >
        <div class="card-image-wrap">
          <img :src="project.images[0]" :alt="project.title" class="card-image" />
        </div>
        <div class="card-body">
          <h3 class="card-title">{{ project.title }}</h3>
          <p class="card-desc">{{ project.description }}</p>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <transition name="fade">
      <div v-if="activeProject" class="modal-overlay" @click.self="closeModal">
        <div class="modal">
          <button class="modal-close" @click="closeModal">&#x2715;</button>

          <div class="modal-header">
            <h2 class="modal-title">{{ activeProject.title }}</h2>
            <p class="modal-desc">{{ activeProject.description }}</p>
          </div>

          <div class="modal-gallery">
            <button class="gallery-btn prev" @click="prevImage" :disabled="currentImage === 0">&#8249;</button>
            <div class="gallery-main">
              <img
                :src="activeProject.images[currentImage]"
                :alt="activeProject.title"
                class="gallery-main-img"
              />
              <span class="gallery-counter">{{ currentImage + 1 }} / {{ activeProject.images.length }}</span>
            </div>
            <button class="gallery-btn next" @click="nextImage" :disabled="currentImage === activeProject.images.length - 1">&#8250;</button>
          </div>

          <div class="gallery-thumbs">
            <img
              v-for="(img, i) in activeProject.images"
              :key="i"
              :src="img"
              :alt="`Thumbnail ${i + 1}`"
              class="gallery-thumb"
              :class="{ active: i === currentImage }"
              @click="currentImage = i"
            />
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'ProjectsGallery',
  data() {
    return {
      activeProject: null,
      currentImage: 0,
      projects: [
        {
          title: 'Smart Homes',
          description:
            'A modern, responsive portfolio website built with React and Tailwind CSS. Features smooth animations, dark mode support, and an intuitive user interface.',
          images: [
            '/residential.jpeg',
            '/residential.jpeg',
            '/residential.jpeg',
          ],
        },
        {
          title: 'Smart Home Automation',
          description:
            'A comprehensive fitness tracking application with workout plans, nutrition tracking, and progress analytics. Built with React Native for iOS and Android.',
          images: [
            '/s1.jpeg',
            '/s2.jpeg',
            '/s3.jpeg',
            '/s4.jpeg',
          ],
        },
        {
          title: 'Residential Borehole',
          description:
            'A full-stack e-commerce solution with secure payment integration, inventory management, and real-time order tracking. Designed for seamless shopping experiences.',
          images: [
            '/water4.jpeg',
            '/water1.jpeg',
            '/water2.jpeg',
          ],
        },
        {
          title: 'Commercial Solar Rooftop',
          description:
            'An interactive data visualization dashboard with real-time metrics, customizable widgets, and exportable reports for business intelligence.',
          images: [
            '/commercial.jpeg',
            '/commercial.jpeg',
            '/commercial.jpeg',
          ],
        },
        {
          title: 'Basic engineering services',
          description:
            'An innovative AI-powered tool that generates high-quality content for blogs, social media, and marketing campaigns using advanced language models.',
          images: [
            '/street-light.jpeg',
            '/street-light.jpeg',
            '/street-light.jpeg',
          ],
        },
        {
          title: 'Solar panels',
          description:
            'A centralized platform for managing multiple social media accounts, scheduling posts, and tracking engagement analytics across all channels.',
          images: [
            '/install_solar.jpeg',
            '/install_solar.jpeg',
            '/install_solar.jpeg',
          ],
        },
      ],
    }
  },
  methods: {
    openModal(project) {
      this.activeProject = project
      this.currentImage = 0
      document.body.style.overflow = 'hidden'
    },
    closeModal() {
      this.activeProject = null
      document.body.style.overflow = ''
    },
    prevImage() {
      if (this.currentImage > 0) this.currentImage--
    },
    nextImage() {
      if (this.currentImage < this.activeProject.images.length - 1) this.currentImage++
    },
  },
  mounted() {
    window.addEventListener('keydown', (e) => {
      if (!this.activeProject) return
      if (e.key === 'Escape') this.closeModal()
      if (e.key === 'ArrowLeft') this.prevImage()
      if (e.key === 'ArrowRight') this.nextImage()
    })
  },
}
</script>

<style scoped>
/* ---- Section ---- */
.projects-section {
  background-color: #f5f5f5;
  min-height: 100vh;
  padding: 64px 24px;
  font-family: 'Segoe UI', sans-serif;
  color: #111;
}

/* ---- Header ---- */
.projects-header {
  text-align: center;
  max-width: 680px;
  margin: 0 auto 48px;
}

.projects-title {
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 12px;
}

.projects-subtitle {
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
}

/* ---- Grid ---- */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  max-width: 1200px;
  margin: 0 auto;
}

@media (max-width: 900px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 560px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}

/* ---- Card ---- */
.project-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
  transition: box-shadow 0.2s, transform 0.2s;
}

.project-card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.13);
  transform: translateY(-3px);
}

.card-image-wrap {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s;
}

.project-card:hover .card-image {
  transform: scale(1.04);
}

.card-body {
  padding: 18px 20px 22px;
}

.card-title {
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 8px;
  color: #F9A825;
}

.card-desc {
  font-size: 0.88rem;
  color: #555;
  line-height: 1.55;
}

/* ---- Modal Overlay ---- */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

/* ---- Modal Box ---- */
.modal {
  background: #fff;
  border-radius: 16px;
  width: 100%;
  max-width: 580px;
  padding: 28px 28px 24px;
  position: relative;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.22);
}

.modal-close {
  position: absolute;
  top: 16px;
  right: 18px;
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: #444;
  line-height: 1;
  padding: 4px 6px;
  border-radius: 6px;
  transition: background 0.15s;
}

.modal-close:hover {
  background: #f0f0f0;
}

/* ---- Modal Header ---- */
.modal-header {
  margin-bottom: 18px;
}

.modal-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 6px;
}

.modal-desc {
  font-size: 0.9rem;
  color: #555;
  line-height: 1.55;
}

/* ---- Gallery Main ---- */
.modal-gallery {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
}

.gallery-main {
  flex: 1;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  background: #eee;
}

.gallery-main-img {
  width: 100%;
  height: 280px;
  object-fit: cover;
  display: block;
}

.gallery-counter {
  position: absolute;
  bottom: 10px;
  right: 12px;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: 0.78rem;
  padding: 3px 8px;
  border-radius: 20px;
}

/* ---- Gallery Buttons ---- */
.gallery-btn {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  font-size: 1.3rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: #333;
  transition: background 0.15s, border-color 0.15s;
  line-height: 1;
}

.gallery-btn:hover:not(:disabled) {
  background: #f0f0f0;
  border-color: #bbb;
}

.gallery-btn:disabled {
  opacity: 0.35;
  cursor: default;
}

/* ---- Thumbnails ---- */
.gallery-thumbs {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.gallery-thumb {
  width: 70px;
  height: 52px;
  object-fit: cover;
  border-radius: 6px;
  cursor: pointer;
  border: 2px solid transparent;
  opacity: 0.7;
  transition: opacity 0.15s, border-color 0.15s;
}

.gallery-thumb:hover {
  opacity: 0.9;
}

.gallery-thumb.active {
  border-color: #333;
  opacity: 1;
}

/* ---- Transitions ---- */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>