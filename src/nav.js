import {content, createHtmlElement} from './index.js';

function render() {
    const navItems = ['Home','Menu', 'About'];
    const ul = document.createElement('ul');
    const styleBar = createHtmlElement('div', null, ['nav-spacer'], null)

    

    navItems.forEach((item) => 
        ul.appendChild(createHtmlElement('li', null, null, item))
        );
            

    const nav = document.createElement('nav');
    nav.appendChild(ul);



    content.appendChild(nav);
    nav.appendChild(styleBar)

}



export {render as renderNav};


