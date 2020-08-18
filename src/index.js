import "./styles/style.scss";
import { startAnimations } from './animations';

startAnimations();
const form = document.querySelector("#contactForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.querySelector("#email");
  const message = document.querySelector("#message");
});


const body = document.querySelector('body');

body.addEventListener("scroll", (e) => {
  e.preventDefault();
  const stop = body.scrollTop;
  const div1 = document.querySelector('#seccionAliados');
  const navElements = document.querySelectorAll('nav li');
  if(stop > div1.offsetTop -  50){
    navElements.forEach(elem => elem.classList.add('text-black'));
  } else {
    navElements.forEach(elem => elem.classList.remove('text-black'));
  }
});
