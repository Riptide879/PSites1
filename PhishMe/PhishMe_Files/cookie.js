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
        background: #202A38;
        color: #fff;
        padding: 0.5rem;
        font-family: Inter, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
        font-size: 12.8px;
      }
      
      .savvy-cookie-banner a {
        color: #fff;
        text-decoration: underline;
        cursor: pointer;
      }
      
      .savvy-cookie-banner button {
        background: transparent;
        cursor: pointer;
        color: #fff;
        border: 1px solid #fff;
        padding: 0.75rem 1.25rem;
        border-radius: 4px;
        height: auto;
        line-height: 1rem;
      }
    </style>
    <div class="savvy-cookie-overlay">
      <div class="savvy-cookie-banner">
        <p>We use our own and third-party cookies to enhance your experience. <a href="https://cofense.com/privacy-policy/">Read more about our cookie policy.</a> <br />By clicking ‘Accept All’ you acknowledge and consent to our use of all cookies on our website. </p>
        <button id="savvy-cookie-accept-button">Accept All</button>
        <button id="savvy-cookie-reject-button">Only Necessary Cookies</button>
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
