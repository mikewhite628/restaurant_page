import {renderNav} from './nav.js';
import {renderHome} from './home.js';
import {renderMenu} from './menu.js';
import {renderAbout} from './about.js';


const content = document.getElementById('content');

function createHtmlElement(type, id, arrayClasses, content){
    const element = document.createElement(type);
    if (id) element.id = id;
    if (arrayClasses)
    arrayClasses.forEach((myClass) => element.classList.add(myClass));

    if (content) element.innerText = content;

    return element;
}

function home(){
    content.innerHTML = '';
    renderNav()
    renderHome()
}

function menu(){
    content.innerHTML = '';
    renderNav();
    renderMenu();
}

function about(){
    content.innerHTML = '';
    renderNav();
    renderAbout();
}

home()

document.addEventListener('click', (e) =>{
    const target = e.target.innerText

    if (target === 'Home') home();
    if (target === 'Menu') menu();
    if (target === 'About') about();
});

export {createHtmlElement, content}






