import backgroundImage from './background-main.jpg'
import contactLoader from './contact-loader.js';

export default function homeLoader(){
    const menuButton = document.getElementById('Menu');
    const homeButton = document.getElementById('Home');
    const contactButton = document.getElementById('Contact');

    menuButton.style.pointerEvents = "auto";
    homeButton.style.pointerEvents = "none";
    contactButton.style.pointerEvents = "auto";

    menuButton.classList.remove('navbar-links-selected');
    homeButton.classList.add('navbar-links-selected')
    contactButton.classList.remove('navbar-links-selected');

    const layoutMenu = document.getElementById('contentMenu');
    const layoutContact = document.getElementById('contentContact')
    console.log(layoutMenu);
    if(layoutMenu != null){
        closeMenu();
        setTimeout(deletePrevLayout, 550, layoutMenu, layoutContact);
    }else if(layoutContact != null){
        closeContact();
        setTimeout(deletePrevLayout, 550, layoutMenu, layoutContact);
    }
    setTimeout(createHome, 500);
}

function closeMenu(){
    const grid = document.getElementById('grid');
    grid.classList.toggle('anim-to-center-from-left');
    grid.classList.toggle('anim-to-right');
}

function closeContact(){
    const contactForm = document.getElementById('contact-form')
    contactForm.classList.toggle('anim-to-center-from-left');
    contactForm.classList.toggle('anim-to-right');
}

function deletePrevLayout(layoutMenu, layoutContact){
    layoutMenu != null ? layoutMenu.remove() : console.log('No menu layout');
    layoutContact != null ? layoutContact.remove() : console.log('No contact layout')
}

function createHome(){
    const contentDiv = document.getElementById('content')

    const divBackground = document.createElement('div');
    divBackground.classList.add('container-background');
    divBackground.id = "background-main"

    const divBackgroundMain = document.createElement('div');
    divBackgroundMain.classList.add('background-main');
    divBackgroundMain.id = "background-home";

    const imageBackground = document.createElement('img');
    imageBackground.src = backgroundImage;
    imageBackground.id = "background-image";
    imageBackground.classList.add('anim-fadein');


    const divBackgroundShadow = document.createElement('div');
    divBackgroundShadow.classList.add('background-main-shadow');

    const divBackgroundText = document.createElement('div');
    divBackgroundText.id = "presentation-text";
    divBackgroundText.classList.add('background-text');
    divBackgroundText.classList.add('anim-from-right');

    const titleBackground = document.createElement('h1');
    titleBackground.innerText = "Welcome to Selanne";

    const subTitleBackground = document.createElement('h3');
    subTitleBackground.innerText = "Enjoy our views with a tasty and delicious dinner";

    const buttonReserve = document.createElement('button');
    buttonReserve.classList.add('#reserve-button');
    buttonReserve.classList.add('anim-from-right');
    buttonReserve.id = "button-reserve";
    buttonReserve.textContent = "Make a reservation with us";

    contentDiv.appendChild(divBackground);

    divBackground.appendChild(divBackgroundMain);

    divBackgroundMain.appendChild(imageBackground);
    divBackgroundMain.appendChild(divBackgroundShadow);

    divBackgroundShadow.appendChild(divBackgroundText);
    
    divBackgroundText.appendChild(titleBackground);
    divBackgroundText.appendChild(subTitleBackground);
    divBackgroundShadow.appendChild(buttonReserve);

    buttonReserve.addEventListener('click', contactLoader);
}

function toggleMoveAnim(divBackgroundText, buttonReserve){
    divBackgroundText.classList.toggle('anim-from-right');
    buttonReserve.classList.toggle('anim-from-right');

}