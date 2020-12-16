buildMenu = () => {
    const content = document.getElementById('content');
    const navbar = document.createElement('ul');
    const navHome = document.createElement('li');
    const navMenu = document.createElement('li');
    const navAbout = document.createElement('li');
    const navSpacer = document.createElement('div');
    const header = document.createElement('h1');
    const menuBody = document.createElement('div')
    
    navbar.classList.add('navbar');
    navHome.classList.add('nav-item');
    navMenu.classList.add('nav-item');
    navAbout.classList.add('nav-item');
    navSpacer.classList.add('nav-spacer');
    menuBody.classList.add('text-body')

    content.appendChild(navbar); 
    content.appendChild(navSpacer);

    navHome.appendChild(document.createTextNode('Home'));
    navbar.appendChild(navHome);
    
    //active
    navMenu.appendChild(document.createTextNode('Menu'));
    navbar.appendChild(navMenu);
    navHome.style.background = '#ff9223'
    navHome.style.color = 'black'

    navAbout.appendChild(document.createTextNode('About'));
    navbar.appendChild(navAbout);

    content.appendChild(header);
    header.innerHTML = 'The Lounge';

    content.appendChild(menuBody)
    menuBody.innerHTML = "Menu Here!"

 
}