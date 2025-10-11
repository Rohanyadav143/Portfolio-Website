const words = ["Dedicated","Focused","Adaptive","Creative","Curious","Student","Coder","Full-Stack-Developer"];
let wordIndex = 0;
let charIndex = 0;
let displayText = document.getElementById("message");

function typeCharacter() {
    if (charIndex < words[wordIndex].length) {
        displayText.innerHTML += words[wordIndex][charIndex];
        charIndex++;
        setTimeout(typeCharacter, 200);
    } 
    else {
        setTimeout(clearAndNextWord, 1000);
    }
}

function clearAndNextWord() {
    charIndex = 0;
    displayText.innerHTML = "";
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeCharacter, 500);
}

typeCharacter();