import anime from 'animejs/lib/anime.es.js';


export const startAnimations = () => {
    animateForm();
    animateNavbar();
    animateTitle();
    blur();
};

const animateForm = () => {
    anime({
        targets: '#contactForm',
        translateX: [-250, 0]
    });
};

const animateNavbar = () => {
    anime({
        targets: 'nav',
        translateX: [400, 0]
    });
};

const animateTitle = () => {
    anime({
        targets: '#title',
        translateX: [-200, 0]
    });
};

const blur = () => {
    var targetElm = document.querySelector('#contactForm');
    anime({
        duration: 1000,
        direction: 'alternate',
        update: function(anim){
          targetElm.style.filter = 'blur(' + 20 * anim.progress / 100 + 'px)'
        }
      });
}