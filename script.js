const checkbox = document.querySelector("input");
const navigationItems = document.querySelector(".navigation-items");

checkbox.addEventListener("click", () => {
    if (checkbox.checked) {
        navigationItems.style = "transform: none";
    } else {
        navigationItems.style = "transform: translate(-100%, 0);";
    }
});

const mediaQuery = window.matchMedia("(max-width:768px)");

navigationItems.addEventListener("click", () => {
    if (mediaQuery.matches) {
        navigationItems.style = "transform: translate(-100%, 0)";
        checkbox.checked = false;
    }
});

function changeCss() {
    var navElement = document.querySelector("header");
    this.scrollY < 1
        ? (navElement.style.backgroundColor = "")
        : (navElement.style.backgroundColor = "#1d1727");
}

window.addEventListener("scroll", changeCss, false);
