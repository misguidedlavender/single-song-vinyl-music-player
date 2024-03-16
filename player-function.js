const songAudio = document.getElementById("song-source")
const controls = document.getElementById("play-controls")
const buttonPlay = document.getElementById("play-symbol")
const buttonPause = document.getElementById("pause-symbol")
const playStatus = document.getElementById("status")

songAudio.volume = 0.2;

let isPlaying = false;

controls.addEventListener("click", () => {
  if (isPlaying) {
    songAudio.pause();
    playStatus.textContent = "paused";
    buttonPlay.style.display = "block";
    buttonPause.style.display = "none";
  } else {
    songAudio.play();
    playStatus.textContent = "playing";
    buttonPlay.style.display = "none";
    buttonPause.style.display = "block";
  }
  isPlaying = !isPlaying;
});
