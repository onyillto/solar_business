<template>
  <div class="wa-floater">
    <!-- Chat Popup -->
    <transition name="pop">
      <div v-if="isOpen" class="wa-chat">
        <!-- Header -->
        <div class="wa-chat-header">
          <div class="wa-avatar">
            <svg viewBox="0 0 24 24" fill="white" width="22" height="22">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
              <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.985-1.406A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.95 7.95 0 01-4.073-1.118l-.292-.174-3.035.855.856-2.95-.19-.303A7.95 7.95 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8zm4.406-5.907c-.241-.12-1.428-.704-1.649-.784-.222-.08-.383-.12-.545.12-.16.24-.623.784-.764.944-.14.16-.282.18-.523.06-.241-.12-1.018-.375-1.939-1.197-.717-.64-1.2-1.43-1.341-1.671-.14-.241-.015-.372.106-.491.108-.108.241-.282.362-.423.12-.14.16-.24.24-.401.08-.16.04-.3-.02-.421-.06-.12-.545-1.313-.747-1.797-.196-.471-.397-.407-.545-.415l-.464-.008a.89.89 0 00-.644.302c-.222.241-.845.826-.845 2.015s.865 2.336.985 2.497c.12.16 1.703 2.6 4.126 3.645.576.249 1.025.397 1.375.508.578.183 1.104.157 1.52.095.463-.069 1.428-.584 1.63-1.148.2-.563.2-1.046.14-1.147-.06-.1-.221-.16-.462-.281z"/>
            </svg>
          </div>
          <div class="wa-chat-info">
            <span class="wa-chat-name">{{ businessName }}</span>
            <span class="wa-chat-status">
              <span class="status-dot"></span>
              Online
            </span>
          </div>
          <button class="wa-close" @click="isOpen = false">&#x2715;</button>
        </div>

        <!-- Body -->
        <div class="wa-chat-body">
          <div class="wa-bubble-wrap">
            <div class="wa-time">{{ currentTime }}</div>
            <div class="wa-bubble">
              <p>{{ greeting }}</p>
            </div>
          </div>
        </div>

        <!-- Input -->
        <div class="wa-chat-footer">
          <input
            v-model="userMessage"
            class="wa-input"
            type="text"
            placeholder="Type a message..."
            @keyup.enter="sendToWhatsApp"
          />
          <button class="wa-send" @click="sendToWhatsApp">
            <svg viewBox="0 0 24 24" fill="white" width="18" height="18">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
          </button>
        </div>
      </div>
    </transition>

    <!-- Tooltip -->
    <transition name="fade">
      <div v-if="!isOpen && showTooltip" class="wa-tooltip">Chat with us!</div>
    </transition>

    <!-- FAB Button -->
    <button
      class="wa-fab"
      :class="{ open: isOpen }"
      @click="toggleChat"
      aria-label="Chat on WhatsApp"
    >
      <!-- WhatsApp icon -->
      <transition name="spin" mode="out-in">
        <svg v-if="!isOpen" key="wa" viewBox="0 0 32 32" width="28" height="28" fill="white">
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.833.738 5.494 2.027 7.808L0 32l8.396-2.002A15.934 15.934 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 01-6.786-1.862l-.487-.289-5.003 1.311 1.343-4.888-.317-.503A13.268 13.268 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.326-9.905c-.4-.2-2.364-1.166-2.73-1.299-.366-.133-.633-.2-.9.2-.266.4-1.033 1.299-1.266 1.565-.234.267-.467.3-.867.1-.4-.2-1.688-.622-3.215-1.984-1.188-1.059-1.99-2.369-2.222-2.769-.234-.4-.025-.617.175-.815.18-.18.4-.467.6-.7.2-.234.266-.4.4-.666.133-.267.067-.5-.034-.7-.1-.2-.9-2.177-1.234-2.977-.325-.78-.656-.674-.9-.686l-.769-.013a1.474 1.474 0 00-1.067.5c-.366.4-1.4 1.369-1.4 3.34s1.433 3.872 1.633 4.138c.2.267 2.822 4.308 6.836 6.04.955.413 1.7.659 2.28.843.957.303 1.83.26 2.52.157.768-.114 2.364-.967 2.697-1.902.333-.934.333-1.734.234-1.902-.1-.167-.366-.267-.766-.467z"/>
        </svg>
        <!-- Close icon -->
        <svg v-else key="close" viewBox="0 0 24 24" width="22" height="22" fill="white">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
        </svg>
      </transition>

      <!-- Notification badge -->
      <span v-if="!isOpen" class="wa-badge">1</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'WhatsAppFloater',
  data() {
    return {
      isOpen: false,
      showTooltip: true,
      userMessage: '',
      businessName: 'Support Team',
      phoneNumber: '2347011136719', // Replace with your WhatsApp number (no + or spaces)
      greeting: "👋 Hello! Welcome! How can we help you today? Click send to start chatting with us on WhatsApp.",
    }
  },
  computed: {
    currentTime() {
      const now = new Date()
      return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    },
  },
  mounted() {
    // Hide tooltip after 4s
    setTimeout(() => { this.showTooltip = false }, 4000)
  },
  methods: {
    toggleChat() {
      this.isOpen = !this.isOpen
      if (this.isOpen) this.showTooltip = false
    },
    sendToWhatsApp() {
      const text = this.userMessage.trim() || this.greeting
      const encoded = encodeURIComponent(text)
      window.open(`https://wa.me/${this.phoneNumber}?text=${encoded}`, '_blank')
      this.userMessage = ''
    },
  },
}
</script>

