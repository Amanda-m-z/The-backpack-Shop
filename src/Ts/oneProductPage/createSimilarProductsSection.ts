import type { Product } from "../../BackpackType/ProductType";
import { getProduct } from "../../getProduct";
import { createProductItemCard } from "./createProductItemCard";

export async function createSimilarProductsSection(
  category: string,
  productID: number,
  similarProductsContainer: HTMLElement
): Promise<void> {
  similarProductsContainer.id = "similarProductsContainer";

  // Get all the products in the product array
  const theProducts: Product[] = await getProduct();

  // Removed the same product that is already shown on one product page from the array
  const removedSameProduct = theProducts.filter(
    (product) => product.id !== productID
  );

  // Filter products that have similar categories and limit it to show only 4 products
  const similarCategory = removedSameProduct
    .filter((product) => product.type === category)
    .slice(0, 2);

  console.log(similarCategory);

  const similarProducts = document.createElement("div");

  similarCategory.forEach((product) => {
    createProductItemCard(product, similarProductsContainer, similarProducts);
  });
}
