import {content, createHtmlElement} from './index.js'

function render() {
    const main = document.createElement('main');
    main.classList.add('main');

    const title = createHtmlElement(
        'h1',
        null,
        ['title'],
        'The Lounge'
    );

    main.appendChild(title)

    const aboutContent = "We're the best around! No ones ever going to let you down! Because were the best AROUND! But for real though we have good coffee!";

    const p = createHtmlElement('p', null, ['menu-item'], aboutContent)

    main.appendChild(title)
    main.appendChild(p)

    content.appendChild(main)

}

export {render as renderAbout}