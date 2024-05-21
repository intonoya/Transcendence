import Navbar from './Navbar.js';
import GlobalChat from './GlobalChat.js';
import { register } from '../izolda.js';
import { getCookie, setCookie } from '../utils.js';
import MenuButton from './MenuButton.js';

async function signIn() {
	const backend_url = "http://10.19.219.108:8000";
	let login = document.getElementById('login').value;
	let code = window.location.href.split('?code=')[1];

	if (code == null || code == '') {
		window.location.href = backend_url + '/api/v1/auth/intra/login/';
		return;
	}
	if (login == null || login == '') {
		alert('Please enter your login');
		return;
	}

	let res = await fetch(backend_url + '/api/v1/auth/intra/login/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			'login': login,
			'code': code,
		}),
	});

	if (!res.ok) {
		const text = `
		Something went wrong ${res.status}\n
		Please try again
		Error: ${await res.text()}
		`.replace(/\t+/g, '');
		console.log(text);
		alert(text);
		return;
	}

	let data = await res.json();
	if (data.access != null && data.refresh != null) {
		setCookie('X-Access-Token', data.access, data.expires);
		setCookie('X-Refresh-Token', data.refresh, data.expires);
	}

	res = await fetch(backend_url + '/api/v1/auth/intra/me/', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + getCookie('X-Access-Token'),
		},
	});

	if (!res.ok) {
		alert('Something went wrong ' + res.status);
		return;
	}

	data = await res.json();
	setCookie('username', data.username, 3600);
}

function loader_here() {
	const loader = document.querySelector('.loader');
	loader.classList.remove('hidden');
	setTimeout(() => {
		loader.classList.add('hidden');
	}, 400);
}

export { signIn };


export default class LoginPage {
    constructor() {
		if (isEnglish) document.title = 'Login';
		else if (isRussian) document.title = 'Вход';
		else if (isUkrainian) document.title = 'Вхід';

		register(getCookie);
		register(setCookie);
		register(loader_here, true);
		if (isEnglish) this.button = new MenuButton("Exit");
		else if (isRussian) this.button = new MenuButton("Выход");
		else if (isUkrainian) this.button = new MenuButton("Вихід");

    }

	async getHtml() {
		
		if (isEnglish) {
			return `
				
				${await new Navbar().getHtml()}
				<div class="table-results">
					<div class="container">
						<div class="row d-flex justify-content-center">
							<div class="col-lg-6 col-md-5 d-flex justify-content-center align-items-center">
								<div class="login p-4 rounded-4" style="background-color: #35264E; color:#71357b; letter-spacing: 3px; box-shadow: 0 0 0.25em #35264E;">
									<h1 style="font-weight: bold;">Log In</h1>
									<div>
										<input
											id="login"
											type="text"
											placeholder="Intra login"
											class="ps-2 d-block border-0 text-black border-bottom rounded-1 mt-5 form-input"
											style="width:15rem; height:40px; letter-spacing: 3px;"/>
										<button
											class="button_auth d-block btn btn-primary mt-2 mb-2 text-start"
											style="width:15rem; height: 40px; letter-spacing:3px;">Auth</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			`;
		}
		else if (isRussian) {
			return `
				
				${await new Navbar().getHtml()}
				<div class="table-results">
					<div class="container">
						<div class="row d-flex justify-content-center">
							<div class="col-lg-6 col-md-5 d-flex justify-content-center align-items-center">
								<div class="login p-4 rounded-4" style="background-color: #35264E; color:#71357b; letter-spacing: 3px; box-shadow: 0 0 0.25em #35264E;">
									<h1 style="font-weight: bold;">Вход</h1>
									<div>
										<input
											id="login"
											type="text"
											placeholder="Логин"
											class="ps-2 d-block border-0 text-black border-bottom rounded-1 mt-5 form-input"
											style="width:15rem; height:40px; letter-spacing: 3px;"/>
										<button
											class="button_auth d-block btn btn-primary mt-2 mb-2 text-start"
											style="width:15rem; height: 40px; letter-spacing:3px;">Авторизация</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			`;
		}
		else if (isUkrainian) {
			return `
				
				${await new Navbar().getHtml()}
				<div class="table-results">
					<div class="container">
						<div class="row d-flex justify-content-center">
							<div class="col-lg-6 col-md-5 d-flex justify-content-center align-items-center">
								<div class="login p-4 rounded-4" style="background-color: #35264E; color:#71357b; letter-spacing: 3px; box-shadow: 0 0 0.25em #35264E;">
									<h1 style="font-weight: bold;">Вхід</h1>
									<div>
										<input
											id="login"
											type="text"
											placeholder="Логін"
											class="ps-2 d-block border-0 text-black border-bottom rounded-1 mt-5 form-input"
											style="width:15rem; height:40px; letter-spacing: 3px;"/>
										<button
											class="button_auth d-block btn btn-primary mt-2 mb-2 text-start"
											style="width:15rem; height: 40px; letter-spacing:3px;">Авторизація</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			`;
		}
	}
}