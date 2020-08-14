import "./styles/style.scss";
import { startAnimations } from './animations';

startAnimations();
const form = document.querySelector("#contactForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.querySelector("#email");
  const message = document.querySelector("#message");
});

