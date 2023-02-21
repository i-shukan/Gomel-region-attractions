window.onload = function() {
    document.querySelector('.preloader').classList.add('loaded_hiding');
    window.setTimeout(function() {
        document.querySelector('.preloader').classList.add('loaded');
        document.querySelector('.preloader').classList.remove('loaded_hiding');
        document.body.classList.add('loaded');
    }, 500)
}

let menu = document.querySelector('.header__burger');

menu.onclick = function() {
    let elems = document.querySelectorAll('.header__burger, .header__menu');
    for (let elem of elems) {
        elem.classList.toggle('active')
    }
}

let banners = document.querySelectorAll('.map__banner');

for(let banner of banners) {
    banner.onclick = function() {
        banner.classList.toggle('active')
    }
}