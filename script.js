// === 7-Star Hotel Feedback Form Interactions ===

// Select elements
const form = document.querySelector(".feedback-form");
const modal = document.getElementById("thankYouModal");
const modalContent = modal.querySelector(".modal-content");

// --- 🔔 Load a soft chime sound ---
const chime = new Audio(
  "https://cdn.pixabay.com/download/audio/2022/03/15/audio_2d2d2a905d.mp3?filename=soft-notification-tone-44129.mp3"
);

// --- 💫 Animate form on page load ---
window.addEventListener("load", () => {
  form.style.opacity = "0";
  form.style.transform = "translateY(40px)";
  setTimeout(() => {
    form.style.transition = "all 1s ease";
    form.style.opacity = "1";
    form.style.transform = "translateY(0)";
  }, 300);
});

// --- 🎉 Confetti Animation ---
function createConfetti() {
  const confettiCount = 40;
  const colors = ["#FFD700", "#FFF5C3", "#FFEA70", "#F9D77E"];

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.position = "absolute";
    confetti.style.top = "-10px";
    confetti.style.width = "8px";
    confetti.style.height = "8px";
    confetti.style.borderRadius = "50%";
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animation = "fall 4s linear forwards";
    confetti.style.animationDelay = Math.random() * 2 + "s";
    modal.appendChild(confetti);

    // Remove confetti after animation
    setTimeout(() => confetti.remove(), 5000);
  }
}

// --- 🪄 Form Submission Handler ---
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Add subtle animation on form submit
  form.classList.add("submitted");
  setTimeout(() => form.classList.remove("submitted"), 800);

  // Show modal with animation
  modal.classList.add("show");
  modalContent.classList.add("animate-modal");

  // Play chime & confetti
  chime.play();
  createConfetti();

  // Hide modal after 4 seconds
  setTimeout(() => {
    modal.classList.remove("show");
    modalContent.classList.remove("animate-modal");
    form.reset();
  }, 4000);
});

// --- Optional: Close modal when clicking anywhere on it ---
modal.addEventListener("click", () => {
  modal.classList.remove("show");
  modalContent.classList.remove("animate-modal");
});

// --- Golden glow on input focus ---
document.querySelectorAll("input, textarea").forEach((field) => {
  field.addEventListener("focus", () => {
    field.style.boxShadow = "0 0 10px rgba(214, 183, 75, 0.8)";
  });
  field.addEventListener("blur", () => {
    field.style.boxShadow = "none";
  });
});

// --- ✨ Confetti animation keyframes ---
const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
  0% { transform: translateY(0) rotate(0deg); opacity: 1; }
  100% { transform: translateY(600px) rotate(360deg); opacity: 0; }
}
`;
document.head.appendChild(style);
