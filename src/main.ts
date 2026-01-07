import { loadHeader } from "./Ts/loadHeader";
import "./scss/style.scss";
const heroButton = document.getElementById(
  "hero-cta"
) as HTMLButtonElement | null;

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
  console.error("Header element not found");
}
