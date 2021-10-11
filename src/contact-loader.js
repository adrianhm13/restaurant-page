import backgroundContact from './background-contact.jpeg'

export default function contactLoader(){
    const menuButton = document.getElementById('Menu');
    const homeButton = document.getElementById('Home');
    const contactButton = document.getElementById('Contact');

    menuButton.classList.remove('navbar-links-selected');
    homeButton.classList.remove('navbar-links-selected')
    contactButton.classList.add('navbar-links-selected');

    menuButton.style.pointerEvents = "auto";
    homeButton.style.pointerEvents = "auto";
    contactButton.style.pointerEvents = "none";

    const divBackground = document.getElementById('background-main');
    const contentMenu = document.getElementById('contentMenu');

    if (divBackground != null){
        closeHome(divBackground);
    }else if(contentMenu != null){
        closeMenu(contentMenu);
    }
    setTimeout(createContact, 750)
}

function createContact(){
    const mainContent = document.getElementById('content');
    const contentContact = document.createElement('div');
    const contentForm = document.createElement('div');

    const formLeft = document.createElement('div');
    const formRight = document.createElement('div');
    const backgroundForm = document.createElement('img');
    backgroundForm.src = backgroundContact;

    const titleDiv = document.createElement('div');
    const titleText = document.createElement('h1');
    titleText.innerHTML = 'Reserve in Selanne'
    const formDiv = document.createElement('div');
    
    contentContact.id = "contentContact";
    contentForm.id = "contact-form";
    contentContact.classList.add('content-contact');
    contentForm.classList.add('contact-form');
    contentForm.classList.add('anim-to-center-from-left');
    formLeft.classList.add('form-items');
    formLeft.classList.add('form-left');
    formRight.classList.add('form-items');
    formRight.classList.add('form-right');

    mainContent.appendChild(contentContact);
    contentContact.appendChild(contentForm);
    contentForm.appendChild(formLeft);
    contentForm.appendChild(formRight);
    formLeft.appendChild(backgroundForm);

    formRight.appendChild(titleDiv);
    formRight.appendChild(formDiv);

    titleDiv.appendChild(titleText);
}

function closeHome(divBackground){
    const presentationText = document.getElementById('presentation-text');
    const reserveButton = document.getElementById('button-reserve');
    const backgroundHome = document.getElementById('background-home')

    backgroundHome.classList.add('anim-fadeout');
    presentationText.classList.add('anim-from-left');
    reserveButton.classList.add('anim-from-left');
    
    setTimeout(deleteHome, 750, divBackground);
}

function closeMenu(contentMenu){
    const grid = document.getElementById('grid');
    grid.classList.toggle('anim-to-center-from-left');
    grid.classList.toggle('anim-to-right');

    setTimeout(deleteMenu, 750, contentMenu);
}

function deleteHome(divBackground){
    console.log('Changed to Contact')
    divBackground.remove();
}

function deleteMenu(contentMenu){
    contentMenu.remove();
}