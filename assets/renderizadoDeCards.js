const renderHeroNew =() => {
    const randomHeroNew = diario.sort(function() { return Math.random() - 0.3 })
    const randomslicedHeroNew = randomHeroNew.slice(randomHeroNew.length-1)
    
    
    return randomslicedHeroNew.map(renderLastestHeroNewCards)
    }
    const renderLastestHeroNewCards = (randomslicedheroNew) => {
     
        const {categoria, titular, img, id, autor, txt} = randomslicedheroNew;
        return printLastNewHeroCard.innerHTML += ` 
        <a href="renderNoticia.html?id=${id}">       
        <img src="${img[0]}" alt="">

    <div class="ultimasNoticias_principalContainer__new">
        <h3>${categoria}</h3>
        <h1>${titular.slice(0,95)}...</h1>
        <h2>${txt.slice(0,100)}...CONTINUAR VIENDO
        </h2>
        <h4>Autor: ${autor}</h4>
    </div>
</a>
          `;
    };
    
const renderLastestNews =() => {
const randomNew = diario.sort(function() { return Math.random() - 0.5 })
const randomslicedNew = randomNew.slice(randomNew.length-4)


return randomslicedNew.map(renderLastestNewsCards)
}
const renderLastestNewsCards = (randomslicedNew) => {
 
    const {categoria, titular, img, id} = randomslicedNew;
    return printlastestCards.innerHTML += ` 
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
renderHeroNew()
renderLastestNews()
newFilteredByCategoryNegocios()
newFilteredByCategoryPolitica()
newFilteredByCategoryCiudadanos()
newFilteredByCategorySucesos()
newFilteredByCategoryTecnologia()