//Import all the backgrounds and set it on the object
import picTo from './background-main.jpg';

export default function menuLoader(){

    const menuButton = document.getElementById('Menu');
    const homeButton = document.getElementById('Home');
    const contactButton = document.getElementById('Contact');

    menuButton.classList.add('navbar-links-selected');
    homeButton.classList.remove('navbar-links-selected')
    contactButton.classList.remove('navbar-links-selected');

    menuButton.style.pointerEvents = "none";
    homeButton.style.pointerEvents = "auto";
    contactButton.style.pointerEvents = "auto";
    

    //If divBackground (Home) it's defined, anim and delete html of home or contentContact
    const divBackground = document.getElementById('background-main');
    const contentContact = document.getElementById('contentContact');
    console.log(contentContact)
    if (divBackground != null){
        closeHome(divBackground);
    }else if(contentContact != null){
        closeContact(contentContact);
    }
    setTimeout(createMenu, 750)
}


function createMenu(){
    const generalContent = document.getElementById('content');
    const divContentMenu = document.createElement('div');
    const gridMenu = document.createElement('div');
    
    
    
    divContentMenu.id = "contentMenu";
    gridMenu.id = "grid";
    divContentMenu.classList.add('content-menu');
    gridMenu.classList.add('menu-grid');
    gridMenu.classList.add('anim-to-center-from-left')

    generalContent.appendChild(divContentMenu);
    divContentMenu.appendChild(gridMenu);
    generateGrid(gridMenu);

}

function generateGrid(gridMenu){
    const grid = gridMenu;
    const menu = fillMenu();
    console.log(menu);
    for (let i = 0; i < menu.length; i++){

        let position = i + 1;

        const cellGridDish = document.createElement('div');
        const cellGridDesc = document.createElement('div');
        const cellGridPic = document.createElement('img');
        cellGridPic.src = menu[i].pic;
        cellGridPic.classList.add('menu-grid-pic');
       

        const cellTextDish = document.createElement('h1');
        const cellTextDesc = document.createElement('h3');

        cellTextDish.innerHTML = menu[i].dish;
        cellTextDesc.innerHTML = menu[i].description;

        cellGridDish.classList.add('menu-grid-cells');
        cellGridDesc.classList.add('menu-grid-cells');

        cellGridDish.id = position;
        cellGridDesc.id = "desc-" + position;

        grid.appendChild(cellGridDish);
        grid.appendChild(cellGridDesc);

        cellGridDish.appendChild(cellGridPic);
        cellGridDesc.appendChild(cellTextDish);
        cellGridDesc.appendChild(cellTextDesc);
    }
}
function closeHome(divBackground) {
    const presentationText = document.getElementById('presentation-text');
    const reserveButton = document.getElementById('button-reserve');
    const backgroundHome = document.getElementById('background-home')

    backgroundHome.classList.add('anim-fadeout');
    presentationText.classList.add('anim-from-left');
    reserveButton.classList.add('anim-from-left');
    
    setTimeout(deleteHome, 750, divBackground);
}
function closeContact(contactContent){
    const contactForm = document.getElementById('contact-form')
    contactForm.classList.toggle('anim-to-center-from-left');
    contactForm.classList.toggle('anim-to-right');

    setTimeout(deleteContact, 750, contactContent);
}


function deleteHome(divBackground){
    console.log('Menu changed')
    divBackground.remove();
}

function deleteContact(contentContact){
    console.log('dele')
    contentContact.remove();
}
function fillMenu(){
    const menu = [{
        pic: new URL('https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/159276.jpg?resize=600:*&output-format=auto&output-quality=auto'),
        dish: "Blossoming Onion Lotus",
        description: "Adios"
    },
    {
        pic: new URL('https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/164176.jpg?resize=600:*&output-format=auto&output-quality=auto'),
        dish: "Molten Churro Bombs",
        description: "Adios2"
    },
    {
        pic: new URL('https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/150087.jpg?resize=600:*&output-format=auto&output-quality=auto'),
        dish: "100-Layer Lasagna",
        description: "Adios3"
    },
    {
        pic: new URL('https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/180907.jpg?resize=600:*&output-format=auto&output-quality=auto'),
        dish: "Halloween Party Punch",
        description: "Adios4"
    },
    {
        pic: new URL('https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/124151.jpg?resize=600:*&output-format=auto&output-quality=auto'),
        dish: "8 Desserts in 1 Pan",
        description: "Adios5"
    }]
    return menu;
}