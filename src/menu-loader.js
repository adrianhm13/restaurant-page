

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
    

    //If divBackground (Home) it's defined, anim and delete html of home
    const divBackground = document.getElementById('background-main');
    if (divBackground != null){
        closeHome(divBackground);
    }else{
        closeContact();
    }
    setTimeout(createMenu, 750)
}


function createMenu(){
    const generalContent = document.getElementById('content');
    const divContentMenu = document.createElement('div');
    const gridMenu = document.createElement('div');
    
    
    
    divContentMenu.id = "contentMenu";
    divContentMenu.classList.add('content-menu');
    gridMenu.classList.add('menu-grid');

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

function deleteHome(divBackground){
    console.log('Menu changed')
    divBackground.remove();
}

function fillMenu(){
    const menu = [{
        dish: "hola",
        description: "Adios"
    },
    {
        dish: "hola2",
        description: "Adios2"
    },
    {
        dish: "hola3",
        description: "Adios3"
    },
    {
        dish: "hola4",
        description: "Adios4"
    },
    {
        dish: "hola5",
        description: "Adios5"
    }]
    return menu;
}