import MenuButton from "./MenuButton.js";

export default class MainMenu {
    constructor() {
        if (isEnglish) {
            this.buttons = [
                new MenuButton("New Game"),
                //new MenuButton("About Us"),
                new MenuButton("Settings"),
                new MenuButton("Chat"),
            ];
            document.title = 'Main';
        }
        else if (isRussian) {
            this.buttons = [
                new MenuButton("Новая игра"),
                //new MenuButton("О нас"),
                new MenuButton("Настройки"),
                new MenuButton("Чат"),
            ];
            document.title = 'Главная';
        }
        else if (isUkrainian) {
            this.buttons = [
                new MenuButton("Нова гра"),
                //new MenuButton("Про нас"),
                new MenuButton("Налаштування"),
                new MenuButton("Чат"),
            ];
            document.title = 'Головна';
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