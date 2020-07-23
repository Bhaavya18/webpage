function myFunction() {
  var x = document.getElementById("listd");
  if (x.className === "list") {
    x.className += " responsive";
  } else {
    x.className = "list";
  }
}

function up(){
    var x=document.getElementById("high");
    if(window.pageYOffset >100){
      x.classList.add("scrollup")
    }
    else{
      x.classList.remove("scrollup");
    }
   }