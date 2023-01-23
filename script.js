var t=document.querySelector(".container")

for(let i=1;i<=15;i++){
    const box=document.createElement("div")
    box.classList.add("box")
    var cr= randomcolor()
    box.innerHTML=cr
    box.style.backgroundColor=cr
    t.appendChild(box)
}
function randomcolor(){
    var rn= Math.floor(Math.random()*16777215)
    var c="#"+rn.toString(16)
    return c


}
function coloring(){
    var val= document.querySelectorAll(".box")
    for(let i=1;i<=15;i++){
        var cr=randomcolor()
        val[i].style.backgroundColor=cr

    }
        
    
}
randomcolor()