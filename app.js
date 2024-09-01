let ul = document.querySelector("ul");
let btn = document.querySelector("button");
let inp = document.querySelector("input");

btn.addEventListener("click",function(){
    //creating the list item
    let item = document.createElement("li");

    item.innerText = inp.value;
    ul.appendChild(item);

    //creating the delete buttton
    let delbtn = document.createElement("button");

    delbtn.innerText = "delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);
    inp.value = " ";
})
;



//add event listener on parent not on its child ,
//to perform event for new and existing element both.

ul.addEventListener("click", function(event){
    // console.dir(event.target.nodeName);  
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        // console.log("deleted");
    }
    
});