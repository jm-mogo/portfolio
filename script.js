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

// ===== START: VIDEO FACADE LOGIC =====
document.addEventListener("DOMContentLoaded", function () {
	const facades = document.querySelectorAll(".video-facade");

	facades.forEach((facade) => {
		facade.addEventListener("click", () => {
			const videoId = facade.getAttribute("data-video-id");
			const iframe = document.createElement("iframe");

			iframe.setAttribute(
				"src",
				`https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1&mute=1`
			);
			iframe.setAttribute("title", "YouTube video player");
			iframe.setAttribute("frameborder", "0");
			iframe.setAttribute(
				"allow",
				"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			);
			iframe.setAttribute("allowfullscreen", "");

			// Replace the facade div with the iframe
			facade.parentNode.replaceChild(iframe, facade);
		});
	});
});
// ===== END: VIDEO FACADE LOGIC =====
