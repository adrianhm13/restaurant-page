

export default function menuLoader(){

    //Move to the right the divs from the previous page

    //If divBackground (Home) it's not defined, then starts anim from contact page
    const divBackground = document.getElementById('background-main');
    const presentationText = document.getElementById('presentation-text');
    const reserveButton = document.getElementById('button-reserve');
    const backgroundHome = document.getElementById('background-home')

    backgroundHome.classList.add('anim-pic-move-right');
    presentationText.classList.add('anim-move-right');
    reserveButton.classList.add('anim-move-right');

    setTimeout(changeToMenu, 500, divBackground);

    const varulla = document.getElementById('lalal');

    if(varulla == null){
        console.log("We couldnt find anything")
    }
    //Set anim to come from the left  the new divs
}

function changeToMenu(divBackground){
    console.log('Menu changed')
    divBackground.innerHTML = ""
}
