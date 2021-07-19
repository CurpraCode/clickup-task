const navMenu = () => {
  const menu = document.querySelector(".menu");
  const nav = document.querySelector(".nav");

  //action on the menu
  menu.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });
};

navMenu();