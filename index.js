function peticionBusiness() {
  document.getElementById("maestro").innerHTML="";
  loadDoc("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5e976ef6430f49e08d17ea33c7605f41");
  //intTitle= "business";
}

function peticionEntertainment() {
  document.getElementById("maestro").innerHTML="";
  loadDoc("https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=5e976ef6430f49e08d17ea33c7605f41");
  //intTitle= "entertainment";
}

function peticionGeneral() {
  document.getElementById("maestro").innerHTML="";
  loadDoc("https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=5e976ef6430f49e08d17ea33c7605f41");
  intTitle= "general";
}

function peticionHealth() {
  document.getElementById("maestro").innerHTML="";
  loadDoc("https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=5e976ef6430f49e08d17ea33c7605f41");
  //intTitle= "health";
}
function peticionBuscador()
{
  document.getElementById("maestro").innerHTML="";
  evento= window.event;
  leidoDelInput= evento.target.value;
  loadDoc("https://newsapi.org/v2/everything?q="+leidoDelInput+"&apiKey=5e976ef6430f49e08d17ea33c7605f41")
  //intTitle= leidoDelInput;
}

function cambiarPagina(){
  numPagina=2;
  loadDoc("https://newsapi.org/v2/everything?&page="+numPagina+"&qInTitle="+intTitle+"&apiKey=5e976ef6430f49e08d17ea33c7605f41");
  numPagina++;
}

function loadDoc(url) {
  var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 1){
        document.getElementById("miimagen").style.display="inline";
      }

      if (this.readyState == 4 && this.status == 200) {   
        document.getElementById("miimagen").style.display="none";
        misDatos= JSON.parse(this.responseText);;
        for(let i=0;i<misDatos.articles.length;i++){
        crearCard(misDatos.articles[i]);
        }
        
      }
    };
    xhttp.open("GET", url, true);
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
  divpadre.setAttribute("id", "w3-container");

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
  maestro= document.getElementById("maestro");
  maestro.appendChild(divpadre);
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
      modal.children[0].children[0].children[5].href= articulo.url;
  
    //modal.innerHTML = articulo.author;
    modal.style.display = "block";

 }

 window.onload = () =>{
   loadDoc("https://newsapi.org/v2/everything?q=game&apiKey=5e976ef6430f49e08d17ea33c7605f41");
   
 }

