import { register } from "./izolda.js";

// A Function to set a Cookies //

function setCookie(name, value, seconds) {
	let expires = new Date(new Date().getTime() + seconds * 1000).toUTCString();
	document.cookie = name + "=" + escape(value) + "; expires=" + expires + "; path=/";
}

// A Function to get Cookies //

function getCookie(name) {
	let items = document.cookie.split(";");
	for (let i = 0; i < items.length; i++) {
		if (items[i].trim().startsWith(name + "=")) {
			return unescape(items[i].trim().substring(name.length + 1));
		}
	}
}

function deleteCookie(name) {
	document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

register(getCookie);
register(setCookie);
register(deleteCookie);

export { setCookie, getCookie, deleteCookie };