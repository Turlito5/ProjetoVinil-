function filterDiscos() {
  const FiltroDiscos = document.getElementById("FiltroDiscos");
  const discos = document.querySelectorAll(".");
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
}
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

function Redirecionar() {
  window.location.href =
    "https://vinilrecords.com.br/?gad_source=1&gad_campaignid=21517304090&gclid=CjwKCAjw2brFBhBOEiwAVJX5GCfg0gzuBI9VEaGcHFkE0EfQ8HoER1q_Xg-UAQCL8NGf4vSvKAPschoCvT4QAvD_BwE";
}
