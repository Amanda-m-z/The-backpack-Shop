import type { ProductAccordionItem } from "./ProductAccordionItem";

export function createProductDetailsAccordion(
  accordionDetails: ProductAccordionItem[],
  container: HTMLElement
) {
  container.innerHTML = "";

  accordionDetails.forEach((detailsItem) => {
    const accordionItem = document.createElement("div");
    accordionItem.className = "accordion-item";

    const accordionItemHeading = document.createElement("h2");
    accordionItemHeading.className = "accordion-header";
    accordionItemHeading.id = detailsItem.category;

    const accordionItemButton = document.createElement("button");
    accordionItemButton.textContent = detailsItem.category;
    accordionItemButton.className = "accordion-button collapsed";
    accordionItemButton.type = "button";
    accordionItemButton.dataset.bsToggle = "collapse";
    accordionItemButton.dataset.bsTarget = "#" + detailsItem.category;
    accordionItemButton.setAttribute("aria-expanded", "false");
    accordionItemButton.setAttribute(
      "aria-controls",
      "collapse" + detailsItem.category
    );

    const accordionItemTextContainer = document.createElement("div");
    accordionItemTextContainer.id = "collapse" + detailsItem.category;
    accordionItemTextContainer.className = "accordion-collapse collapse";
    accordionItemTextContainer.setAttribute(
      "aria-labelledby",
      detailsItem.category
    );
    accordionItemTextContainer.dataset.bsParent = "#accordionContainer";

    const accordionItemText = document.createElement("div");
    accordionItemText.className = "accordion-body";
    accordionItemText.innerHTML = detailsItem.text;

    accordionItem.appendChild(accordionItemHeading);
    accordionItemHeading.appendChild(accordionItemButton);
    accordionItem.appendChild(accordionItemTextContainer);
    accordionItemTextContainer.appendChild(accordionItemText);
    container?.appendChild(accordionItem);
  });
}
