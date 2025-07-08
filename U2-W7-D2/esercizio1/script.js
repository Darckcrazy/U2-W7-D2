const savedNameSpan = document.getElementById("savedName");
const nameInput = document.getElementById("nameInput");
const saveBtn = document.getElementById("saveBtn");
const removeBtn = document.getElementById("removeBtn");
const randomCardContainer = document.getElementById("randomCardContainer");
const STORAGE_KEY = "savedName";

function updateSavedNameDisplay() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    savedNameSpan.textContent = `Nome salvato: ${saved}`;
  } else {
    savedNameSpan.textContent = "";
  }
}

function showRandomCard(name) {
  // Usa un'immagine casuale da picsum.photos
  const imgUrl = `https://picsum.photos/seed/${Math.floor(
    Math.random() * 10000
  )}/400/200`;
  randomCardContainer.innerHTML = `
    <div class="card shadow-sm">
      <img src="${imgUrl}" class="card-img-top" alt="Immagine casuale">
      <div class="card-body">
        <h5 class="card-title">Ciao, ${name}!</h5>
        <p class="card-text">Benvenuto nella tua area personale 🎉</p>
      </div>
    </div>
  `;
}

function hideRandomCard() {
  randomCardContainer.innerHTML = "";
}

updateSavedNameDisplay();

// Se c'è già un nome salvato, mostra la card
const initialName = localStorage.getItem(STORAGE_KEY);
if (initialName) {
  showRandomCard(initialName);
}

saveBtn.addEventListener("click", () => {
  const value = nameInput.value.trim();
  if (value) {
    localStorage.setItem(STORAGE_KEY, value);
    updateSavedNameDisplay();
    showRandomCard(value);
  }
});

removeBtn.addEventListener("click", () => {
  localStorage.removeItem(STORAGE_KEY);
  updateSavedNameDisplay();
  hideRandomCard();
});
