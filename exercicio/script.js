const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

HREF_LINK.addEventListener("click", function(event){
    event.preventDefault();
});

function check(eventCheck){
    eventCheck.preventDefault();
}

INPUT_CHECKBOX.addEventListener("click", check);

INPUT_TEXT.addEventListener("keypress", function(checkText){
    checkText.preventDefault();
});