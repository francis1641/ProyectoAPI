function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var misDatos= JSON.parse(this.responseText);
        //mostrarTitulo(misDatos);
        for(let i=0;i<misDatos.articles.length;i++){
        crearCard(misDatos.articles[i]);
        }
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

function crearCard(noticia){

  divpadre=document.createElement("div");
  divpadre.setAttribute("class", "w3-container");

  img=document.createElement("img");
  if(noticia.urlToImage==null)
    img.setAttribute("src", "img/imagennodisponible.png");
  else 
    img.setAttribute("src", noticia.urlToImage); 
  boton=document.createElement("button");
  boton.addEventListener("click",()=>mostrarDetalle(noticia),false )
//  boton.setAttribute("onclick", "mostrarDetalle(noticia)");
  boton.innerHTML="Más información";
  titulo=document.createElement("h3");
  titulo.innerHTML= noticia.title;

// boton.setAttribute("onclick", "document.getElementById('w3-modal0').style.display='block'");


 

  divpadre.appendChild(titulo);
  divpadre.appendChild(img);
  divpadre.appendChild(boton);
  document.body.appendChild(divpadre);
}
 function mostrarDetalle(articulo)
 {
    modal = document.getElementById("modalDetalle");
    modal.children[0].children[0].children[1].innerHTML= articulo.author;
    modal.children[0].children[0].children[1].innerHTML= articulo.author;
    modal.children[0].children[0].children[1].innerHTML= articulo.author;
  
    //modal.innerHTML = articulo.author;
    modal.style.display = "block";

 }

function masinformacion(){
  divmodal=document.createElement("div");
  divmodal.setAttribute("id", "w3-modal");
  divmodal.setAttribute("class", "w3-modal");


  divmodalcontent=document.createElement("div");
  divmodalcontent.setAttribute("class", "w3-modal-content");

  divcontainer=document.createElement("div");
  divcontainer.setAttribute("class", "w3-container");

  span=document.createElement("span");
  span.setAttribute("onclick", "document.getElementById('').style.display='none'")

  autor=document.createElement("p");
  if(datos.articles[indice].author==null)
    autor.innerHTML= "No hay autor";
  else 
    autor.innerHTML=datos.articles[indice].author;

  contenido=document.createElement("p");
  if(datos.articles[indice].content==null)
    contenido.innerHTML= "No hay contenido";
  else 
    contenido.innerHTML=datos.articles[indice].content;

  descripcion=document.createElement("p");

  if(datos.articles[indice].content==null)
  descripcion.innerHTML= "No hay descripcion";
else 
  descripcion.innerHTML=datos.articles[indice].description;
  
  publicado=document.createElement("p");
  publicado.innerHTML=datos.articles[indice].publishedAt;
  url=document.createElement("p");
  url.innerHTML=datos.articles[indice].url;

  divcontainer.appendChild(span);
  divcontainer.appendChild(autor);
  divcontainer.appendChild(contenido);
  divcontainer.appendChild(descripcion);
  divcontainer.appendChild(publicado);
  divcontainer.appendChild(url);

  divmodalcontent.appendChild(divcontainer);
  divmodal.appendChild(divmodalcontent);
}

