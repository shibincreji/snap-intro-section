const navTitles = document.querySelectorAll('.navlink__title');
const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const navbar = document.querySelector('.navbar__bg');

const toggleSubNavs = (navTitle, i) => {
	const subNavLink = navTitle.nextElementSibling;
	!navTitle.parentElement.classList.contains('open')
		? (subNavLink.style.maxHeight = `${subNavLink.scrollHeight + 32}px`)
		: (subNavLink.style.maxHeight = '0px');
	navTitles.forEach((_navTitle, _i) => {
		if (i !== _i) {
			const subNavLink = _navTitle.nextElementSibling;
			_navTitle.parentElement.classList.remove('open');
			if (subNavLink) subNavLink.style.maxHeight = '0px';
		}
	});
	navTitle.parentElement.classList.toggle('open');
};

navTitles.forEach((navTitle, i) => {
	navTitle.addEventListener('click', () => {
		toggleSubNavs(navTitle, i);
	});
});

hamburger.addEventListener('click', () => navbar.classList.add('open'));
close.addEventListener('click', () => navbar.classList.remove('open'));
