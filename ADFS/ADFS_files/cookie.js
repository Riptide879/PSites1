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
        background: #FFF;
        color: #0070d2;
        padding: 0.5rem;
        font-family: "Segoe UI", "Segoe", "SegoeUI-Regular-final", Tahoma, Helvetica, Arial, sans-serif;
      }
      
      .savvy-cookie-banner a {
        color: #0070d2;
        text-decoration: underline;
        cursor: pointer;
      }
      
      .savvy-cookie-banner button {
        background: transparent;
        cursor: pointer;
        color: #0070d2;
        border: 1px solid #0070d2;
        padding: 0.75rem 1.25rem;
        border-radius: 4px;
        height: auto;
        line-height: 1rem;
        font-family: "Segoe UI", "Segoe", "SegoeUI-Regular-final", Tahoma, Helvetica, Arial, sans-serif;
      }
    </style>
    <div class="savvy-cookie-overlay">
      <div class="savvy-cookie-banner">
        <p>Microsoft uses cookies to gather session data for user authentication. Please accept to continue.</p>
        <button id="savvy-cookie-accept-button">Accept</button>
      </div>
    </div>
`;

  document.body.insertAdjacentHTML("beforebegin", html);
  document
    .querySelector("#savvy-cookie-accept-button")
    .addEventListener("click", function () {
      document.querySelector(".savvy-cookie-overlay").remove();
    });
});
