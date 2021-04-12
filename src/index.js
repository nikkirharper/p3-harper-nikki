import { header } from './modules/header'

class App {
    constructor() {
        this.renderTemplate();  
    }

    renderTemplate() {
        const template = `
            <header>
                <h1>${header.pageTitle}</h1>
                <button>${header.randomizerButton}</button>
            </header>
            `;

            document.body.innerHTML = template;
    }
}

new App;