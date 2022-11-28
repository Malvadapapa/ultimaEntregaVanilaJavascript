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
//variables de validacion del loggin 
const logginForm = document.getElementById("logginForm")
const logginUsername =document.getElementById("sesionUsername")
const logginPassword = document.getElementById("sesionPassword")
const sesionSmall = document.getElementById("sesionSmall")
const passwordSmall = document.getElementById("passwordSmall")

//variables de la logica del loggin section 
const CloseLoggInSection = document.getElementById("initSesion")
const bluredLogginSection = document.getElementById("blurLogginSection")
const logginBtnToggle = document.getElementById("session")
const burgerSesion = document.getElementById("burgerSesion")

//variables del renderizado de noticias
const printPoliticaCards = document.getElementById("containerNewsPolitica")
const printCiudadanosCards = document.getElementById("sectionciudadanos")
const printSucesosCards = document.getElementById("sectionSucesos")
const printNegociosCards = document.getElementById("sectionNegocios")
const printTecnologiaCards = document.getElementById("sectionTeconologia")
const printlastestCards = document.getElementById("lastestNewsCards")
const printLastNewHeroCard = document.getElementById("heroLastNew")

const renderOtherNewsSection =document.getElementById("renderSectionOtherNews")

const renderWeatherSection = document.getElementById("weatherContainerSection")


const weatherKey ='e63b8534c62cdd9c734a8a6aed1bb656'
const lang ='es'

const requestWeather = async (ciudad) => {
    const baseURL = 'https://api.openweathermap.org/data/2.5/weather';
    const query =`?q=${ciudad}&lang=${lang}&appid=${weatherKey}&units=metric`

    try{

    const response = await fetch(baseURL+query)
    const data = await response.json()
 console.log(data)
    return renderweather(data)

    }catch(error){
        console.log(error)
    }
 
}
requestWeather('cordoba')
 

const renderWeather = (city) =>{
    return renderWeatherSection.innerHTML += `

     <p>Maxima: ${city.main.temp_max}°C</p> 
     <p>minima: ${city.main.temp_min}°C</p>
      <p>Sensacion termica: 28°C</p>
       <img src="assets/imgweather/01d.png" alt=""> 
       <p></p>
    
    `
   }

 




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

  const showLogginError = (input, message) =>{
    const formField = input;
      formField.classList.add("error")
    const errorField = formField.parentElement.querySelector("small")
    errorField.textContent = message;
}

  const checkLogginUsername  = () =>{
    const user = logginUsername.value.trim()
let valid = false;
 
if(user === "" ){
    showLogginError(logginUsername, "¡Este campo está vacio!" )
} else{
    logginUsername.classList.remove("error")
    sesionSmall.textContent = "";
    valid = true;
}
return valid;
};                 

const checkLogginRegisterPasword = () =>{
    let valid = false;
const passwordLoggin = logginPassword.value.trim();
if (passwordLoggin === "" ) {
    showLogginError(logginPassword, "¡Este campo está vacio!");
} else{
    logginPassword.classList.remove("error")
    passwordSmall.textContent = "";
    valid = true;
}
return valid
};


const toogleLogginSection = ()=> {
    bluredLogginSection.classList.toggle("bluredLoggin");
 
}

const closeOnClickLogginSection = (e) => {
    if (e.target.classList.contains("iniciarSesionSection")) {
        bluredLogginSection.classList.toggle("bluredLoggin");
 
}else{
    return;
}}


  const init = () => {

    hamMenu.addEventListener("click", toogleBurger);
   burgerContainer.addEventListener("click", closeOnClick);
   burgerSesion.addEventListener("click", toogleLogginSection );
   logginBtnToggle.addEventListener("click", toogleLogginSection );
   CloseLoggInSection.addEventListener("click", toogleLogginSection );
   bluredLogginSection.addEventListener("click", closeOnClickLogginSection );
   logginForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    
        let isLogginUsernameValid = checkLogginUsername ()
 
        let isLogginPaswordValid = checkLogginRegisterPasword ()
        
     const isLogginalid =  isLogginUsernameValid &&isLogginPaswordValid ;
    
        if(isLogginalid){
 
              setTimeout(function(){
                alert("Inicio Exitoso!");
               bluredLogginSection.classList.toggle("bluredLoggin"); 
               logginUsername.value = "";
               logginPassword.value = "";
               
            }, 1000);
            
              
        }})
  };
  
  init()