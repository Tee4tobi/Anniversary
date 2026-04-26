// ── Change this to your real start date ──
const START_DATE = new Date("2026-02-02T00:00:00");

function updateTimer() {
  const diff = Date.now() - START_DATE.getTime();
  const days    = Math.floor(diff / 86400000);
  const hours   = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);

  document.getElementById("days").textContent    = String(days).padStart(3, "0");
  document.getElementById("hours").textContent   = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

updateTimer();
setInterval(updateTimer, 1000);

// ── Music Player ──
const audio   = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");
const playIcon = document.getElementById("playIcon");
const bars    = document.querySelectorAll(".bar");
let playing   = false;

playBtn.addEventListener("click", () => {
  playing = !playing;
  if (playing) {
    audio.play();
    bars.forEach(b => b.classList.add("active"));
    playIcon.innerHTML = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>';
  } else {
    audio.pause();
    bars.forEach(b => b.classList.remove("active"));
    playIcon.innerHTML = '<path d="M8 5v14l11-7z"/>';
  }
});