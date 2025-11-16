// Select elements
const form = document.getElementById("feedbackForm");
const modal = document.getElementById("thankYouModal");
const modalContent = modal.querySelector(".modal-content");

// Load soft chime sound
const chime = new Audio(
  "https://cdn.pixabay.com/download/audio/2022/03/15/audio_2d2d2a905d.mp3?filename=soft-notification-tone-44129.mp3"
);

// Confetti animation
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
    modal.appendChild(confetti);
    setTimeout(() => confetti.remove(), 5000);
  }
}

// Handle form submit
form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent default behavior

  // Show modal animation
  modal.classList.add("show");
  modalContent.classList.add("animate-modal");

  // Play sound and confetti
  chime.play();
  createConfetti();

  // Get guest name
  const firstName = document.getElementById("first-name").value;
  localStorage.setItem("guestName", firstName);

  // Redirect after the modal animation ends (4s)
  setTimeout(() => {
    modal.classList.remove("show");
    window.location.href = "thank-card.html";
  }, 4000);
});

// Close modal on click
modal.addEventListener("click", () => modal.classList.remove("show"));

