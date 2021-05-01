function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        misDatos= JSON.parse(this.responseText);
        mostrarTitulo(misDatos);
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
  img.setAttribute("src", datos.articles[TODAVIA NO SABEMOS QUE PONER].urlToImage);

  divcontent=document.createElement("div");
  divcontent.setAttribute("class", "noticias__card--content");

}

