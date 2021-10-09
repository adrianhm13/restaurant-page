import backgroundImage from './background-main.jpg'

export default function homeLoader(){
    const menuButton = document.getElementById('Menu');
    const homeButton = document.getElementById('Home');
    const contactButton = document.getElementById('Contact');

    menuButton.classList.remove('navbar-links-selected');
    homeButton.classList.add('navbar-links-selected')
    contactButton.classList.remove('navbar-links-selected');
    console.log("Going to home page")

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
    imageBackground.classList.add('anim');


    const divBackgroundShadow = document.createElement('div');
    divBackgroundShadow.classList.add('background-main-shadow');

    const divBackgroundText = document.createElement('div');
    divBackgroundText.id = "presentation-text";
    divBackgroundText.classList.add('background-text');

    const titleBackground = document.createElement('h1');
    titleBackground.innerText = "Welcome to Selanne";

    const subTitleBackground = document.createElement('h3');
    subTitleBackground.innerText = "Enjoy our views with a tasty and delicious dinner";

    const buttonReserve = document.createElement('button');
    buttonReserve.classList.add('reserve-button');
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


    divBackgroundText.classList.add('anim-from-right');
    buttonReserve.classList.add('anim-from-right');

    menuButton.style.pointerEvents = "auto";
    homeButton.style.pointerEvents = "none";
    contactButton.style.pointerEvents = "auto";
}