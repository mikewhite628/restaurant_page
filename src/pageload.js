buildDisplay = () => {
    const content = document.getElementById('content');
    const navSpacer = document.createElement('div');
    const header = document.createElement('h1');
    const textBody = document.createElement('div')
    
    
    navSpacer.classList.add('nav-spacer');
    textBody.classList.add('text-body')

    
   

    let nav = (() => {
        const navbar = document.createElement('ul');
        const navHome = document.createElement('li');
        const navMenu = document.createElement('li');
        const navAbout = document.createElement('li');

        navbar.classList.add('navbar');
        navHome.classList.add('nav-item');
        navHome.classList.add('home');
        navMenu.classList.add('nav-item');
        navMenu.classList.add('menu');
        navAbout.classList.add('nav-item');
        navAbout.classList.add('about');

        content.appendChild(navbar); 

        //active
        navHome.appendChild(document.createTextNode('Home'));
        navbar.appendChild(navHome);
        navHome.style.background = '#ff9223'
        navHome.style.color = 'black'
        
        navMenu.appendChild(document.createTextNode('Menu'));
        navbar.appendChild(navMenu);
    
        navAbout.appendChild(document.createTextNode('About'));
        navbar.appendChild(navAbout);
        
        return navHome
    })()

    content.appendChild(navSpacer);
    
    content.appendChild(header);
    header.innerHTML = 'The Lounge';

    content.appendChild(textBody)
    textBody.innerHTML = "The worlds most delicious coffe in town!"


}


