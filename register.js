//COMIENZO DE LOGICA Y VALIDACION FORMULARIO DE REGISTRO//
const showError = (input, message) =>{
    const formField = input;
    formField.classList.remove("success")
    formField.classList.add("error")
    const errorField = formField.parentElement.querySelector("small")
    errorField.textContent = message;
}

const showSucsess = (input) => {
    const formField = input;
    formField.classList.add("success")
    formField.classList.remove("error")
    const errorField = formField.parentElement.querySelector("small")
    errorField.textContent = "";
}


const ispassSecure = (password) =>{
    const passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
return passwordRegEx.test(password)
}

const isemailValid = (email) => {
    const emailRegEx = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    return emailRegEx.test(email)
}

const isBetween = (longitud, min, max)=> {
    return longitud < min || longitud > max ? true : false;

}

const checkUsername  = () =>{
    const username = usernameInput.value.trim()
let valid = false;
const min = 5;
const max = 12;

if(username === "" ){
    showError(usernameInput, "¡Este campo no puede estar vacio!" )
}else if(isBetween(username.length, min, max)){
showError(usernameInput, `¡El campo debe tener entre ${min} y ${max} caracteres!`)
} else{
    showSucsess(usernameInput)
    valid = true;
}
return valid;
};                 
 
const checkRealName = () =>{
      let valid = false;
    const realName =  nameImput.value.trim()
  
    if (realName === "") {
        showError(nameImput, "¡Este campo no puede estar vacio!");
    } else{
        showSucsess(nameImput)
        valid = true;
    }
    return valid;
};
 
const checkSRegisterEmail = () =>{
let valid = false;
const email = emailInput.value.trim()

if (email === "" ) {
    showError(emailInput, "¡Este campo no puede estar vacio!");
} else if(!isemailValid(email)){
showError(emailInput, "¡El email no es valido! ")
} else{
    showSucsess(emailInput)
    valid = true;
}
return valid
};
 
const checkRegisterPasword = () =>{
    let valid = false;
const password = passwordInput.value.trim();
if (password === "" ) {
    showError(passwordInput, "¡Este campo no puede estar vacio!");
} else if(!ispassSecure(password)){
showError(passwordInput, "¡La contraseña debe contener almenos 8 caracteres una letra y un numero! ")
} else{
    showSucsess(passwordInput)
    valid = true;
}
return valid
};
 
const checkRecheckPasword = () =>{
    let valid = false;
    const checkpassword = paswordcheckinput.value.trim();
    const password = passwordInput.value.trim();
    if(checkpassword === "" ){
        showError(paswordcheckinput, "¡Este campo no puede estar vacio!");
    } else if(checkpassword != password || !passwordInput.value.trim() ){
        showError(paswordcheckinput, "¡La constraseña ingresada no coincide con la anterior!")
    } else{
        showSucsess(paswordcheckinput)
        valid = true;
    }
    return valid
};
 
const checkTerms = () =>{
    let valid = false;

    if(termscheckbox.checked === false){
        
        showError(termscheckbox, "¡Debes aceptar los terminos y condiciones!");
console.log(valid)
    } else{
        valid = true;
        showSucsess(termscheckbox)
    }

    return valid;
};




const debounce = (fn, delay = 500) => {
    let timeOutId;

    return (...args) => {
        if (timeOutId) {
            clearTimeout(timeOutId)
        }
        timeOutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay)

    }
};

form.addEventListener("submit",(e)=>{
e.preventDefault()

    let isUsernameValid = checkUsername()
    let isRealNameValid = checkRealName()
    let isRegisterEmailValid = checkSRegisterEmail()
    let isRegisterPaswordValid = checkRegisterPasword()
    let isRecheckPaswordValid = checkRecheckPasword()
    let isTermsValid = checkTerms()
 const formValid = isUsernameValid && isRealNameValid && isRegisterEmailValid && isRegisterPaswordValid && isRecheckPaswordValid && isTermsValid;

    if(formValid){
        Swal.fire(
            '¡tus datos fueron guardados con exito!',
            '¡seras redirigido al inicio!',
            'success',
             
          )
          setTimeout(function(){
            window.location.assign("index.html");
        }, 5000);

          
    } /*else{
     
             alert("¡Los campos no estan completados correctamente!")
     
     
     Swal.fire({
            title: '¡Los campos no estan completados correctamente!',
            imageUrl: 'https://i.postimg.cc/JhGJ6c6F/panda.gif',
            imageWidth: 300,
            imageHeight: 200,
            imageAlt: 'Custom image',
            background: '#141414'
          })

    }*/
})
 //FIN DE LOGICA Y VALIDACION FORMULARIO DE REGISTRO//