import "./styles.css";
import BowlImage from './images/bowl.jpg';
import { header } from './modules/header';
import LunchGenerator, { lunch, lunchGenerator } from './modules/lunch-generator'; 
import { footer } from './modules/footer';


class App {
    constructor() {
        this.renderTemplate();
        lunchGenerator.randomizeLunches();
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
                    <img src=${BowlImage}>
                    <figcaption id="placeholder">What's for Lunch?</figcaption>
                    <p id="description">${lunchGenerator.showDescription}</p>
                </figure>
            </main>
            <footer>
                <h2>${footer.footerText}</h2>
            </footer>
            `;

            document.body.innerHTML = template;
            document.getElementById("button").addEventListener("click", lunchGenerator.randomizeLunches)
    }
}

new App;