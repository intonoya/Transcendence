import MenuButton from "./MenuButton.js";

export default class Customize {
    constructor() {
        if (isEnglish) {
            document.title = 'Customize';
            this.buttons = [
                new MenuButton("Main Menu"),
            ];
        }
        else if (isRussian) {
            document.title = 'Настройки';
            this.buttons = [
                new MenuButton("Главное меню"),
            ];
        }
        else if (isUkrainian) {
            document.title = 'Налаштування';
            this.buttons = [
                new MenuButton("Головне меню"),
            ];
        }
    }

    async getHtml() {
        const buttonsHtml = await Promise.all(this.buttons.map(button => button.getHtml()));
        const settingFieldEnglish = `
            <div class="d-flex justify-content-end">
                <div class="back">
                    <button id="colorButton" class="button_setting mx-5" onclick="setColor()">Color</button>
                </div>
            </div>
        `;

        const settingFieldRussian = `
        <div class="d-flex justify-content-end">
            <div class="back">
                <button id="colorButton" class="button_setting mx-5" onclick="setColor()">Цвет</button>
            </div>
        </div>
    `;

    const settingFieldUkrainian = `
    <div class="d-flex justify-content-end">
        <div class="back">
            <button id="colorButton" class="button_setting mx-5" onclick="setColor()">Колір</button>
        </div>
    </div>
`;

        const setting3DEnglish = `
            <div class="d-flex justify-content-end">
                <div class="back">
                    <button id="button3D" class="button_setting3d mx-5" onclick="set3D()">3D Field</button>
                </div>
            </div>
        `;

        const setting3DRussian = `
            <div class="d-flex justify-content-end">
                <div class="back">
                    <button id="button3D" class="button_setting3d mx-5" onclick="set3D()">3D Поле</button>
                </div>
            </div>
        `;

        const setting3DUkrainian = `
            <div class="d-flex justify-content-end">
                <div class="back">
                    <button id="button3D" class="button_setting3d mx-5" onclick="set3D()">3D Поле</button>
                </div>
            </div>
        `;

        const superHitEnglish = `
            <div class="d-flex justify-content-end">
                <div class="back">
                    <button id="buttonHit" class="button_setting_hit mx-5" onclick="setSkillActive()">Super Hit</button>
                </div>
            </div>
        `;

        const superHitRussian = `
            <div class="d-flex justify-content-end">
                <div class="back">
                    <button id="buttonHit" class="button_setting_hit mx-5" onclick="setSkillActive()">Супер удар</button>
                </div>
            </div>
        `;

        const superHitUkrainian = `
            <div class="d-flex justify-content-end">
                <div class="back">
                    <button id="buttonHit" class="button_setting_hit mx-5" onclick="setSkillActive()">Супер удар</button>
                </div>
            </div>
        `;

        const settingFieldHtml = isEnglish ? settingFieldEnglish : isRussian ? settingFieldRussian : settingFieldUkrainian;
        const superHitHtml = isEnglish ? superHitEnglish : isRussian ? superHitRussian : superHitUkrainian;
        const setting3Dhtml = isEnglish ? setting3DEnglish : isRussian ? setting3DRussian : setting3DUkrainian;
        const menuHtml = buttonsHtml.map(html => `
            <div class="d-flex justify-content-end">
                ${html}
            </div>
        `).join('');
        const settingsHtml = settingFieldHtml + setting3Dhtml + superHitHtml + menuHtml;
        return settingsHtml;
    }
}
