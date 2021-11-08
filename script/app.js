const close = document.querySelector(".fa-times");
const open = document.querySelector(".fa-bars");
const popup = document.querySelector(".popup");
const links = document.querySelectorAll(".popup a");

const closePopup = () => {
  popup.style.display = "none";
};

const openPopup = () => {
  popup.style.display = "block";
};

close.addEventListener("click", closePopup);
open.addEventListener("click", openPopup);
links.forEach((link) => link.addEventListener("click", closePopup));
