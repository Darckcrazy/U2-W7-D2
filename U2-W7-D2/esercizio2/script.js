const clockSpan = document.getElementById("clock");
const COUNTER_KEY = "sessionCounter";

// Reset del contatore ad ogni caricamento pagina
sessionStorage.removeItem(COUNTER_KEY);
let counter = 0;
clockSpan.textContent = "00:00:00";

function formatTime(sec) {
  const h = String(Math.floor(sec / 3600)).padStart(2, "0");
  const m = String(Math.floor((sec % 3600) / 60)).padStart(2, "0");
  const s = String(sec % 60).padStart(2, "0");
  return `${h}:${m}:${s}`;
}

setInterval(() => {
  counter++;
  clockSpan.textContent = formatTime(counter);
  sessionStorage.setItem(COUNTER_KEY, counter);
}, 1000);
