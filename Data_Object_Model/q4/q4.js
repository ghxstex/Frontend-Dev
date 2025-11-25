const themeButtons = document.querySelectorAll("[data-theme-btn]");
const bodyElement = document.body;

themeButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
        const themeName = btn.getAttribute("data-theme-btn");

        
        bodyElement.setAttribute("class", "theme-" + themeName);

        
        bodyElement.setAttribute("data-theme", themeName);
    });
});
