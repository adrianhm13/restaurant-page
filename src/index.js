import './style.css';
import pageLoader from './page-loader.js';
import menuLoader from './menu-loader.js';
import homeLoader from './home-loader.js';
import contactLoader from './contact-loader.js';

pageLoader();
homeLoader();

const navMenu = document.getElementById('Menu');
navMenu.addEventListener('click', menuLoader)

const navHome = document.getElementById('Home');
navHome.addEventListener('click', homeLoader);

const navContact = document.getElementById('Contact');
navContact.addEventListener('click', contactLoader);

