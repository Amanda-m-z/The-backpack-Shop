export const createButtonBUY = () => {
  //Denna metod skapar en knapp ButtonBuy

  const buttonBuy = document.createElement("button");
  buttonBuy.innerHTML = "BUY";
  buttonBuy.className = "buttonBuy btn btn-primary";

  //buttonBuy.addEventListener("click", () => {        //Om du klickar buy så läggs backPack i kundkorg
  //addToCart(theBag);
  //});

  return buttonBuy;
};
