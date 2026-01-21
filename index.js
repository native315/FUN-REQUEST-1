// JavaScript
const mutebutton = document.getElementById("mutebutton");
const music = document.getElementById("music");

const slider = document.getElementById("volumeslider")
const label = document.getElementById("demo")

mutebutton.addEventListener("click", (event)=> {
    if (music.muted==true) {
        mutebutton.textContent = "Mute Music"
    } else {
        mutebutton.textContent = "Unmute Music"
    }
    music.muted = !music.muted;
})

label.innerHTML = slider.value;

slider.oninput = function() {
    label.innerHTML = this.value;
    music.volume = this.value/100;
}

document.addEventListener("click", () => {
    music.play();
}, { once: true });