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
        background: #FFFFFF;
        color: #0070d2;
        padding: 0.5rem;
        font-family: "Open Sans";
        font-size: 13px;
      }
      
      .savvy-cookie-banner a {
        
        text-decoration: underline;
        cursor: pointer;
      }
      
      .savvy-cookie-banner button {
        background: #00729C;
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
        <p>WWe use cookies to personalize content, customize ads and analyze traffic on our site. <a href="https://www.cengagegroup.com/privacy/" aria-label="More information about your privacy">Privacy policy</a> </p>
        <button id="savvy-cookie-accept-button">Accept All</button>
        <button id="savvy-cookie-necessary-button">Accept Necessary Cookies</button>
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
    .querySelector("#savvy-cookie-necessary-button")
    .addEventListener("click", function () {
      document.querySelector(".savvy-cookie-overlay").remove();
    });
});
