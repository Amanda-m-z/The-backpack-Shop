export function sortProducts() {
  const categoriesArray = [
    {
      title: "Mest populära",
      value: "popular",
    },
    {
      title: "Nyast först",
      value: "newest",
    },
    {
      title: "Lägsta pris",
      value: "cheap",
    },
    {
      title: "Högsta pris",
      value: "expensive",
    },
    {
      title: "Namn A-Ö",
      value: "ascendingAlphabet",
    },
    {
      title: "Namn Ö-A",
      value: "descendingAlphabet",
    },
  ];

  const sortBtn = document.getElementById("sortProductsBtn");

  categoriesArray.forEach((category) => {
    const categoryTitle = document.createElement("option");
    categoryTitle.innerHTML = category.title;
    categoryTitle.value = category.value;

    sortBtn?.appendChild(categoryTitle);
  });
}
