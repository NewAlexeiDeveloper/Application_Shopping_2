const menuMobile = document.getElementById('menu-hamburger'),
    overlay = document.getElementById('overlay');


const show = el => {
    return function(){
        el.classList.add('visible');
        el.classList.remove('hidden');
    }
}

const hide = el => {
    return function(){
        el.classList.add('hidden');
        el.classList.remove('visible');
    }
}
// show mobile overlay
document.querySelector('#toggle-mobile').addEventListener('click', show(overlay))
document.querySelector('#toggle-mobile').addEventListener('click', show(menuMobile))

// hide mobile overlay
document.querySelector('#hide-menu').addEventListener('click', hide(overlay))
document.querySelector('#hide-menu').addEventListener('click', hide(menuMobile))