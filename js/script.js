const toggleThemeButton = document.getElementById("toggle-theme");
const bodyElement = document.body;

// Função para controlar responsividade
function handleResponsive() {
  const flexContainer = document.querySelector(".flex");
  const containerRetangulos = document.querySelector(".container-retangulos");
  const miniRetangulos = document.querySelectorAll(".mini-retangulo");

  if (window.innerWidth <= 1900) {
    // Tela menor - adiciona classe responsive
    flexContainer.classList.add("responsive");
    containerRetangulos.classList.add("responsive");
    miniRetangulos.forEach((retangulo) => {
      retangulo.classList.add("responsive");
    });
  } else {
    // Tela maior - remove classe responsive
    flexContainer.classList.remove("responsive");
    containerRetangulos.classList.remove("responsive");
    miniRetangulos.forEach((retangulo) => {
      retangulo.classList.remove("responsive");
    });
  }
}

// Executa na carga da página
handleResponsive();

// Executa quando a janela é redimensionada
window.addEventListener("resize", handleResponsive);

// Função para atualizar o ícone do botão
function updateButtonIcon() {
  if (bodyElement.classList.contains("dark-mode")) {
    toggleThemeButton.textContent = "☀️";
  } else {
    toggleThemeButton.textContent = "🌙";
  }
}

// Função para adicionar efeito de transição
function addTransitionEffect() {
  // Adiciona uma classe temporária para efeito visual
  bodyElement.classList.add("transitioning");

  // Remove a classe após a transição
  setTimeout(() => {
    bodyElement.classList.remove("transitioning");
  }, 1200);
}

// Verifica se há preferência salva
if (localStorage.getItem("theme") === "dark") {
  bodyElement.classList.add("dark-mode");
}

// Inicializa o ícone do botão
updateButtonIcon();

toggleThemeButton.addEventListener("click", () => {
  // Adiciona efeito de transição
  addTransitionEffect();

  // Pequeno delay para o efeito visual
  setTimeout(() => {
    bodyElement.classList.toggle("dark-mode");

    // Atualiza o ícone do botão
    updateButtonIcon();

    // Salva a preferência do usuário
    if (bodyElement.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }, 100);
});
