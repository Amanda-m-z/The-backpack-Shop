export const loadFooter = () => {
  const footer = document.getElementById("footer");
  const footerContainer = document.createElement("div");
  footerContainer.className = "footer-inner-content";

  footerContainer.innerHTML = `
 
    <h3 class="logo">Pac Bac</h3>

    <div class="columns">
      <div class="columns-content">
        <h3>Kundservice</h3>
        <ul>
          <li><a href="#">Kontakta oss</a></li>
          <li><a href="#">Frågor och svar</a></li>
          <li><a href="#">Leveransvilkor</a></li>
          <li><a href="#">Returer</a></li>
          <li><a href="#">Betalningsvilkor</a></li>
          <li><a href="#">Care & Repair</a></li>
          <li><a href="#">Presentkort</a></li>
        </ul>
      </div>

      <div class="columns-content">
        <h3>Om Pac Bac</h3>
        <ul>
          <li><a href="#">Om oss</a></li>
          <li><a href="#">Hållbarhet</a></li>
          <li><a href="#">Våra material</a></li>
          <li><a href="#">Jobba hos oss</a></li>
        </ul>
      </div>

      <div class="columns-content">
        <h3>Rättslig information</h3>
        <ul>
          <li><a href="#">Villkor</a></li>
          <li><a href="#">Företagsinformation</a></li>
          <li><a href="#">Dataskyddspolicy</a></li>
          <li><a href="#">Tillgänglighetsredogörelse</a></li>
        </ul>
      </div>

     <div class="footer-extra-content">
      <div class="social-icons">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-tiktok"></i>
            <i class="fa-brands fa-linkedin"></i>
          </div>
          
        
          <div class="payments">
            <i class="fa-brands fa-cc-visa"></i>
            <i class="fa-brands fa-cc-mastercard"></i>
            <i class="fa-brands fa-cc-klarna"></i>
            <i class="fa-brands fa-cc-paypal"></i>
            <i class="fa-brands fa-cc-apple-pay"></i>
          </div>        
      </div>  `;

  footer?.appendChild(footerContainer);
};
