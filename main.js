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

const logginForm = document.getElementById("logginForm")
const logginUsername =document.getElementById("sesionUsername")
const logginPassword = document.getElementById("sesionPassword")
const sesionSmall = document.getElementById("sesionSmall")
const passwordSmall = document.getElementById("passwordSmall")


const CloseLoggInSection = document.getElementById("initSesion")
const bluredLogginSection = document.getElementById("blurLogginSection")
const logginBtnToggle = document.getElementById("session")
const burgerSesion = document.getElementById("burgerSesion")


const printPoliticaCards = document.getElementById("containerNewsPolitica")
const printCiudadanosCards = document.getElementById("sectionciudadanos")
const printSucesosCards = document.getElementById("sectionSucesos")
const printNegociosCards = document.getElementById("sectionNegocios")
const printTecnologiaCards = document.getElementById("sectionTeconologia")
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

const newFilteredByCategoryPolitica = () => {
    const filterPolitica = diario.filter( (e) => e.categoria === "POLÍTICA").sort(function() { return Math.random() - 0.4 })
    const noticiasPoliticaFiltradas = filterPolitica.slice(filterPolitica.length-4)
 

return noticiasPoliticaFiltradas.map(renderCategoriaPolitica)
 
}
 
const renderCategoriaPolitica = (noticiasPoliticaFiltradas) => {
 
    const {categoria, titular, img, id} = noticiasPoliticaFiltradas;
    return printPoliticaCards.innerHTML += ` 
    <div class="ultimaNoticia_card">
    <a href="renderNoticia.html?id=${id}">
        <img src="${img}" alt="">
        <h4>${categoria}</h4>
        <h2> ${titular}
        </h2>
    </a>
</div>

      `;
};

/*const newFilteredByCategoryPolitica = () => {
    const filterPolitica = diario.filter( (e) => e.categoria === "POLÍTICA").sort(function() { return Math.random() - 0.4 })
    const noticiasPoliticaFiltradas = filterPolitica.slice(filterPolitica.length-4)
 

 const noticiasMapeadas = noticiasPoliticaFiltradas.map(renderCategoriaPolitica)
 

  return renderCategoriaPolitica(noticiasPoliticaFiltradas, printPoliticaCards)
}
 
const renderCategoriaPolitica = (filteredNews, contenedor) => {
     console.log(filteredNews)
    const {categoria, titular, img, id} = filteredNews;
    console.log(img)
    return contenedor.innerHTML += ` 
    <div class="ultimaNoticia_card">
    <a href="renderNoticia.html?id=${id}">
        <img src="${img}" alt="">
        <h4>${categoria}</h4>
        <h2> ${titular}
        </h2>
    </a>
</div>

      `;
};*/

const newFilteredByCategoryCiudadanos= () => {
    const filterCiudadanos = diario.filter( (e) => e.categoria === "CIUDADANOS").sort(function() { return Math.random() - 0.4 })
    const noticiasCiudadanosFiltradas = filterCiudadanos.slice(filterCiudadanos.length-4)
 
 return noticiasCiudadanosFiltradas.map(renderCategoriaCiudadanos)
}
 
const renderCategoriaCiudadanos = (noticiasCiudadanosFiltradas) => {
    const {categoria, titular, img, id} = noticiasCiudadanosFiltradas;
 
    return printCiudadanosCards.innerHTML += ` 
    <div class="ultimaNoticia_card">
    <a href="renderNoticia.html?id=${id}">
        <img src="${img[0]}" alt="">
        <h4>${categoria}</h4>
        <h2> ${titular}
        </h2>
    </a>
</div>

      `;
};
const newFilteredByCategorySucesos= () => {
    const filterSucesos = diario.filter( (e) => e.categoria === "SUCESOS").sort(function() { return Math.random() - 0.4 })
    const noticiasSucesosFiltradas = filterSucesos.slice(filterSucesos.length-4)
 
 return noticiasSucesosFiltradas.map(renderCategoriaSucesos)
}
 
const renderCategoriaSucesos = (noticiasSucesosFiltradas) => {
    const {categoria, titular, img, id} = noticiasSucesosFiltradas;
 
    return printSucesosCards.innerHTML += ` 
    <div class="ultimaNoticia_card">
    <a href="renderNoticia.html?id=${id}">
        <img src="${img[0]}" alt="">
        <h4>${categoria}</h4>
        <h2> ${titular}
        </h2>
    </a>
</div>

      `;
};
const newFilteredByCategoryNegocios= () => {
    const filterNegocios = diario.filter( (e) => e.categoria === "NEGOCIOS").sort(function() { return Math.random() - 0.4 })
    const noticiasNegociosFiltradas = filterNegocios.slice(filterNegocios.length-4)
 
 return noticiasNegociosFiltradas.map(renderCategoriaNegocios)
}
 
const renderCategoriaNegocios = (noticiasNegociosFiltradas) => {
    const {categoria, titular, img, id} = noticiasNegociosFiltradas;
 
    return printNegociosCards.innerHTML += ` 
    <div class="ultimaNoticia_card">
    <a href="renderNoticia.html?id=${id}">
        <img src="${img[0]}" alt="">
        <h4>${categoria}</h4>
        <h2> ${titular}
        </h2>
    </a>
</div>

      `;
};
const newFilteredByCategoryTecnologia= () => {
    const filterTecnologia = diario.filter( (e) => e.categoria === "TECNOLOGÍA").sort(function() { return Math.random() - 0.4 })
    const noticiasTecnologiaFiltradas = filterTecnologia.slice(filterTecnologia.length-4)
 
 return noticiasTecnologiaFiltradas.map(renderCategoriaTecnologia)
}
 
const renderCategoriaTecnologia = (noticiasTecnologiaFiltradas) => {
    const {categoria, titular, img, id} = noticiasTecnologiaFiltradas;
 
    return printTecnologiaCards.innerHTML += ` 
    <div class="ultimaNoticia_card">
    <a href="renderNoticia.html?id=${id}">
        <img src="${img[0]}" alt="">
        <h4>${categoria}</h4>
        <h2> ${titular}
        </h2>
    </a>
</div>

      `;
};


  const init = () => {
    newFilteredByCategoryNegocios()
    newFilteredByCategoryPolitica()
    newFilteredByCategoryCiudadanos()
    newFilteredByCategorySucesos()
    newFilteredByCategoryTecnologia()
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