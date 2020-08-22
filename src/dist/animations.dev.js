"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startAnimations = void 0;

var _animeEs = _interopRequireDefault(require("animejs/lib/anime.es.js"));

var _core = _interopRequireDefault(require("typewriter-effect/dist/core"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var startAnimations = function startAnimations() {
  animateForm();
  animateNavbar();
  animateTitle();
  blur();
  typewriterAnimation();
  animateArrow();
};

exports.startAnimations = startAnimations;

var animateForm = function animateForm() {
  (0, _animeEs.default)({
    targets: "#contactForm",
    translateX: [-250, 0]
  });
};

var animateNavbar = function animateNavbar() {
  (0, _animeEs.default)({
    targets: "nav",
    translateX: [400, 0]
  });
};

var animateTitle = function animateTitle() {
  (0, _animeEs.default)({
    targets: "#title",
    translateX: [-200, 0]
  });
};

var blur = function blur() {
  var targetElm = document.querySelector("#contactForm");
  (0, _animeEs.default)({
    duration: 1000,
    direction: "alternate",
    update: function update(anim) {
      targetElm.style.filter = "blur(" + 20 * anim.progress / 100 + "px)";
    }
  });
};

var animateArrow = function animateArrow() {
  (0, _animeEs.default)({
    targets: "#arrow-down",
    translateY: 20,
    loop: true,
    easing: "easeInOutSine",
    duration: 1500
  });
};

var typewriterAnimation = function typewriterAnimation() {
  var typewriter = new _core.default("#typewriter", {
    delay: 75
  });
  typewriter.pauseFor(2500).typeString("La mejor solución para la programación").pauseFor(300).deleteChars(15).typeString("<b>el desarrollo</b> de tu solución digital.").pauseFor(1000).start();
};