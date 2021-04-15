import "./styles.css";
import { header } from './modules/header'; 
import { footer } from './modules/footer'; 


class App {
    constructor() {
        this.renderTemplate();  
    }

    renderTemplate() {
        const template = `
            <div id="header-wrapper">
                <header>
                    <h1>${header.pageTitle}</h1>
                    <button>${header.randomizerButton}</button>
                </header>
            </div>
            <main>
                <figure>
                    <img src="../images/bowl.jpg">
                    <figcaption>What's for Lunch?<figcaption>
                </figure>
            </main>
            <footer>
                <h2>${footer.footerText}</2>
            </footer>
            `;

            document.body.innerHTML = template;
    }
}

new App;