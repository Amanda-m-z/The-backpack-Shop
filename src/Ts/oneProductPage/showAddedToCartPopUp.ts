export function showAddedToCartPopUp() {
  const container = document.getElementById("addedToCartPopUpSection");
  const textContainer = document.createElement("div");
  const popUpIcon = document.createElement("i");
  const popUpText = document.createElement("p");
  const buttonsContainer = document.createElement("div");
  const continueShoppingBtn = document.createElement("button");
  const showShoppingCartBtn = document.createElement("button");

  textContainer.className = "textContainer";
  popUpIcon.className = "fa-regular fa-circle-check";
  popUpText.textContent = "Varan har lagts till i varukorgen";
  buttonsContainer.className = "buttonsContainer";
  continueShoppingBtn.textContent = "Fortsätt handla";
  showShoppingCartBtn.textContent = "Visa varukorgen";

  textContainer.append(popUpIcon, popUpText);
  buttonsContainer.append(continueShoppingBtn, showShoppingCartBtn);
  container?.append(textContainer, buttonsContainer);

  setTimeout(() => {
    container?.classList.toggle("close-overlay");
  }, 4000);
}
