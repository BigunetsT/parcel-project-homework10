// create MENU
import menu from './menu.json';
import menuTemplate from './templates/menu.hbs';

const menuRef = document.querySelector('.js-menu');

const menuMurkup = createMenuMurkup(menu);

menuRef.insertAdjacentHTML('beforeend', menuMurkup);

function createMenuMurkup(menu) {
  return menu.map(menuTemplate).join('');
}

// change body Theme
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeSwitchRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

let bodyTheme = localStorage.getItem('bodyTheme');

bodyRef.classList.value = bodyTheme || Theme.LIGHT;

if (bodyTheme === Theme.DARK) {
  themeSwitchRef.checked = true;
}

themeSwitchRef.addEventListener('change', toggleTheme);

function toggleTheme() {
  let bodyCurrentTheme = bodyRef.classList.value;
  bodyNewTheme = bodyCurrentTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
  bodyRef.classList.value = bodyNewTheme;
  localStorage.setItem('bodyTheme', bodyNewTheme);
}
