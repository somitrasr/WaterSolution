var menuButton=document.getElementById("button");
var sideNav=document.getElementById("container");
var menu=document.getElementById("menu");
sideNav.style.left="-450px";
menuButton.onclick= function (){
    if(sideNav.style.left=="-450px"){
        sideNav.style.left="0";
        menu.src="images/close.png";
    }
    else{
        sideNav.style.left="-450px";
        menu.src="images/menu.png";
    }
}