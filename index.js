function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        misDatos= JSON.parse(this.responseText);
        mostrarTitulo(misDatos);
      }
    };
    xhttp.open("GET", "https://newsapi.org/v2/everything?q=tesla&from=2021-03-30&sortBy=publishedAt&apiKey=5e976ef6430f49e08d17ea33c7605f41", true);
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