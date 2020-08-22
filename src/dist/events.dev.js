"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startEvents = void 0;

var startEvents = function startEvents() {
  navbarShowEvent();
  navbarHideEvent();
  formEvent();
  hamburguerMenuEvent();
};

exports.startEvents = startEvents;

var navbarShowEvent = function navbarShowEvent() {
  var body = document.querySelector("body");
  body.addEventListener("scroll", function (e) {
    e.preventDefault();
    var stop = body.scrollTop;
    var div1 = document.querySelector("#seccionAliados");
    var navElements = document.querySelectorAll("nav li");

    if (stop > div1.offsetTop - 50) {
      navElements.forEach(function (elem) {
        return elem.classList.add("text-black");
      });
      hamburguerBtn.classList.add("text-black");
    } else {
      navElements.forEach(function (elem) {
        return elem.classList.remove("text-black");
      });
      hamburguerBtn.classList.remove("text-black");
    }
  });
};

var formEvent = function formEvent() {
  var form = document.querySelector("#contactForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var email = document.querySelector("#email");
    var message = document.querySelector("#message");
  });
};

var hamburguerMenuEvent = function hamburguerMenuEvent() {
  var hamburguerBtn = document.querySelector("#hamburguerBtn");
  var navMobile = document.querySelector("#navMobile");
  var navMobileUl = document.querySelector("#navMobile ul");
  hamburguerBtn.addEventListener("click", function () {
    // Add bg to nav
    navMobile.classList.toggle("bg-black");
    navMobile.classList.toggle("bg-opacity-75");
    navMobile.classList.toggle("animate__animated");
    navMobile.classList.toggle("animate__bounceInDown");
    navMobileUl.classList.toggle("hidden");
  });
};

var navbarHideEvent = function navbarHideEvent() {
  var navMobileOption = document.querySelectorAll("#navMobile ul li a");
  var navMobileUl = document.querySelector("#navMobile ul");
  var navMobile = document.querySelector("#navMobile");
  navMobileOption.forEach(function (item) {
    return item.addEventListener("click", function () {
      navMobile.classList.toggle("bg-black");
      navMobile.classList.toggle("bg-opacity-75");
      navMobile.classList.toggle("animate__animated");
      navMobile.classList.toggle("animate__bounceInDown");
      navMobileUl.classList.toggle("hidden");
    });
  });
};