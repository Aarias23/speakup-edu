// app.js
let currentIndex = 0;

const title = document.getElementById("title");
const text = document.getElementById("text");
const audio = document.getElementById("audioPlayer");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function renderContent(index) {
  const item = conversations[index];
  if (!item) return;

  title.textContent = item.title;
  text.innerHTML = item.text.trim();
  audio.src = item.audio;

  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === conversations.length - 1;
}

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    renderContent(currentIndex);
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < conversations.length - 1) {
    currentIndex++;
    renderContent(currentIndex);
  }
});

// Init
document.addEventListener("DOMContentLoaded", () =>
  renderContent(currentIndex)
);

// Dark Mode Logic
const toggle = document.getElementById("darkModeToggle");
const prefersDark = localStorage.getItem("theme") === "dark";

if (prefersDark) {
  document.body.classList.add("dark-mode");
  toggle.checked = true;
}

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    document.body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
  }
});
