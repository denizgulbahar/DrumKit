
const drumButtons = document.querySelectorAll(".drum");

drumButtons.forEach(button => {
    button.addEventListener("click", () => handleDrumClick(button.innerHTML));
});

function handleDrumClick(buttonHTML) {
    makeSound(buttonHTML);
    buttonAnimation(buttonHTML);
}
// addEventListener high order, event callback f.
document.addEventListener("keydown", function(event) {  
makeSound(event.key)
buttonAnimation(event.key)
activeButton.classList.remove("pressed");
})

function makeSound(key) {
    switch (key) {
        case "w":                                                     // case "w"
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "a":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
        case "s":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "d":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "j":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "k":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "l":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        default:
            console.log(buttonHTML);
     }
}

function buttonAnimation(currentKey) {
var activeButton = document.querySelector("." + currentKey);
activeButton.classList.add("pressed");
// Timeout function
setTimeout(function() {  
    activeButton.classList.remove("pressed");
}, 100);
}


// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();