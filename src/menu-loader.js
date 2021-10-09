

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
    



    //Move to the right the divs from the previous page

    //If divBackground (Home) it's defined, delete html of home
    const divBackground = document.getElementById('background-main');
    if (divBackground != null){
        closeHome(divBackground);
    }else{
        closeContact();
    }
    
}



function closeHome(divBackground) {
    const presentationText = document.getElementById('presentation-text');
    const reserveButton = document.getElementById('button-reserve');
    const backgroundHome = document.getElementById('background-home')

    backgroundHome.classList.add('anim-pic-fade-out');
    presentationText.classList.add('anim-move-left');
    reserveButton.classList.add('anim-move-left');
    
    setTimeout(changeToMenu, 750, divBackground);
}

function changeToMenu(divBackground){
    console.log('Menu changed')
    divBackground.remove();
}