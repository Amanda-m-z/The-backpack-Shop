import type { Product } from "../../../../models/ProductType";

export function removeFromWislistArray(item: Product) {
  let wishlistItems: Product[] = [];

  const wishlistItemsFromLs = localStorage.getItem("wishlist");
  if (wishlistItemsFromLs) {
    wishlistItems = JSON.parse(wishlistItemsFromLs);
  }

  // Filter away the product in the array
  wishlistItems = wishlistItems.filter((a) => a.id !== item.id);

  // Saves the updated array to lS
  localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
}
