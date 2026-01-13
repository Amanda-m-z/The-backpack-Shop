export const loadProductHero = () => {
    const productHero = document.getElementById("product-hero");

    const heroSection = document.createElement("section");
    heroSection.className = "product-hero-section";

    const heroImageContainer = document.createElement("div");
    heroImageContainer.className = "hero-image-container";
    const heroImage = document.createElement("img");
    heroImage.src = "/images/product_list_hero.jpg";
    heroImage.alt = "Hero Image";

    const heroTextContainer = document.createElement("div");
    heroTextContainer.className = "hero-text-container";
    const heroTitle = document.createElement("h1");
    heroTitle.textContent = "Upptäck vår nya kollektion av ryggsäckar";
    const heroSubtitle = document.createElement("p");
    heroSubtitle.textContent = "Stil möter funktionalitet i varje design";

    heroImageContainer.appendChild(heroImage);
    heroTextContainer.appendChild(heroTitle);
    heroTextContainer.appendChild(heroSubtitle);
    heroSection.appendChild(heroImageContainer);
    heroSection.appendChild(heroTextContainer);
    
}