import { register } from "../izolda.js";
import { getCookie, deleteCookie } from "../utils.js";
import { navigateTo } from "../main.js";

//function logout() {
//	deleteCookie('username');
//	deleteCookie('X-Access-Token');
//	deleteCookie('X-Refresh-Token');
//	navigateTo('/');
//}

//function toLogin() {
//	window.location.href = "api/v1/auth/intra/login/";
//}

function authButton() {
	const auth_button = document.getElementById("auth_button");
	
	if (getCookie('username') != null) {
		if (isEnglish) {
			auth_button.innerHTML = `
					<button class="btn btn-primary me-3">${getCookie('username')}</a>
					<button id="button_auth" class="btn btn-primary button_auth me-3"">Logout</button>
				`.trim();
		}
		else if (isRussian) {
			auth_button.innerHTML = `
					<button class="btn btn-primary me-3">${getCookie('username')}</a>
					<button id="button_auth" class="btn btn-primary button_auth me-3"">Выйти</button>
				`.trim();
		}
		else if (isUkrainian) {
			auth_button.innerHTML = `
					<button class="btn btn-primary me-3">${getCookie('username')}</a>
					<button id="button_auth" class="btn btn-primary button_auth me-3"">Вийти</button>
				`.trim();
		}
	} else {
		if (isEnglish) {
			auth_button.innerHTML = `
					<button id="button_auth" class="btn btn-primary me-3 button_auth"">Sign In</button>
				`.trim();
		}
		else if (isRussian) {
			auth_button.innerHTML = `
					<button id="button_auth" class="btn btn-primary me-3 button_auth"">Войти</button>
				`.trim();
		}
		else if (isUkrainian) {
			auth_button.innerHTML = `
					<button id="button_auth" class="btn btn-primary me-3 button_auth"">Увійти</button>
				`.trim();
		}
	};
}


export default class {
	constructor() {
		register(authButton, true);
	}

	async getHtml() {
		return `
		<div class="row-1 nav_bar d-flex justify-content-between">
		<div class="padding-2 mt-2">
			<a href="http://10.19.219.108:8080">
				<img src="/src/static/text_logo.png" alt="Ping Pong Logo" class="logo_image ms-3" style="width: 135px; height: auto; margin-top: -10px;">
			</a>
		</div>
		<div id="auth_button" class="auth_button padding-2"></div>      
	</div>
	
		`;
	}	
}

export { authButton };
