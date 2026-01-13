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
  heroSubtitle.textContent =
    "Här hittar du ryggsäckar för alla tillfällen - från vardag till äventyr. Välj bland olika stilar, storlekar och funktioner för att hitta den perfekta ryggsäcken för dig. smarta laptopryggsäckar, hållbara vandringsryggsäckar och mycket mer. vandringsryggsäckar för alla dina äventyr. varje ryggsäck är designad med fokus på komfort, funktionalitet och stil. Börja utforska vårt sortiment idag och hitta din nya favoritryggsäck!";


                    // Append Elements //
  heroTextContainer.appendChild(heroTitle);
  heroTextContainer.appendChild(heroSubtitle);
  heroSection.appendChild(heroImageContainer);
  heroSection.appendChild(heroTextContainer);
  productHero?.appendChild(heroSection);
};
