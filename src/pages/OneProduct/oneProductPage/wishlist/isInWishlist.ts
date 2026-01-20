import type { Product } from "../../../../models/ProductType";

export function isInWishlist(productId: number) {
  // gets the data from lS
  const wishlistItemsFromLs = localStorage.getItem("wishlist");
  // if there's no items return false
  if (!wishlistItemsFromLs) return false;

  // converts string to object and store them in an array
  const wishlistItems: Product[] = JSON.parse(wishlistItemsFromLs);
  // check if an item in the wishlistItems array has a matching id for the product
  return wishlistItems.some((item) => item.id === productId);
}
