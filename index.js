// JavaScript
const mutebutton = document.getElementById("mutebutton");
const music = document.getElementById("music");

mutebutton.addEventListener("click", (event)=> {
    music.muted = !music.muted;
})

