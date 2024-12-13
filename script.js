const video = document.getElementById("hero-video");

if (!localStorage.getItem("videoPlayed")) {
  video.play();

  localStorage.setItem("videoPlayed", "true");

  video.addEventListener("ended", () => {
    video.pause(); 
    video.currentTime = 0; 
  });
}
