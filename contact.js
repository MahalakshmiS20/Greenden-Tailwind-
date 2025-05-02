var menuicon = document.getElementById("menuicon")
var sidenav = document.getElementById("sidenav")
var navsymbol = document.getElementById("navsymbol")

menuicon.addEventListener("click",function()
{
    sidenav.style.right=0
})

navsymbol.addEventListener("click",function()
{
    sidenav.style.right="-50%"
})