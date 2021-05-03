function loadDoc() {
    var xhttp = new XMLHttpRequest();
    //evento=window.event;
    //categoria=evento.target.id;

    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
    
        misDatos= JSON.parse(this.responseText);
        //mostrarTitulo(misDatos);
        for(let i=0;i<misDatos.articles.length;i++){
        crearCard(misDatos.articles[i]);
        }
        
      }
    };
    xhttp.open("GET", "https://newsapi.org/v2/top-headlines?country=us&category=business&everything?q=bitcoin&apiKey=5e976ef6430f49e08d17ea33c7605f41", true);
    xhttp.send();
}

//

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
    if(articulo.author==null)
      modal.children[0].children[0].children[1].innerHTML= "No hay autor";
    else 
      modal.children[0].children[0].children[1].innerHTML= articulo.author;
    
      if(articulo.content==null)
        modal.children[0].children[0].children[2].innerHTML= "No hay contenido";
      else 
        modal.children[0].children[0].children[2].innerHTML= articulo.content;
    
      if(articulo.description==null)
        modal.children[0].children[0].children[2].innerHTML= "No hay descripcion";
      else 
        modal.children[0].children[0].children[2].innerHTML= articulo.description;
    modal.children[0].children[0].children[3].innerHTML= articulo.description;
    modal.children[0].children[0].children[4].innerHTML= articulo.publishedAt;
    modal.children[0].children[0].children[5].innerHTML= articulo.url;
  
    //modal.innerHTML = articulo.author;
    modal.style.display = "block";

 }

