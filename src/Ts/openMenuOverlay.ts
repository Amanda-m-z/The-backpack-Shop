export const openHamburgerMenu = () => {
  const overlay = document.getElementById("overlay");

  const overlayContainer = document.createElement("div");

  const topContainer = document.createElement("div");
  const companyNameOverlay = document.createElement("h2");
  const closeOverlayIcon = document.createElement("i");

  const categories = document.createElement("div");
  const newProductsLinkOverlay = document.createElement("a");
  const bestsellerLinkOverlay = document.createElement("a");

  const dropDownBackpackOverlay = document.createElement("div");
  const backpacksLinkOverlay = document.createElement("a");
  const chevronDownIconBackpackOverlay = document.createElement("i");

  const dropDownAccessoriesOverlay = document.createElement("div");
  const accessoriesLinkOverlay = document.createElement("a");
  const chevronDownIconAccessoriesOverlay = document.createElement("i");

  const aboutUsLinkOverlay = document.createElement("a");
  const sustainablityLinkOverlay = document.createElement("a");
  const contactUsLinkOverlay = document.createElement("a");

  overlayContainer.id = "overlay-container";

  topContainer.className = "top-container";
  companyNameOverlay.textContent = "Pac Bac";
  closeOverlayIcon.className = "fa-solid fa-xmark";

  categories.className = "categories-container";
  newProductsLinkOverlay.href = "";
  newProductsLinkOverlay.textContent = "Nyheter";
  bestsellerLinkOverlay.href = "";
  bestsellerLinkOverlay.textContent = "Bästsäljare";

  dropDownBackpackOverlay.className = "drop-down-category";
  backpacksLinkOverlay.href = "./pages/shop.html";
  backpacksLinkOverlay.textContent = "Ryggsäckar";
  chevronDownIconBackpackOverlay.className = "fa-solid fa-chevron-down";

  dropDownAccessoriesOverlay.className = "drop-down-category";
  accessoriesLinkOverlay.href = "";
  accessoriesLinkOverlay.textContent = "Accessoarer";
  chevronDownIconAccessoriesOverlay.className = "fa-solid fa-chevron-down";

  aboutUsLinkOverlay.href = "";
  aboutUsLinkOverlay.textContent = "Om oss";
  sustainablityLinkOverlay.href = "";
  sustainablityLinkOverlay.textContent = "Hållbarhet";
  contactUsLinkOverlay.href = "";
  contactUsLinkOverlay.textContent = "Kontakta oss";

  topContainer.appendChild(companyNameOverlay);
  topContainer.appendChild(closeOverlayIcon);

  categories.appendChild(newProductsLinkOverlay);
  categories.appendChild(bestsellerLinkOverlay);
  categories.appendChild(dropDownBackpackOverlay);
  dropDownBackpackOverlay.appendChild(backpacksLinkOverlay);
  dropDownBackpackOverlay.appendChild(chevronDownIconBackpackOverlay);

  categories.appendChild(dropDownAccessoriesOverlay);
  dropDownAccessoriesOverlay.appendChild(accessoriesLinkOverlay);
  dropDownAccessoriesOverlay.appendChild(chevronDownIconAccessoriesOverlay);

  categories.appendChild(aboutUsLinkOverlay);
  categories.appendChild(sustainablityLinkOverlay);
  categories.appendChild(contactUsLinkOverlay);

  overlayContainer.appendChild(topContainer);
  overlayContainer.appendChild(categories);

  overlay?.appendChild(overlayContainer);
};
