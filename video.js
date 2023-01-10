window.addEventListener("load", start);

function start() {
  const video = document.querySelector("#video_file");
  const playBtn = document.querySelector("#play");
  const pauseBtn = document.querySelector("#pause");
  const volSlider = document.querySelector("#vol_control");

  playBtn.addEventListener("click", playVideo);
  volSlider.addEventListener("change", changeVolume);

  function playVideo() {
    if (video.paused === true) {
      video.play();
      playBtn.style.backgroundImage = "url('pause.png')";
    } else {
      video.pause();
      playBtn.style.backgroundImage = "url('play.png')";
    }
  }

  function changeVolume() {
    console.log(volSlider.value);
    let newVolume = volSlider.value / 100;
    video.volume = newVolume;
  }
}
