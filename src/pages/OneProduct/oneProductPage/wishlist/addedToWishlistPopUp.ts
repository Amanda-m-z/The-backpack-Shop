export function addedToWishlistPopUp() {
  const container = document.getElementById("addedToWishlist");

  const popUpContainer = document.createElement("div");
  const textContainer = document.createElement("div");
  const popUpIcon = document.createElement("i");
  const popUpText = document.createElement("p");
  const buttonsContainer = document.createElement("div");
  const showWishlistBtn = document.createElement("button");

  popUpContainer.id = "popUpContainer";
  textContainer.className = "textContainer";
  popUpIcon.className = "fa-solid fa-heart";
  popUpText.textContent = "Varan har lagts till din önskelista";
  buttonsContainer.className = "buttonsContainer";
  showWishlistBtn.textContent = "Gå till önskelistan";
  showWishlistBtn.className = "btn btn-primary";
  showWishlistBtn.addEventListener("click", () => {
    container?.classList.add("close-overlay");
    // window.location.href = "";
  });

  buttonsContainer.appendChild(showWishlistBtn);
  textContainer.append(popUpIcon, popUpText);
  popUpContainer.append(textContainer, buttonsContainer);
  // Remove close-overlay class to show the popup
  container?.classList.remove("close-overlay");
  container?.appendChild(popUpContainer);

  setTimeout(() => {
    container?.classList.add("close-overlay");
  }, 3000);
}
