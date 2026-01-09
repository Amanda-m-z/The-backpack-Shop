/* Newsletter form */

/* Container */
const container = document.createElement("div");
container.className = "newsletterContainer";

/* H3 Newsletter*/
const titleNewsletter = document.createElement("h3");
titleNewsletter.innerHTML = "Få 10% rabatt på din första beställning";

/* p info newsletter*/
const descriptionNewsletter = document.createElement("p");
descriptionNewsletter.innerHTML =
  "Prenumerera på vårt nyhetsbrev för att få 10% rabatt på ditt första köp och få dem senaste nyheterna och erbjudanden från Pac Bac";
/* Form */
const form = document.createElement("form");
form.id = "newsletter-form";

/* email input */
const emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.placeholder = "Din e-postadress";
emailInput.required = true;

/* Button */
const button = document.createElement("button");
button.type = "submit";
button.innerHTML = "->";
button.setAttribute("aria-label", "Prenumerera på nyhetsbrev");

/* message emailadress*/
const emailAdress = document.createElement("p");
emailAdress.id = "email";

/* Append */
form.appendChild(emailInput);
form.appendChild(button);

container.appendChild(titleNewsletter);
container.appendChild(descriptionNewsletter);
container.appendChild(form);

/* container.appendChild(emailAdress); */
document.app.appendChild(container);

// Submit handler
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  emailAdress.textContent = "";
});
