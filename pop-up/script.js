const openModalBtnElement = document.querySelector("#openModal");
const modalEl = document.querySelector(".modal");
const modalContentEl = document.querySelector(".modal__content");

console.log(modalContentEl);

openModalBtnElement.addEventListener("click", () => {
  modalEl.classList.add("open");
});

modalContentEl.addEventListener("click", () =>
  modalEl.classList.remove("open")
);
