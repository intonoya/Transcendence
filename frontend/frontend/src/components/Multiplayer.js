import MenuButton from "./MenuButton.js";

export default class Multiplayer {
    constructor() {
        if (isEnglish) {
            this.buttons = [
                new MenuButton("Two Players", "StartGameVsPlayer()"),
                new MenuButton("Online"),
                new MenuButton("Main Menu"),
            ];
        }
        else if (isRussian) {
            this.buttons = [
                new MenuButton("Два игрока", "StartGameVsPlayer()"),
                new MenuButton("Онлайн"),
                new MenuButton("Главное меню"),
            ];
        }
        else if (isUkrainian) {
            this.buttons = [
                new MenuButton("Два гравці", "StartGameVsPlayer()"),
                new MenuButton("Онлайн"),
                new MenuButton("Головне меню"),
            ];
        }
        document.title = 'Multiplayer';
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