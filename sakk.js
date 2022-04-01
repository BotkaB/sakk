window.addEventListener("load", init);

function ID(elem) {
    return document.getElementById(elem);
}

/*function CLASS(elem){
    return document.getElementsByClassName(elem);
}*/

function $(elem) {
    return document.querySelectorAll(elem);
}

function init() {

    ID("cim").innerHTML = "<h1>Sakktábla</h1>";
    
    rajzol();
    
}

function rajzol() {
    let tabla = ID("sakktabla");

    let html = "";
    for (i = 0; i < 8; i++) {
        
        html += '<tr>';
        
        
        
        for (j = 0; j < 8; j++) {
          
       
            if (((i + j) % 2) == 0)
                szin = "#FFFFFF"
            else
                szin = "#000000"
            html += "<td bgcolor='"+szin+"'>  </td>";
           
        }
        html += "</tr>";
      
    }
    
    tabla.innerHTML = html;

    
  
    //eseménykezelő felvétele
    $("td").forEach(function(elem) {
        
        elem.addEventListener("click", 
            function() {
                elem.innerHTML = "<img src='./kep/gyalog.png'>";
            }
        );
    });
}
