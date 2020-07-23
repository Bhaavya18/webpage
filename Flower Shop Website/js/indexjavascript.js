function myFunction() {
  var x = document.getElementById("listd");
  if (x.className === "list") {
    x.className += " responsive";
  } else {
    x.className = "list";
  }
}
var clicks=0;
 function countclicks(){
  clicks++;
 }
 function decclicks(){
  if(clicks>0)
    clicks--;
 }
function clickit(){
    
      if(clicks==1)
   {   document.getElementById("hero").style.backgroundImage="linear-gradient(rgba(0,0,0,.5), rgba(255,255,255,.5)), url('image/cover2.jpg')"; 
     document.getElementById("hero").style.backgroundRepeat="no-repeat";
     document.getElementById("hero").style.backgroundSize="cover";
     document.getElementById("one").style.display="none";
     document.getElementById("two").style.display="block";
   }
   if(clicks==2){

document.getElementById("hero").style.backgroundImage="linear-gradient(rgba(0,0,0,.5), rgba(255,255,255,.5)), url('image/cover3.png')"; 
     document.getElementById("hero").style.backgroundRepeat="no-repeat";
     document.getElementById("hero").style.backgroundSize="cover";
     document.getElementById("two").style.display="none";
     document.getElementById("three").style.display="block";

   }
 }

   function clickback(){
     if(clicks==0)
   {   document.getElementById("hero").style.backgroundImage="linear-gradient(rgba(0,0,0,.5), rgba(255,255,255,.5)), url('image/cover1.jpg')"; 
     document.getElementById("hero").style.backgroundRepeat="no-repeat";
     document.getElementById("hero").style.backgroundSize="cover";
     document.getElementById("two").style.display="none";
     document.getElementById("one").style.display="block";
   }
      if(clicks==1)
   {   document.getElementById("hero").style.backgroundImage="linear-gradient(rgba(0,0,0,.5), rgba(255,255,255,.5)), url('image/cover2.jpg')"; 
     document.getElementById("hero").style.backgroundRepeat="no-repeat";
     document.getElementById("hero").style.backgroundSize="cover";
     document.getElementById("three").style.display="none";
     document.getElementById("two").style.display="block";
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