export function showAddedToCartPopUp() {
  const container = document.getElementById("addedToCartPopUpSection");

  const popUpExists = document.getElementById("popUpContainer");
  const isPopUpClosed = container?.classList.contains("close-overlay");

  if (popUpExists && !isPopUpClosed) {
    return;
  }

  if (popUpExists && isPopUpClosed) {
    popUpExists.remove();
  }

  const popUpContainer = document.createElement("div");
  const textContainer = document.createElement("div");
  const popUpIcon = document.createElement("i");
  const popUpText = document.createElement("p");
  const buttonsContainer = document.createElement("div");
  const continueShoppingBtn = document.createElement("button");
  const showShoppingCartBtn = document.createElement("button");

  popUpContainer.id = "popUpContainer";
  textContainer.className = "textContainer";
  popUpIcon.className = "fa-regular fa-circle-check";
  popUpText.textContent = "Varan har lagts till i varukorgen! :D";
  buttonsContainer.className = "buttonsContainer";
  continueShoppingBtn.textContent = "Fortsätt handla";
  continueShoppingBtn.className = "btn btn-secondary";
  continueShoppingBtn.addEventListener("click", () => {
    container?.classList.add("close-overlay");
  });
  showShoppingCartBtn.textContent = "Gå till kassan";
  showShoppingCartBtn.className = "btn btn-primary";
  showShoppingCartBtn.addEventListener("click", () => {
    container?.classList.add("close-overlay");
    window.location.href = "../../pages/checkout.html";
  });

  textContainer.append(popUpIcon, popUpText);
  buttonsContainer.append(continueShoppingBtn, showShoppingCartBtn);
  popUpContainer.append(textContainer, buttonsContainer);
  // Remove close-overlay class to show the popup
  container?.classList.remove("close-overlay");
  container?.appendChild(popUpContainer);

  setTimeout(() => {
    container?.classList.add("close-overlay");
  }, 3000);
}
