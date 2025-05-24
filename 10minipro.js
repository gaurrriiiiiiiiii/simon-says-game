let inp=document.querySelector("input")
let btn=document.querySelector("button")
let ul=document.querySelector("ul")

btn.addEventListener("click", function(){
    let item = document.createElement("li")
    item.innerText= inp.value;

    let dltbtn = document.createElement("button")
    dltbtn.innerText="delete"
    dltbtn.classeList.add("delete")
    
    item.appendChild(dltbtn)
    ul.appendChild(dltbtn)
    ul.appendChild(item)
                           //it will add the entered input to the js
    inp.value="";                // after entering the input in the js it will empty the placeholder to enter the new task .
})

let dltbtns= document.querySelectorAll(".delete")
for(dltbtn of dltbtns){
      dltbtn.addEventListener("click", function(){
        console.log("element is dleted")
})
}