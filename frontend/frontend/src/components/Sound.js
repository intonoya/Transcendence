import MenuButton from "./MenuButton.js";

export default class Music {
    constructor() {
        if (isEnglish) {
            document.title = 'Sound';
            this.buttons = [
                new MenuButton("Mute"),
                new MenuButton("Main Menu"),
            ];
        }
        else if (isRussian) {
            document.title = 'Звук';
            this.buttons = [
                new MenuButton("Выключить звук"),
                new MenuButton("Главное меню"),
            ];
        }
        else if (isUkrainian) {
            document.title = 'Звук';
            this.buttons = [
                new MenuButton("Вимкнути звук"),
                new MenuButton("Головне меню"),
            ];
        }
    }

    async getHtml() {
        const buttonsHtml = await Promise.all(this.buttons.map(button => button.getHtml()));
        const htmlEnglish = ` 
            <div class="d-flex justify-content-end mb-2">
                <div class="back">
                    <p class="button_volume mx-5">Volume</p>
                </div>
            </div>
            <div class="row ms-5 me-1 mb-5">
                <div class="volume_box">
                    <div class="volume">

                    </div>
                </div>
            </div>
        `;
        const htmlRussian = `
            <div class="d-flex justify-content-end mb-2">
                <div class="back">
                    <p class="button_volume mx-5">Громкость</p>
                </div>
            </div>
            <div class="row ms-5 me-1 mb-5">
                <div class="volume_box">
                    <div class="volume">

                    </div>
                </div>
            </div>
        `;
        const htmlUkrainian = `
            <div class="d-flex justify-content-end mb-2">
                <div class="back">
                    <p class="button_volume mx-5">Гучність</p>
                </div>
            </div>
            <div class="row ms-5 me-1 mb-5">
                <div class="volume_box
                ">
                    <div class="volume">

                    </div>
                </div>
            </div>
        `;
        const html = isEnglish ? htmlEnglish : isRussian ? htmlRussian : htmlUkrainian;
        const menuHtml = buttonsHtml.map(html => `
            <div class="d-flex justify-content-end">
                ${html}
            </div>
        `).join('');
        const settingsHtml = html + menuHtml;
        return settingsHtml;
    }
}