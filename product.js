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

//product page functionality

var search = document.getElementById("search")
var container = document.getElementById("container")
var productlist = container.querySelectorAll("div")

search.addEventListener("keyup",function(event){
    var enteredvalue = event.target.value.toLowerCase();
    for(count=0;count<productlist.length;count=count+1)
    {
    var productname = productlist[count].querySelector("h1").textContent.toLowerCase();
        
            if (productname.indexOf(enteredvalue)<0)
                {
                    productlist[count].style.display="none"
                }
            else
               {
                  productlist[count].style.display="block"
               }  
    }
})