<style scoped>
/* ── Container ── */
.wa-floater {
  position: fixed;
  bottom: 28px;
  right: 28px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
}

/* ── FAB ── */
.wa-fab {
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: #25D366;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.45);
  position: relative;
  transition: transform 0.2s, box-shadow 0.2s;
  flex-shrink: 0;
}

.wa-fab:hover {
  transform: scale(1.08);
  box-shadow: 0 6px 28px rgba(37, 211, 102, 0.55);
}

.wa-fab.open {
  background: #111111;
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);
}

/* ── Badge ── */
.wa-badge {
  position: absolute;
  top: 2px;
  right: 2px;
  width: 18px;
  height: 18px;
  background: #F9A825;
  color: #111;
  font-size: 0.65rem;
  font-weight: 800;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
}

/* ── Tooltip ── */
.wa-tooltip {
  background: #111;
  color: #fff;
  font-size: 0.82rem;
  font-weight: 600;
  padding: 7px 14px;
  border-radius: 20px;
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(0,0,0,0.18);
  pointer-events: none;
  border: 1px solid rgba(249,168,37,0.3);
}

/* ── Chat popup ── */
.wa-chat {
  width: 320px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25);
  background: #fff;
  border: 1px solid rgba(0,0,0,0.08);
}

/* ── Header ── */
.wa-chat-header {
  background: #111111;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom: 2px solid #F9A825;
}

.wa-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #25D366;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.wa-chat-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.wa-chat-name {
  color: #fff;
  font-size: 0.9rem;
  font-weight: 700;
}

.wa-chat-status {
  display: flex;
  align-items: center;
  gap: 5px;
  color: rgba(255,255,255,0.55);
  font-size: 0.73rem;
}

.status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #25D366;
  box-shadow: 0 0 6px #25D366;
  animation: pulse-green 2s ease-in-out infinite;
}

@keyframes pulse-green {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.4; }
}

.wa-close {
  background: rgba(255,255,255,0.1);
  border: none;
  color: rgba(255,255,255,0.7);
  font-size: 0.85rem;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s;
  flex-shrink: 0;
}

.wa-close:hover {
  background: rgba(255,255,255,0.2);
}

/* ── Body ── */
.wa-chat-body {
  background: #ece5dd;
  padding: 20px 14px;
  min-height: 140px;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c8b8a2' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.wa-bubble-wrap {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.wa-time {
  font-size: 0.68rem;
  color: rgba(0,0,0,0.38);
  text-align: center;
  margin-bottom: 4px;
}

.wa-bubble {
  background: #fff;
  border-radius: 0 12px 12px 12px;
  padding: 10px 14px;
  max-width: 90%;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.wa-bubble p {
  font-size: 0.85rem;
  color: #111;
  line-height: 1.5;
}

/* ── Footer / Input ── */
.wa-chat-footer {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 12px;
  background: #f0f0f0;
  border-top: 1px solid #e0e0e0;
}

.wa-input {
  flex: 1;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 24px;
  padding: 9px 16px;
  font-size: 0.85rem;
  color: #111;
  outline: none;
  transition: border-color 0.15s;
}

.wa-input:focus {
  border-color: #F9A825;
}

.wa-send {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: #25D366;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background 0.15s, transform 0.15s;
}

.wa-send:hover {
  background: #1ebc5a;
  transform: scale(1.07);
}

/* ── Transitions ── */
.pop-enter-active {
  animation: popIn 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.pop-leave-active {
  animation: popIn 0.18s ease-in reverse;
}

@keyframes popIn {
  from { opacity: 0; transform: scale(0.85) translateY(16px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
}

.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to       { opacity: 0; }

.spin-enter-active, .spin-leave-active { transition: opacity 0.15s, transform 0.15s; }
.spin-enter-from  { opacity: 0; transform: rotate(-90deg) scale(0.7); }
.spin-leave-to    { opacity: 0; transform: rotate(90deg) scale(0.7); }

/* ── Mobile ── */
@media (max-width: 400px) {
  .wa-floater { bottom: 18px; right: 16px; }
  .wa-chat { width: 290px; }
}
</style>