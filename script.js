const emoji1 = document.getElementById("emoji1");
const emoji2 = document.getElementById("emoji2");
const combinedEmoji = document.getElementById("combinedEmoji");
const combineBtn = document.getElementById("combineBtn");
const copyBtn = document.getElementById("copyBtn");

combineBtn.addEventListener("click", () => {
  // Combina los dos emojis seleccionados
  combinedEmoji.textContent = emoji1.value + emoji2.value;
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(combinedEmoji.textContent)
    .then(() => alert("¡Combinación copiada al portapapeles!"))
    .catch(() => alert("Error al copiar"));
});
