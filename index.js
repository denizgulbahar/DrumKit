
const drumButtons = document.querySelectorAll(".drum");

drumButtons.forEach(button => {
    button.addEventListener("click", () => handleDrumClick(button.innerHTML));
});

// Handle button click event
function handleDrumClick(key) {
    playSound(key);
    animateButton(key);
}

// Handle keydown event
document.addEventListener("keydown", (event) => {
    playSound(event.key);
    animateButton(event.key);
});

// Play corresponding sound for the given key
function playSound(key) {
    const soundMap = {
        w: "sounds/snare.mp3",
        a: "sounds/kick-bass.mp3",
        s: "sounds/tom-1.mp3",
        d: "sounds/tom-2.mp3",
        j: "sounds/tom-3.mp3",
        k: "sounds/tom-4.mp3",
        l: "sounds/crash.mp3",
    };

    if (soundMap[key]) {
        new Audio(soundMap[key]).play();
    } else {
        console.log("Invalid key:", key);
    }
}

// Animate the pressed button
function animateButton(key) {
    const activeButton = document.querySelector(`.${key}`);
    if (!activeButton) return;

    activeButton.classList.add("pressed");
    setTimeout(() => activeButton.classList.remove("pressed"), 100);
}
