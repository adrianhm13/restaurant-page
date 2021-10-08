import './style.css';
import pageLoader from './page-loader.js';
import menuLoader from './menu-loader';


function holaMundo() {
  console.log("Im working");
}

holaMundo()
pageLoader()

const navMenu = document.getElementById('Menu');

navMenu.addEventListener('click', menuLoader)