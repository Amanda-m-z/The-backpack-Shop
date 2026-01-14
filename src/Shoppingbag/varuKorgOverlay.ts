import { loadHeader } from "../Ts/loadHeader";


const loadoverlay = async () => {
    const overlayContainer = document.getElementById("varukorg-overlay");
    if (!overlayContainer) return;
    const overlayHTML = await fetch("/Shoppingbag/varuKorgOverlay.html").then(res => res.text());
    overlayContainer.innerHTML = overlayHTML;
}

 const initVarukorgOverlay = (onklick) => {
    const overlayContainer = document.querySelectorAll(".fa-solid.fa-cart-shopping");
    if (overlayContainer.length === 0) return;
    for (let i = 0; i < overlayContainer.length; i++) {
        overlayContainer[i].addEventListener("click", onklick);
    } 
}

 export const loadVarukorgOverlay = async (onklick) => {
    await loadoverlay();
    initVarukorgOverlay(onklick);
 }