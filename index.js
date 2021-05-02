function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        misDatos= JSON.parse(this.responseText);
        //mostrarTitulo(misDatos);
        crearCard(misDatos);
      }
    };
    xhttp.open("GET", "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&everything?q=Apple&from=2021-05-01&sortBy=popularity&apiKey=5e976ef6430f49e08d17ea33c7605f41", true);
    xhttp.send();
}

function mostrarTitulo(datos){
    div=document.createElement("div");
    document.body.appendChild(div);
    for(i=0;i<datos.articles.length;i++){
        li=document.createElement("li");
        li.innerHTML= datos.articles[i].title;
        div.appendChild(li);

    }
}

function crearCard(datos){
  divpadre=document.createElement("div");
  divpadre.setAttribute("class", "noticias__card");

  divimg=document.createElement("div");
  divimg.setAttribute("class", "noticias__card--img");
  img=document.createElement("img");
  img.setAttribute("src", datos.articles[1].urlToImage);
  titulo=document.createElement("h3");
  titulo.innerHTML= datos.articles[1].title;


  divcontent=document.createElement("div");
  divcontent.setAttribute("class", "noticias__card--content");
  autor=document.createElement("p");
  autor.innerHTML=datos.articles[1].author;
  contenido=document.createElement("p");
  contenido.innerHTML=datos.articles[1].content;
  descripcion=document.createElement("p");
  descripcion.innerHTML=datos.articles[1].description;
  publicado=document.createElement("p");
  publicado.innerHTML=datos.articles[1].publishedAt;
  url=document.createElement("p");
  url.innerHTML=datos.articles[1].url;

  divimg.appendChild(img);
  divimg.appendChild(titulo);
  
  divcontent.appendChild(autor);
  divcontent.appendChild(contenido);
  divcontent.appendChild(descripcion);
  divcontent.appendChild(publicado);
  divcontent.appendChild(url);

  divpadre.appendChild(divimg);
  divpadre.appendChild(divcontent);

  document.body.appendChild(divpadre);

}

