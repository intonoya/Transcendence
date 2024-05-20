import MenuButton from "./MenuButton.js";

export default class Language {
    constructor() {
        if (isEnglish) {
            document.title = 'Language';
            this.buttons = [
                new MenuButton("Main Menu"),
            ];
        }
        else if (isRussian) {
            document.title = 'Язык';
            this.buttons = [
                new MenuButton("Главное меню"),
            ];
        }
        else if (isUkrainian) {
            document.title = 'Мова';
            this.buttons = [
                new MenuButton("Головне меню"),
            ];
        }
    }

    async getHtml() {
        const buttonsHtml = await Promise.all(this.buttons.map(button => button.getHtml()));
        const settingEnglish = `
            <div class="d-flex justify-content-end">
                <div class="back">
                    <button id="buttonEnglish" class="button_setting_english mx-5" onclick="setEnglish()">English</button>
                </div>
            </div>
        `;

        const settingRussian = `
            <div class="d-flex justify-content-end">
                <div class="back">
                    <button id="buttonRussian" class="button_setting_russian mx-5" onclick="setRussian()">Русский</button>
                </div>
            </div>
        `;

        const settingUkrainian = `
            <div class="d-flex justify-content-end">
                <div class="back">
                    <button id="buttonUkrainian" class="button_setting_ukrainian mx-5" onclick="setUkrainian()">Українська</button>
                </div>
            </div>
        `;

        const menuHtml = buttonsHtml.map(html => `
            <div class="d-flex justify-content-end">
                ${html}
            </div>
        `).join('');

        const settingsHtml = settingEnglish + settingRussian + settingUkrainian + menuHtml;

        return settingsHtml;
    }

}