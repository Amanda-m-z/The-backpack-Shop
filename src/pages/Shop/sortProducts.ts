export function sortProducts() {
  const categoriesArray = [
    "Mest populära",
    "Nyast först",
    "Lägsta pris",
    "Högsta pris",
    "Namn A-Ö",
    "Namn Ö-A",
  ];

  const sortBtn = document.getElementById("sortProducts");
  sortBtn?.addEventListener("click", () => {});

  const sortingCategories = document.getElementById("sortingCategories");

  categoriesArray.forEach((category) => {
    const categoryContainer = document.createElement("div");
    const categoryTitle = document.createElement("p");
    categoryTitle.innerHTML = category;

    sortingCategories?.append(categoryContainer);

    categoryContainer.append(categoryTitle);
  });
}
