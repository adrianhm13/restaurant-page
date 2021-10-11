import backgroundImage from './background-main.jpg'

export default function pageLoader() {
    const contentDiv = document.getElementById('content')

    const navBar = document.createElement('div');
    navBar.classList.add('navbar');

    const navBarTitle = document.createElement('div');
    navBarTitle.classList.add('navbar-title');

    const navBarTitleText = document.createElement('h1');
    navBarTitleText.innerText = "Selanne";

    const navBarSubTitleText = document.createElement('h4');
    navBarSubTitleText.innerText = "The Restaurant"

    const navBarLinks = document.createElement('menu');
    navBarLinks.classList.add('navbar-links');
  
    const navBarLinkHome = document.createElement('li');
    navBarLinkHome.innerText = "Home";
    navBarLinkHome.id = "Home";

    const navBarLinkMenu = document.createElement('li');
    navBarLinkMenu.innerText = "Menu";
    navBarLinkMenu.id = "Menu";

    const navBarLinkContact = document.createElement('li');
    navBarLinkContact.innerText = "Contact";
    navBarLinkContact.id = "Contact";

    contentDiv.appendChild(navBar);

    navBar.appendChild(navBarTitle);
    navBar.appendChild(navBarLinks);

    navBarTitle.appendChild(navBarTitleText);
    navBarTitle.appendChild(navBarSubTitleText);

    navBarLinks.appendChild(navBarLinkHome);
    navBarLinks.appendChild(navBarLinkMenu);
    navBarLinks.appendChild(navBarLinkContact);

}
