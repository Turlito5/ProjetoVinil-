function filterDiscos() {
  // Pegar todos os checkboxes e cards
  const checkboxes = document.querySelectorAll(
    '#FiltroDiscos input[type="checkbox"]'
  );
  const cards = document.querySelectorAll(".col-12.col-md-6.col-lg-3.mb-4");

  // Verificar quais checkboxes estão marcados
  let categoriasSelecionadas = [];
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      categoriasSelecionadas.push(checkboxes[i].id.toLowerCase());
    }
  }

  // Se nenhum checkbox estiver marcado, mostrar todos os cards
  if (categoriasSelecionadas.length === 0) {
    for (let i = 0; i < cards.length; i++) {
      cards[i].style.display = "block";
    }
    return;
  }

  // Mostrar ou esconder os cards baseado nas categorias selecionadas
  for (let i = 0; i < cards.length; i++) {
    let mostrar = false;

    // Verificar se o card pertence a alguma categoria selecionada
    for (let j = 0; j < categoriasSelecionadas.length; j++) {
      if (cards[i].classList.contains(categoriasSelecionadas[j])) {
        mostrar = true;
        break;
      }
    }

    cards[i].style.display = mostrar ? "block" : "none";
  }
}
const navbarToggler = document.querySelector(".navbar-toggler");
const navbarCollapse = document.getElementById("navbarSupportedContent");
const profileIcon = document.getElementById("profileIcon");

function updateProfilePosition() {
  if (
    window.getComputedStyle(navbarToggler).display !== "none" &&
    !navbarCollapse.classList.contains("show")
  ) {
    profileIcon.classList.add("profile-center");
  } else {
    profileIcon.classList.remove("profile-center");
  }
}

window.addEventListener("resize", updateProfilePosition);
document.addEventListener("DOMContentLoaded", updateProfilePosition);

function toggleDarkMode() {
  const Darkmode = document.getElementById("Darkmode");
  document.body.classList.toggle("darkmode-btn");
  const Navbar = document.getElementById("navbar");
  Navbar.classList.toggle("navDarkMode");
  const Content = document.getElementById("Content");
  Content.classList.toggle("Content-Darkmode");
  const titulo = document.getElementById("titulo");
  titulo.classList.toggle("Text-Darkmode");
  document.querySelectorAll(".card").forEach((card) => {
    card.classList.toggle("CardDarkmode");
  });
  const Label = document.querySelectorAll("label");
  Label.forEach((label) => {
    label.classList.toggle("WhiteText");
  });

  const TextNav = document.querySelectorAll("a");
  TextNav.forEach((a) => {
    a.classList.toggle("WhiteText");
  });

  const page2 = document.getElementById("page2");
  if (page2) {
    page2.classList.toggle("dark");
  }
}

function toggleSidebar() {
  const toggleBtn = document.getElementById("toggleSidebar");
  const sidebar = document.getElementById("FiltroDiscos");
  const Back = document.getElementById("Back");

  if (sidebar.classList.contains("open")) {
    sidebar.classList.remove("open");
  } else {
    sidebar.classList.add("open");
  }
}

// Adiciona evento de clique no botão Voltar
document.getElementById("Back").addEventListener("click", function () {
  document.getElementById("FiltroDiscos").classList.remove("open");
});

function Redirecionar() {
  window.location.href = "PageProduct.html";
}

function Alerta() {
  alert("Comprado!");
}

// Inicializa os eventos quando o documento carrega
document.addEventListener("DOMContentLoaded", function () {
  // Adiciona evento de clique no botão toggle
  document
    .getElementById("toggleSidebar")
    .addEventListener("click", toggleSidebar);

  // Inicializa a posição do perfil
  updateProfilePosition();
});

function toggleSidebar() {
  const toggleBtn = document.getElementById("toggleSidebar");
  const sidebar = document.getElementById("FiltroDiscos");
  const Back = document.getElementById("Back");
  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });
  Back.addEventListener("click", () => {
    sidebar.classList.remove("open");
  });
}
