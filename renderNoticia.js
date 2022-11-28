//contenedor de las noticias renderizadas en el html renderNoticia
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



const renderOtherNews =() => {
        const randomOtherNews = diario.sort(function() { return Math.random() - 0.3 })
        const randomslicedOtherNews = randomOtherNews.slice(randomOtherNews.length-8)
        
        
        return randomslicedOtherNews.map(renderOthertNewsCards)
        }
        const renderOthertNewsCards = (randomslicedOtherNews) => {
         
            const {categoria, titular, img, id} = randomslicedOtherNews;
            return renderOtherNewsSection.innerHTML += ` 
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




        renderOtherNews() 
        renderNoticia(idDeNoticiaFiltrada[0])