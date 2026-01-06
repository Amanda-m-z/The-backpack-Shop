import "./scss/style.scss";
const heroButton = document.getElementById(
  "hero-cta"
) as HTMLButtonElement | null;

if (heroButton) {
  heroButton.addEventListener("click", () => {
    window.location.href = "/oneproduct.html";
  });
}
