import anime from 'animejs/lib/anime.es.js';


export const startAnimations = () => {
    animateForm();
};

const animateForm = () => {
    anime({
        targets: '#contactForm',
        translateX: [-250, 0]
    });
};

