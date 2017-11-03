function changeColor(e) {
	const myNav = document.getElementById('mynav');
	const aboutDiv = document.getElementById('about');
	const aboutPosition = aboutDiv.getBoundingClientRect();
	if(document.body.scrollTop > (aboutPosition.top + 300) || document.documentElement.scrollTop > (aboutPosition.top + 300 )) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("navbar");
	} else {
        myNav.classList.add("navbar");
        myNav.classList.remove("nav-colored");
	}
}

window.addEventListener('scroll', changeColor);