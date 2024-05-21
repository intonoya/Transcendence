import MenuButton from "./MenuButton.js";

export default class MainMenu {
    constructor() {
        if (isEnglish) {
            this.buttons = [
                new MenuButton("New Game"),
                new MenuButton("Settings"),
            ];
            document.title = 'Main';
        }
        else if (isRussian) {
            this.buttons = [
                new MenuButton("Новая игра"),
                new MenuButton("Настройки"),
            ];
            document.title = 'Главная';
        }
        else if (isUkrainian) {
            this.buttons = [
                new MenuButton("Нова гра"),
                new MenuButton("Налаштування"),
            ];
            document.title = 'Головна';
        }
    }

    async getHtml() {

        const buttonsHtml = await Promise.all(this.buttons.map(button => button.getHtml()));
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