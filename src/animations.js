import anime from "animejs/lib/anime.es.js";
import Typewriter from "typewriter-effect/dist/core";

export const startAnimations = () => {
  animateForm();
  animateNavbar();
  animateTitle();
  blur();
  typewriterAnimation();
  animateArrow();
};

const animateForm = () => {
  anime({
    targets: "#contactForm",
    translateX: [-250, 0],
  });
};

const animateNavbar = () => {
  anime({
    targets: "nav",
    translateX: [400, 0],
  });
};

const animateTitle = () => {
  anime({
    targets: "#title",
    translateX: [-200, 0],
  });
};

const blur = () => {
  var targetElm = document.querySelector("#contactForm");
  anime({
    duration: 1000,
    direction: "alternate",
    update: function (anim) {
      targetElm.style.filter = "blur(" + (20 * anim.progress) / 100 + "px)";
    },
  });
};

const animateArrow = () => {
  anime({
    targets: "#arrow-down",
    translateY: 20,
    loop: true,
    easing: "easeInOutSine",
    duration: 1500
  });
};

const typewriterAnimation = () => {
  const typewriter = new Typewriter("#typewriter", {
    delay: 75,
  });
  typewriter
    .pauseFor(2500)
    .typeString("La mejor solución para la programación")
    .pauseFor(300)
    .deleteChars(15)
    .typeString("<b>el desarrollo</b> de tu solución digital.")
    .pauseFor(1000)
    .start();
};
