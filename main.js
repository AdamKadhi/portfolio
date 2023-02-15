let nav_bar=document.getElementById("rr");
window.onscroll= function(){
    if(document.documentElement.scrollTop>250){
        nav_bar.style.cssText="width:100%; border-radius:0px; top:0; transition: all 0.3s ease-in-out;";
    }
    if(document.documentElement.scrollTop<250){
        nav_bar.style.cssText="width:90%; border-radius:35px; transition: all 0.3s ease-in-out;";
    }
}
