import {content, createHtmlElement} from './index.js'

const menu = [
    {
        name: 'Vespur',
        description: 'An Arabica bean brewed black coffee with a shot of espresso for the creative mind within you',
        price: '$4.99'
    },
    {
        name: 'The Vespur Special',
        description: 'A double brewed Robusta bean black coffee with a double shot of espressor guarenteed to keep you going',
        price: '$8.99'
    },
    {
        name: 'The Lounger',
        description: 'An Aribica bean brewed coffee with steamed milk and chocolate perfect for a dreary day',
        price: '$3.99'
    }
];

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

    menu.forEach((item) => {
        const div = createHtmlElement('div', null, ['menu-item'], null);

        const name = createHtmlElement('h2', null, ['name'], item.name);
        const description = createHtmlElement(
            'p',
            null,
            ['menu-text'],
            item.description
        );
        
        const price = createHtmlElement('h2', null,  ['name'], item.price);

        div.appendChild(name);
        div.appendChild(description);
        div.appendChild(price);

        main.appendChild(div);
    })

    content.appendChild(main);
}

export {render as renderMenu};