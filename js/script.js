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
