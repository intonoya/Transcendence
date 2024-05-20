import { register } from "../izolda.js";
import MenuButton from "./MenuButton.js";

export default class Settings {
    constructor() {
        if (isEnglish) {
            document.title = 'Settings';
            this.buttons = [
                new MenuButton("Sound"),
                new MenuButton("Customize"),
                new MenuButton("Language"),
                new MenuButton("Main Menu"),
            ];
        }
        else if (isRussian) {
            document.title = 'Настройки';
            this.buttons = [
                new MenuButton("Звук"),
                new MenuButton("Настроить"),
                new MenuButton("Язык"),
                new MenuButton("Главное меню"),
            ];
        }
        else if (isUkrainian) {
            document.title = 'Налаштування';
            this.buttons = [
                new MenuButton("Звук"),
                new MenuButton("Налаштувати"),
                new MenuButton("Мова"),
                new MenuButton("Головне меню"),
            ];
        }
        // register(changeColor, false);
    }

    async getHtml() {
        const buttonsHtml = await Promise.all(this.buttons.map(button => button.getHtml()));

        const menuHtml = buttonsHtml.map(html => `
            <div class="d-flex justify-content-end">
                ${html}
            </div>
        `).join('');

        const settingsHtml = menuHtml;

        return settingsHtml;
    }  

}