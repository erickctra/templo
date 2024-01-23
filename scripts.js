// menu button
const menu = document.getElementById("menu");
// menu popup
const menuContent = document.getElementById("menu-content");
// options submenus
const submenus = document.getElementsByClassName("has-items");
const anchors = document.getElementsByClassName("menuAnchor");



// state of menu / open or closed
let menuFocused = false;

// close menu if click outside of the popup
function hideMenus(event) {
	if (!menuContent.contains(event.target) && !menu.contains(event.target)) {
		menuFocused = false;
		return document
			.getElementById("menu-content")
			.classList.remove("popup-animation");
	}

	if (menu.contains(event.target) && !menuFocused) {
		menuFocused = false;

		return document
			.getElementById("menu-content")
			.classList.remove("popup-animation");
	}
	for (const elem of submenus) {
		if (!elem.contains(event.target)) {
			elem.classList.remove("active");
			elem.children[1].classList.remove("showSubMenu");
		}
	}
}

// hide when click on anchors
for (const anchor of anchors) {
  anchor.addEventListener("click", (event) => {
    menuFocused = false;
    return document
    .getElementById("menu-content")
    .classList.remove("popup-animation");
  })
}


menu.addEventListener("click", () => {
	if (menuFocused) {
		menuFocused = false;
		return document
			.getElementById("menu-content")
			.classList.remove("popup-animation");
	}
	if (!menuFocused) {
		menuFocused = true;
		return document
			.getElementById("menu-content")
			.classList.add("popup-animation");
	}
});

for (const elem of submenus) {
	elem.addEventListener("click", () => {
		elem.classList.add("active");
		elem.children[1].classList.add("showSubMenu");
	});
}


const observerStart = document.getElementById("show-header");
const observerHide = document.getElementById("inicio");
const observer = new IntersectionObserver((entries) => {

	for (const entry of entries) {
		const element = entry;
		if (element.isIntersecting) {

			return document.getElementById("header").classList.remove('fromBottom')
		}

		console.log(element.isIntersecting);
	 return document.getElementById("header").classList.add('fromBottom')
	// entry.target.classList.add('fromLeft')
		
	}
})

observer.observe(inicio)