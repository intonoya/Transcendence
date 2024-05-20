import MenuButton from "./MenuButton.js";

export default class MainMenu {
    constructor() {
        if (isEnglish) {
            this.buttons = [
                new MenuButton("Single Game", "StartGameVsBot()"),
                new MenuButton("Multiplayer"),
                new MenuButton("Main Menu"),
            ];
            document.title = 'Game Mode';
        }
        else if (isRussian) {
            this.buttons = [
                new MenuButton("Одиночная игра", "StartGameVsBot()"),
                new MenuButton("Мультиплеер"),
                new MenuButton("Главное меню"),
            ];
            document.title = 'Режим игры';
        }
        else if (isUkrainian) {
            this.buttons = [
                new MenuButton("Одиночна гра", "StartGameVsBot()"),
                new MenuButton("Мультиплеєр"),
                new MenuButton("Головне меню"),
            ];
            document.title = 'Режим гри';
        }
    }

    async getHtml() {

        /* 
            Promise.all - метод, который принимает массив промисов и возвращает промис, который 
            выполняется тогда, когда выполняются все промисы из массива
            создаем массив buttonsHtml, который содержит HTML-коды всех кнопок
        */

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