export const loadHeader = () => {
  const headerContainer = document.getElementById("headerContainer");

  // SMALL BANNER ABOVE MAIN HEADER
  const aboveHeader = document.createElement("div");
  const infoTextHeader = document.createElement("p");
  // SMALL BANNER ENDS HERE

  // MAIN HEADER STARTS HERE
  const mainHeader = document.createElement("div");
  // Left side
  const headerLeftSideContainer = document.createElement("div");
  const hamburgerIcon = document.createElement("i");
  const companyName = document.createElement("h2");

  // Search container will be shown on larger screens
  const searchContainer = document.createElement("div");
  const searchInput = document.createElement("input");

  // Right side
  const headerRightSideContainer = document.createElement("div");
  const searchIcon = document.createElement("i");
  const userIcon = document.createElement("i");
  const heartIcon = document.createElement("i");
  const shoppingCartIcon = document.createElement("i");
  // MAIN HEADER ENDS HERE

  // UNDER HEADER STARTS HERE
  const underHeader = document.createElement("div");
  // Left side
  const underHeaderLeftSide = document.createElement("nav");
  const newProductsLink = document.createElement("a");
  const bestsellerLink = document.createElement("a");

  const dropDownBackpack = document.createElement("div");
  const backpacksLink = document.createElement("a");
  const dropDownAccessories = document.createElement("div");
  const accessoriesLink = document.createElement("a");
  const chevronDownIconBackpack = document.createElement("i");
  const chevronDownIconAccessories = document.createElement("i");

  // Right side
  const underHeaderRightSide = document.createElement("nav");
  const aboutUsLink = document.createElement("a");
  const sustainablityLink = document.createElement("a");
  const contactUsLink = document.createElement("a");
  // UNDER HEADER ENDS HERE

  //
  aboveHeader.id = "above-header";
  infoTextHeader.textContent = "Fri frakt över 599 kr";

  //
  mainHeader.id = "header";

  headerLeftSideContainer.className = "header-left-side";
  hamburgerIcon.className = "hamburger-menu fa-solid fa-bars";
  hamburgerIcon.addEventListener("click", openHamburgerMenu);

  companyName.textContent = "Pac Bac";

  searchContainer.className = "search-container";
  searchInput.className = "search-field";
  searchInput.type = "search";
  searchInput.placeholder = "Sök produkt";

  headerRightSideContainer.className = "header-right-side";
  searchIcon.className = "fa-solid fa-magnifying-glass";
  userIcon.className = "fa-solid fa-user";
  heartIcon.className = "fa-solid fa-heart";
  shoppingCartIcon.className = "fa-solid fa-cart-shopping";
  //

  // UNDER HEADER STARTS HERE
  // under header will be shown on larger screens
  underHeader.id = "under-header";

  // Left side
  underHeaderLeftSide.className = "under-header-left-side";
  newProductsLink.href = "";
  newProductsLink.textContent = "Nyheter";
  bestsellerLink.href = "";
  bestsellerLink.textContent = "Bästsäljare";

  dropDownBackpack.className = "drop-down-category";
  dropDownAccessories.className = "drop-down-category";
  backpacksLink.href = "./pages/shop.html";
  backpacksLink.textContent = "Ryggsäckar";
  accessoriesLink.href = "";
  accessoriesLink.textContent = "Accessoarer";
  chevronDownIconBackpack.className = "fa-solid fa-chevron-down";
  chevronDownIconAccessories.className = "fa-solid fa-chevron-down";

  // Right side
  underHeaderRightSide.className = "under-header-right-side";
  aboutUsLink.href = "";
  aboutUsLink.textContent = "Om oss";
  sustainablityLink.href = "";
  sustainablityLink.textContent = "Hållbarhet";
  contactUsLink.href = "";
  contactUsLink.textContent = "Kontakta oss";
  // UNDER HEADER ENDS HERE

  // AppendChild
  aboveHeader.appendChild(infoTextHeader);

  headerLeftSideContainer.appendChild(hamburgerIcon);
  headerLeftSideContainer.appendChild(companyName);

  searchContainer.appendChild(searchInput);
  searchContainer.appendChild(searchIcon);

  headerRightSideContainer.appendChild(searchIcon);
  headerRightSideContainer.appendChild(userIcon);
  headerRightSideContainer.appendChild(heartIcon);
  headerRightSideContainer.appendChild(shoppingCartIcon);

  mainHeader.appendChild(headerLeftSideContainer);
  mainHeader.appendChild(searchContainer);
  mainHeader.appendChild(headerRightSideContainer);

  underHeaderLeftSide.appendChild(newProductsLink);
  underHeaderLeftSide.appendChild(bestsellerLink);
  underHeaderLeftSide.appendChild(dropDownBackpack);
  underHeaderLeftSide.appendChild(dropDownAccessories);
  dropDownBackpack.appendChild(backpacksLink);
  dropDownBackpack.appendChild(chevronDownIconBackpack);
  dropDownAccessories.appendChild(accessoriesLink);
  dropDownAccessories.appendChild(chevronDownIconAccessories);

  underHeaderRightSide.appendChild(aboutUsLink);
  underHeaderRightSide.appendChild(sustainablityLink);
  underHeaderRightSide.appendChild(contactUsLink);

  underHeader.appendChild(underHeaderLeftSide);
  underHeader.appendChild(underHeaderRightSide);

  headerContainer?.appendChild(aboveHeader);
  headerContainer?.appendChild(mainHeader);
  headerContainer?.appendChild(underHeader);
};

function openHamburgerMenu() {
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

  overlayContainer.appendChild(topContainer);
  overlayContainer.appendChild(categories);
}
