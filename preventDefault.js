const button = document.querySelector("#btn-submit");
let inputName = document.querySelector("#texto");
const nameUser = document.querySelector("#nameUser");

button.addEventListener("click", function(event){
    event.preventDefault();
    console.log(inputName.value);
    nameUser.innerHTML = inputName.value
});