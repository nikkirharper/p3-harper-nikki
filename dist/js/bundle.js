(()=>{"use strict";const e=new class{constructor(e,n){this.pageTitle=e,this.randomizerButton=n}}("Hungry?","View Today's Lunch Specials >");new class{constructor(){this.renderTemplate()}renderTemplate(){const n=`\n            <header>\n                <h1>${e.pageTitle}</h1>\n                <button>${e.randomizerButton}</button>\n            </header>\n            `;document.body.innerHTML=n}}})();