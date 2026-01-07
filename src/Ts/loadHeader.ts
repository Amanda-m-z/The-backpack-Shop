export const loadHeader = () => {
  const headerContainer = document.getElementById("headerContainer");

  // Small banner above the main header
  const aboveHeader = document.createElement("div");
  const infoTextHeader = document.createElement("p");
  // End of small banner

  // Main header
  const mainHeader = document.createElement("div");

  const headerLeftSideContainer = document.createElement("div");
  const hamburgerIcon = document.createElement("i");
  const companyName = document.createElement("h2");

  // Search container will be shown on larger screens
  const searchContainer = document.createElement("div");
  const searchInput = document.createElement("input");

  const headerRightSideContainer = document.createElement("div");
  const searchIcon = document.createElement("i");
  const userIcon = document.createElement("i");
  const heartIcon = document.createElement("i");
  const shoppingCartIcon = document.createElement("i");
  // End of main header

  //
  aboveHeader.id = "above-header";
  infoTextHeader.textContent = "Fri frakt över 599 kr";

  //
  mainHeader.id = "header";

  headerLeftSideContainer.className = "header-left-side";
  hamburgerIcon.className = "hamburger-menu fa-solid fa-bars";
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

  headerContainer?.appendChild(aboveHeader);
  headerContainer?.appendChild(mainHeader);
};
