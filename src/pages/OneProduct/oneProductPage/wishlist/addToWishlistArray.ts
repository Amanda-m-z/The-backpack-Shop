import type { Product } from "../../../../models/ProductType";

export function addToWishlistArray(item: Product) {
  let wishlistItems: Product[] = [];
  const wishlistItemsFromLs = localStorage.getItem("wishlist");

  if (wishlistItemsFromLs) {
    wishlistItems = JSON.parse(wishlistItemsFromLs);
  }

  const isAlreadyInWishlist = wishlistItems.some(
    (wishlistItem) => wishlistItem.id === item.id,
  );

  if (!isAlreadyInWishlist) {
    const newWishlistItem: Product = {
      type: item.type,
      price: item.price,
      purchases: item.purchases,
      name: item.name,
      img: item.img,
      color: item.color,
      id: item.id,
      dateAdded: item.dateAdded,
    };
    wishlistItems.push(newWishlistItem);

    localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
  }
}
