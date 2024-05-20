import MenuButton from "./MenuButton.js";

export default class NewGameMenu {
    constructor() {
        if (isEnglish) {
            this.buttons = [
                new MenuButton("Game Mode"),
                new MenuButton("Tournament"),
                new MenuButton("Main Menu"),
            ];
            document.title = 'New Game';
        }
        else if (isRussian) {
            this.buttons = [
                new MenuButton("Режим игры"),
                new MenuButton("Турнир"),
                new MenuButton("Главное меню"),
            ];
            document.title = 'Новая игра';
        }
        else if (isUkrainian) {
            this.buttons = [
                new MenuButton("Режим гри"),
                new MenuButton("Турнір"),
                new MenuButton("Головне меню"),
            ];
            document.title = 'Нова гра';
        }
    }

    async getHtml() {
        const buttonsHtml = await Promise.all(this.buttons.map(async (button) => await button.getHtml()));
        const menuHtml = buttonsHtml.map(html => `
            <div class="row">
                <div class="d-flex justify-content-end">
                    ${html}
                </div>
            </div>
        `).join('');

        return menuHtml;
    }
}



