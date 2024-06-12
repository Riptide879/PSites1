document.addEventListener("DOMContentLoaded", function () {
  const html = `
    <style>
      .savvy-cookie-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(10, 10, 10, 0.3);
        z-index: 99999999999;
      }
      
      .savvy-cookie-banner {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        position: fixed;
        bottom: 0;
        left: 0;    
        width: 100%;  
        background: #88287D;
        color: #FFF;
        padding: 0.5rem;
        font-family: "Fira Sans", sans-serif
      }
      
      .savvy-cookie-banner a {
        color: #FFF;
        text-decoration: underline;
        cursor: pointer;
      }
      
      .savvy-cookie-banner button {
        background: transparent;
        cursor: pointer;
        color: #FFF;
        border: 1px solid #FFF;
        padding: 0.75rem 1.25rem;
        border-radius: 4px;
        height: auto;
        line-height: 1rem;
        font-family: "Fira Sans", sans-serif
      }
    </style>
    <div class="savvy-cookie-overlay">
      <div class="savvy-cookie-banner">
        <p>We try to provide services of the highest possible quality, therefore our website uses cookie technology. You can control the permission of individual types of cookies below. <br />More information can be found in our <a href="https://profirmy.benefit-plus.cz/zasady-ochrany-osobnich-udaju/"> privacy policy</a>.</p>
        <button id="savvy-cookie-reject-button">Allow Necessary Cookies</button>
        <button id="savvy-cookie-accept-button">Allow All Cookies</button>
      </div>
    </div>
`;

  document.body.insertAdjacentHTML("beforebegin", html);
  document
    .querySelector("#savvy-cookie-accept-button")
    .addEventListener("click", function () {
      document.querySelector(".savvy-cookie-overlay").remove();
    });
  document
    .querySelector("#savvy-cookie-reject-button")
    .addEventListener("click", function () {
      document.querySelector(".savvy-cookie-overlay").remove();
    });
});
