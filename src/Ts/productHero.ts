/* Product Hero Section */

// Load Product Hero Section //
export const loadProductHero = () => {
  const productHero = document.getElementById("product-hero");

  // Create Hero Section //
  const heroSection = document.createElement("section");
  heroSection.className = "product-hero-section";

  // Create Hero Image //
  const heroImageContainer = document.createElement("div");
  heroImageContainer.className = "hero-image-container";

  // Create Hero Text //
  const heroTextContainer = document.createElement("div");
  heroTextContainer.className = "hero-text-container";
  const heroTitle = document.createElement("h1");
  heroTitle.textContent = "Upptäck alla våra ryggsäckar";
  const heroSubtitle = document.createElement("p");
  heroSubtitle.className = "hyphenManual";
  heroSubtitle.innerHTML = `Här hittar du din perfekta ryggsäck oavsett om det är för äventyr eller vardag. Välj mellan våra tre kategorier: bekväma laptop&shy;ryggsäckar för jobbet eller skolan, robusta vandrings&shy;ryggsäckar för äventyr i naturen, eller stilrena vardags&shy;ryggsäckar som följer dig överallt. Varje modell är skapad för att bära ditt liv på ett säkert, bekvämt och stilfullt sätt.`;

  // Append Elements //
  heroTextContainer.appendChild(heroTitle);
  heroTextContainer.appendChild(heroSubtitle);
  heroSection.appendChild(heroImageContainer);
  heroSection.appendChild(heroTextContainer);
  productHero?.appendChild(heroSection);
};
