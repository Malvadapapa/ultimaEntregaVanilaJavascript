//FORMULARIO DE REGISTRO//
const form = document.getElementById("form");
const passwordInput = document.getElementById("password"); 
const paswordcheckinput = document.getElementById("repeatPassword");
const termscheckbox = document.getElementById("termsAndConditions");

const emailInput = document.getElementById("email");
const usernameInput = document.getElementById("myname");
const nameImput = document.getElementById("realName");
const burgerContainer = document.getElementById("burgerBlurSection")
/*MENU HAMBURGUESA*/
const hamMenu = document.getElementById("burgerMenu");



 //TOGGLE DE MENU HAMBURGUESA//


const toogleBurger = ()=> {
    hamMenu.classList.toggle("active");
    burgerContainer.classList.toggle("burgerActive");
}

const closeOnClick = (e) => {
    if (e.target.classList.contains("burgerActive")) {
    hamMenu.classList.toggle("active");
    burgerContainer.classList.toggle("burgerActive");
}else{
    return;
}

  };



  const init = () => {
    hamMenu.addEventListener("click", toogleBurger);
   burgerContainer.addEventListener("click", closeOnClick);
  };
  
  init();