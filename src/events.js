export const startEvents = () => {
  navbarShowEvent();
  navbarHideEvent();
  formEvent();
  hamburguerMenuEvent();
};

const navbarShowEvent = () => {
  const body = document.querySelector("body");
  body.addEventListener("scroll", (e) => {
    e.preventDefault();
    const stop = body.scrollTop;
    const div1 = document.querySelector("#seccionAliados");
    const navElements = document.querySelectorAll("nav li");
    if (stop > div1.offsetTop - 50) {
      navElements.forEach((elem) => elem.classList.add("text-black"));
      hamburguerBtn.classList.add("text-black");
    } else {
      navElements.forEach((elem) => elem.classList.remove("text-black"));
      hamburguerBtn.classList.remove("text-black");
    }
  });
};

const formEvent = () => {
  const form = document.querySelector("#contactForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.querySelector("#email");
    const message = document.querySelector("#message");
  });
};

const hamburguerMenuEvent = () => {
  const hamburguerBtn = document.querySelector("#hamburguerBtn");
  const navMobile = document.querySelector("#navMobile");
  const navMobileUl = document.querySelector("#navMobile ul");
  hamburguerBtn.addEventListener("click", () => {
    // Add bg to nav
    navMobile.classList.toggle("bg-black");
    navMobile.classList.toggle("bg-opacity-75");
    navMobile.classList.toggle("animate__animated");
    navMobile.classList.toggle("animate__bounceInDown");
    navMobileUl.classList.toggle("hidden");
  });
};

const navbarHideEvent = () => {
  const navMobileOption = document.querySelectorAll("#navMobile ul li a");
  const navMobileUl = document.querySelector("#navMobile ul");
  const navMobile = document.querySelector("#navMobile");
  navMobileOption.forEach((item) =>
    item.addEventListener("click", () => {
      navMobile.classList.toggle("bg-black");
      navMobile.classList.toggle("bg-opacity-75");
      navMobile.classList.toggle("animate__animated");
      navMobile.classList.toggle("animate__bounceInDown");
      navMobileUl.classList.toggle("hidden");
    })
  );
};
