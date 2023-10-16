const checkbox = document.querySelector("input");
const navigationItems = document.querySelector(".navigation-items");

checkbox.addEventListener("click", () => {
    if (checkbox.checked) {
        navigationItems.style = "transform: none";
    } else {
        navigationItems.style = "transform: translate(-100%, 0);";
    }
});
