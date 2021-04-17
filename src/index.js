import "./styles.css";
import BowlImage from './images/bowl.jpg';
import { header } from './modules/header';
import { lunchgenerator } from './modules/lunch-generator'; 
import { footer } from './modules/footer';
const button = template.getElementById("button");


class App {
    constructor() {
        this.renderTemplate();
        lunchgenerator.randomizeLunches(); 
    }

    // button.addEventListener("click", randomizeLunches);

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
                    <figcaption id="description">What's for Lunch?<figcaption>
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