import './style.css';
import pageLoader from './page-loader.js';
import menuLoader from './menu-loader.js';
import homeLoader from './home-loader.js';

function holaMundo() {
  console.log("Im working");
}

holaMundo()
pageLoader()

const navMenu = document.getElementById('Menu');
navMenu.addEventListener('click', menuLoader)

const navHome = document.getElementById('Home');
navHome.addEventListener('click', homeLoader);