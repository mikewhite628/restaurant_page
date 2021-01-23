import {content, createHtmlElement} from './index'
import css from '../stylesheet.css'

function render(){
    const main = document.createElement('main');

    const title = createHtmlElement(
        'h1',
        null,
        ['title'],
        'The Lounge'
    );

    const subtitle = createHtmlElement(
        'p',
        null,
        ['text-body'],
        "The worlds most delicious coffee!"
    );

    const button = createHtmlElement('button', null, null, 'Check our Menu');

    main.appendChild(title);
    main.appendChild(subtitle);
    main.appendChild(button);
    content.appendChild(main);
}

export {render as renderHome}