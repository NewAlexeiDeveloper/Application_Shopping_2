const menuMobile = document.getElementById('menu-mobile');
const overlay = document.getElementById('overlay');
const showMenu = document.getElementById('show-menu');
const hideMenu = document.getElementById('hide-menu');

const classList = {
    visible: 'visible',
    hidden: 'hidden',
    block: 'block',
    none: 'none'
}

const toggleElement = (element, classAdd, classRemove) => {
    element.classList.add(classAdd);
    element.classList.remove(classRemove);
}

showMenu.addEventListener('click', () =>{
    toggleElement(overlay, classList.visible, classList.hidden);
    toggleElement(menuMobile, classList.visible, classList.hidden);
    toggleElement(hideMenu, classList.block, classList.none);
    toggleElement(showMenu, classList.none, classList.block);
}) 

hideMenu.addEventListener('click', () => {
    toggleElement(overlay, classList.hidden, classList.visible);
    toggleElement(menuMobile, classList.hidden, classList.visible);
    toggleElement(hideMenu, classList.none, classList.block);
    toggleElement(showMenu, classList.block, classList.none);
}) 