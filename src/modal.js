import bootbox from "bootbox";

export const initModal = () => {
  const btnPlan1 = document.querySelector("#btn-plan-1");
  btnPlan1.addEventListener("click", () => openModal(1));
};

const openModal = (plan) => {
  bootbox.alert("Hello");
};
