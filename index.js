let inputBox = document.getElementById("inpt");
let creat = document.getElementById("text");


function Add(){

    if(inputBox.value == ""){
        alert("Please Enter Your Task");
    }else{
        let newElm = document.createElement("p");
        newElm.innerHTML = `${inputBox.value} <i class="fa-solid fa-trash"></i>`;
        creat.appendChild(newElm);
        inputBox.value = "";
        newElm.querySelector("i").addEventListener("click", remove);

        function remove(){
            newElm.remove();
        }
    }
}