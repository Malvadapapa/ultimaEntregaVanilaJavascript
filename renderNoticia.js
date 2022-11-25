const newContainer = document.getElementById("noticiaSectionContainer")

//funcion que extrae el valor query de la pagina para renderizar la noticia en la correspondiente seccion//
function getQueryValue(variable) {
        const query = window.location.search.substring(1);
        const vars = query.split("&");
        for (let i = 0; i < vars.length; i++) {
                const pair = vars[i].split("=");
                if (pair[0] == variable) { return pair[1]; }
        }
        return (false);
}

console.log(getQueryValue("id"))

const idDeNoticiaFiltrada = diario.filter(
        (noticia) => noticia.id == getQueryValue("id")
);
console.log(idDeNoticiaFiltrada)

const renderNoticia = (NoticiaFiltrada) => {
        const {categoria, titular, img, txt, autor, fecha } = NoticiaFiltrada;
console.log(categoria)
        return newContainer.innerHTML += `

             <h5>${categoria}</h5>
         <hr>
             <h1>${titular}</h1>
         <hr>
             <div class="imgContainer">
             <img src="${img[0]}" alt="">
            </div>
         <hr>
             <h3>Autor: ${autor}</h3>
             <h4>${fecha}</h4>
         <hr>
             <div class="noticiaContainer">
                 ${txt}
           </div>
    
          `;
};

renderNoticia(idDeNoticiaFiltrada[0])

