import backgroundImage from './background-main.jpg'

export default function pageLoader() {
    const contentDiv = document.getElementById('content')

    const divSocialNetwork = document.createElement('div');
    divSocialNetwork.classList.add('social-network-bar');

    const navBar = document.createElement('div');
    navBar.classList.add('navbar');

    const navBarTitle = document.createElement('div');
    navBarTitle.classList.add('navbar-title');

    const navBarTitleText = document.createElement('h1');
    navBarTitleText.innerText = "Selanne";

    const navBarSubTitleText = document.createElement('h4');
    navBarSubTitleText.innerText = "The Restaurant"

    const navBarLinks = document.createElement('div');
    navBarLinks.classList.add('navbar-links');

    const divBackground = document.createElement('div');
    divBackground.classList.add('container-background');

    const divBackgroundMain = document.createElement('div');
    divBackgroundMain.classList.add('background-main');

    const imageBackground = document.createElement('img');
    imageBackground.src = backgroundImage

    const divBackgroundShadow = document.createElement('div');
    divBackgroundShadow.classList.add('background-main-shadow');

    const divBackgroundText = document.createElement('div');
    divBackgroundText.classList.add('background-text')

    const titleBackground = document.createElement('h1');
    titleBackground.innerText = "Welcome to Selanne";

    const subTitleBackground = document.createElement('h3');
    subTitleBackground.innerText = "Enjoy our views with a tasty and delicious dinner";

    const buttonReserve = document.createElement('button');
    buttonReserve.classList.add('reserve-button');
    buttonReserve.textContent = "Make a reservation with us"

    contentDiv.appendChild(divSocialNetwork);
    contentDiv.appendChild(navBar);
    contentDiv.appendChild(divBackground);

    navBar.appendChild(navBarTitle);
    navBar.appendChild(navBarLinks);

    navBarTitle.appendChild(navBarTitleText);
    navBarTitle.appendChild(navBarSubTitleText);
    divBackground.appendChild(divBackgroundMain);

    divBackgroundMain.appendChild(imageBackground);
    divBackgroundMain.appendChild(divBackgroundShadow);

    divBackgroundShadow.appendChild(divBackgroundText);
    
    divBackgroundText.appendChild(titleBackground);
    divBackgroundText.appendChild(subTitleBackground);
    divBackgroundShadow.appendChild(buttonReserve);
    console.log(buttonReserve);
}

/* <div id="social-network" class="social-network-bar"></div>
<div id="navbar" class="navbar">
</div>
<div class="container-background">
    <div id="background-main" class="background-main">
        <img src="./d0247323bd12e63596e3.jpg">
        <div class="background-main-shadow">
            <div class="background-text">
                <h1>Welcome to Selanne</h1>
                <h3>If you want to make a reservation, please click the link below</h3>
            </div>
        </div>
    </div>
</div> */