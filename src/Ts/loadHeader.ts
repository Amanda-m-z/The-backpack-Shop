import { openHamburgerMenu } from "./openHamburgerMenu";

export const loadHeader = () => {
  const overlay = document.getElementById("overlay");
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
  shoppingCartIcon.id = "theCartIcon";
  // MAIN HEADER ENDS HERE

  // UNDER HEADER STARTS HERE
  const underHeader = document.createElement("div");
  // Left side
  const underHeaderLeftSide = document.createElement("nav");
  const newProductsLink = document.createElement("a");
  const bestsellerLink = document.createElement("a");

  const dropDownBackpackContainer = document.createElement("div");
  const dropdownLink = document.createElement("a");
  const chevronDownIconBackpack = document.createElement("i");

  const dropDownContent = document.createElement("div");
  const allBackpacksLink = document.createElement("a");
  const everydayBackpacksLink = document.createElement("a");
  const laptopBackpacksLink = document.createElement("a");
  const hikingBackpacksLink = document.createElement("a");

  const dropDownAccessories = document.createElement("div");
  const accessoriesLink = document.createElement("a");
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
  hamburgerIcon.addEventListener("click", () => {
    overlay?.classList.toggle("close-overlay");
  });

  companyName.textContent = "Pac Bac";

  searchContainer.className = "search-container";
  searchInput.className = "search-field";
  searchInput.id = "search";
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

  dropDownBackpackContainer.className = "backpack-drop-down drop-down-category";
  dropdownLink.href = "#";
  dropdownLink.textContent = "Ryggsäckar";
  chevronDownIconBackpack.className = "fa-solid fa-chevron-down";

  dropDownContent.className = "dropdown-content";
  allBackpacksLink.href = "#";
  allBackpacksLink.textContent = "Alla ryggsäckar";
  allBackpacksLink.id = "allBackpacksLink";
  everydayBackpacksLink.href = "#";
  everydayBackpacksLink.textContent = "Vardagsryggsäckar";
  laptopBackpacksLink.href = "#";
  laptopBackpacksLink.textContent = "Laptopryggsäckar";
  hikingBackpacksLink.href = "#";
  hikingBackpacksLink.textContent = "Vandringsryggsäckar";

  dropDownAccessories.className = "drop-down-category";
  accessoriesLink.href = "";
  accessoriesLink.textContent = "Accessoarer";
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
  underHeaderLeftSide.appendChild(dropDownBackpackContainer);
  underHeaderLeftSide.appendChild(dropDownAccessories);

  dropDownBackpackContainer.appendChild(dropdownLink);
  dropDownBackpackContainer.appendChild(chevronDownIconBackpack);
  dropDownBackpackContainer.appendChild(dropDownContent);
  dropDownContent.appendChild(allBackpacksLink);
  dropDownContent.appendChild(everydayBackpacksLink);
  dropDownContent.appendChild(laptopBackpacksLink);
  dropDownContent.appendChild(hikingBackpacksLink);

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
