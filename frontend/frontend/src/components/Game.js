import Navbar from './Navbar.js';
import MenuButton from './MenuButton.js';

export default class Game {
    constructor() {
        if (isEnglish) {
            document.title = 'Game';
            this.button = new MenuButton("Exit", "StopGame()");
            this.navbar = new Navbar();
        }
        else if (isRussian) {
            document.title = 'Игра';
            this.button = new MenuButton("Выход", "StopGame()");
            this.navbar = new Navbar();
        }
        else if (isUkrainian) {
            document.title = 'Гра';
            this.button = new MenuButton("Вихід", "StopGame()");
            this.navbar = new Navbar();
        }
    }

    async getHtml() {

        const loader = document.querySelector('.loader');
        loader.classList.remove('hidden');
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 400);

        const tournamentInputs = window.location.href.substring(window.location.href.lastIndexOf('/')) === '/tournament' ? await this.tournamentInputs() : '';
        const buttonHtml = await this.button.getHtml();
        const button = buttonHtml.replace(/back/g, "");

        if (isEnglish) {
            return `
                ${await this.navbar.getHtml()}
                <div class="game">
                    <div class="container">
                        <div class="row d-flex justify-content-center align-items-center rounded-5 p-5" style="background: #1f162e;">
                            <div class="col-9 col-xxl-7 col-lg-8 col-md-7">
                                <div id='gameCanvas'></div>
                            </div>
                            <div class="col-lg-3 col-md-5">
                                <div id='scoreboard' class="rounded-top-5">
                                    <div id='playerNames' class="text_game fs-1 pt-4"></div>
                                    <div id='scores' class="text_game" style="color: #71357b!important">0-0</div>
                                    <div id='winnerBoard' class="text_game fs-2">First to score 7 wins !</div>
                                </div>
                                ${tournamentInputs}
                                <div class="row">
                                    <div class="d-flex justify-content-center">
                                        ${button}
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
            ${await this.navbar.getHtml()}
            <div class="game">
                <div class="container">
                    <div class="row d-flex justify-content-center align-items-center rounded-5 p-5" style="background: #1f162e;">
                        <div class="col-9 col-xxl-7 col-lg-8 col-md-7">
                            <div id='gameCanvas'></div>
                        </div>
                        <div class="col-lg-3 col-md-5">
                            <div id='scoreboard' class="rounded-top-5">
                                <div id='playerNames' class="text_game fs-1 pt-4"></div>
                                <div id='scores' class="text_game" style="color: #71357b!important">0-0</div>
                                <div id='winnerBoard' class="text_game fs-2">До 7 побед !</div>
                            </div>
                            ${tournamentInputs}
                            <div class="row">
                                <div class="d-flex justify-content-center">
                                    ${button}
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
            ${await this.navbar.getHtml()}
            <div class="game">
                <div class="container">
                    <div class="row d-flex justify-content-center align-items-center rounded-5 p-5" style="background: #1f162e;">
                        <div class="col-9 col-xxl-7 col-lg-8 col-md-7">
                            <div id='gameCanvas'></div>
                        </div>
                        <div class="col-lg-3 col-md-5">
                            <div id='scoreboard' class="rounded-top-5">
                                <div id='playerNames' class="text_game fs-1 pt-4"></div>
                                <div id='scores' class="text_game" style="color: #71357b!important">0-0</div>
                                <div id='winnerBoard' class="text_game fs-2">До 7 перемог !</div>
                            </div>
                            ${tournamentInputs}
                            <div class="row">
                                <div class="d-flex justify-content-center">
                                    ${button}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        }
    }

    async tournamentInputs() {
        if (isEnglish) {
            return `
                <div class="row my-5" id='tournament-field'>
                    <div id='tournament'>
                        <div class="row">
                            <label for="userInput" class="p-0 form-label">
                                <h1 id="tournament-text" class="tournament-text">Enter number of players:</h1>
                            </label>
                        </div>
                        <div class="row">
                            <input type="text" class="tournament-text-input form-control" id="userInput" placeholder="Enter text here" aria-describedby="emailHelp">
                            <button class="tournament-text-button mt-2"onclick="ReadInput()">Submit</button>
                        </div>
                    </div>
                </div>
            `;
        } else if (isRussian) {
            return `
            <div class="row my-5" id='tournament-field'>
                <div id='tournament'>
                    <div class="row">
                        <label for="userInput" class="p-0 form-label">
                            <h1 id="tournament-text" class="tournament-text">Введите количество игроков:</h1>
                        </label>
                    </div>
                    <div class="row">
                        <input type="text" class="tournament-text-input form-control" id="userInput" placeholder="Введите текст здесь" aria-describedby="emailHelp">
                        <button class="tournament-text-button mt-2"onclick="ReadInput()">Отправить</button>
                    </div>
                </div>
            </div>
        `;
        } else if (isUkrainian) {
            return `
            <div class="row my-5" id='tournament-field'>
                <div id='tournament'>
                    <div class="row">
                        <label for="userInput" class="p-0 form-label">
                            <h1 id="tournament-text" class="tournament-text">Введіть кількість гравців:</h1>
                        </label>
                    </div>
                    <div class="row">
                        <input type="text" class="tournament-text-input form-control" id="userInput" placeholder="Введіть текст тут" aria-describedby="emailHelp">
                        <button class="tournament-text-button mt-2"onclick="ReadInput()">Надіслати</button>
                    </div>
                </div>
            </div>
        `;
        }
    }
}
