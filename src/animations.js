import anime from "animejs/lib/anime.es.js";
import Typewriter from "typewriter-effect/dist/core";
import "particles.js/particles";
import particles from "./assets/particles.json";
const particlesJS = window.particlesJS;

export const startAnimations = () => {
  animateForm();
  animateNavbar();
  animateTitle();
  blur();
  typewriterAnimation();
  animateArrow();
  startParticles();
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
    duration: 1500,
  });
};

const typewriterAnimation = () => {
  const typewriter = new Typewriter("#typewriter", {
    delay: 75,
  });
  typewriter
    .pauseFor(2500)
    .typeString("La mejor opción para la programación")
    .pauseFor(300)
    .deleteChars(15)
    .typeString("<b>el desarrollo</b> de tu solución digital.")
    .pauseFor(1000)
    .start();
};

const startParticles = () => {
  particlesJS(
    "particles-js",
    {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 700
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    },
    function () {
      console.log("callback - particles.js config loaded");
    }
  );
};
