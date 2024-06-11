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
        background: #fff;
        color: #212529;
        padding: 0.5rem;
        font-family: "Poppins", sans-serif;
        font-size: 16px;
      }
      
      .savvy-cookie-banner a {
        text-decoration: underline;
        cursor: pointer;
      }
      
      .savvy-cookie-banner button {
        background: transparent;
        cursor: pointer;
        color: #fff;
        background: #30C56E;
        border: 1px solid #fff;
        // padding: 0.75rem 1.25rem;
        border-radius: 4px;
        height: auto;
        line-height: 1rem;
      }
    </style>
    <div class="savvy-cookie-overlay">
      <div class="savvy-cookie-banner">
        <p>This website stores cookies on your computer to collect information about how you interact with our website and allow us to remember you. We use this information in order to improve and customize your browsing experience and for analytics and metrics about our visitors both on this website and other media. To find out more about the cookies we use, see our <a href="https://blackkite.com/privacy-policy/">Privacy Policy</a>.</p>
        <button id="savvy-cookie-accept-button" class="btn btn-success btn-lg w-50">Accept</button>
        <button id="savvy-cookie-necessary-button" class="btn btn-success btn-lg w-50">Only Necessary Cookies</button>
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
