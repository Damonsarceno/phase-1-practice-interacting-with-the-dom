let timerVar = setInterval(countTimer, 1000);
let totalSeconds = 0;
function countTimer() {
    ++totalSeconds;
   
    let seconds = totalSeconds 
   
    document.getElementById('counter').innerHTML = seconds;


const button = document.getElementById('plus');
const button2 = document.getElementById('minus');
const textElement = document.getElementById('counter');
const pauseButton = document.getElementById('pause');
const toggleButton = document.getElementById('pause');

function pauseToggle(e) {
    const pauseResume = toggleButton.id.toggle(`pause`)

    if (pauseResume) {
        toggleButton.textContent = `pause`
    } else {
        toggleButton.textContent = `resume`
    }
}    
toggleButton.addEventListener('click', pauseToggle,)

button.addEventListener("click", () => {
    totalSeconds += 1;
});

button2.addEventListener("click", () => {
    totalSeconds -= 1;
});
 
pauseButton.addEventListener("click", () => {
    clearTimeout(timerVar);
});

pauseToggle()
}