import "./styles.css";
import BowlImage from 'images/bowl.jpg';
import { header } from './modules/header';
import { lunchGenerator } from './modules/lunch-generator'; 
import { footer } from './modules/footer';


class App {
    constructor() {
        this.renderTemplate();
        lunchGenerator.randomizeLunches();
        lunchGenerator.showResult();
    }

    renderTemplate() {
        const template = `
            <div id="header-wrapper">
                <header>
                    <h1>${header.pageTitle}</h1>
                    <button id="button">${header.randomizerButton}</button>
                </header>
            </div>
            <main>
                <figure>
                    <img id="lunch-image" src="${BowlImage}">
                    <figcaption id="description">What's for Lunch?</figcaption>
                </figure>
            </main>
            <footer>
                <h2>${footer.footerText}</h2>
            </footer>
            `;

            document.body.innerHTML = template;
    }
}

new App;