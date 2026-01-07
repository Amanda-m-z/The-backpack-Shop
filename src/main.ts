import { loadHeader } from "./Ts/loadHeader";
import "./scss/style.scss";
const heroButton = document.getElementById("heroCta");

if (heroButton) {
  heroButton.addEventListener("click", () => {
    window.location.href = "/oneproduct.html";
  });
}

// Load main header
const header = document.getElementById("headerContainer");

if (header) {
  loadHeader();
} else {
  console.error("Header element with the id 'headerContainer' not found");
}
heroButton?.addEventListener("click", () => {
  window.location.href = "/oneproduct.html";
});
