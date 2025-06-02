document.addEventListener("DOMContentLoaded", function () {
  const playIcon = document.querySelector(".play-icon");
  const videoWrapper = document.querySelector(".video-wrapp");

  // ✅ Exit early if not present
  if (!videoWrapper || !playIcon) return;

  const iframe = videoWrapper.querySelector("iframe");
  const video = videoWrapper.querySelector("video");

  let isPlaying = false;

  playIcon.addEventListener("click", function () {
    if (iframe && !isPlaying) {
      const videoSrc = iframe.getAttribute("data-src");
      iframe.src = videoSrc + "?autoplay=1&enablejsapi=1";
      videoWrapper.classList.add("video-active");
      isPlaying = true;
    }

    if (video && !isPlaying) {
      video.play();
      videoWrapper.classList.add("video-active");
      isPlaying = true;
    }
  });

  if (iframe) {
    iframe.addEventListener("click", function () {
      if (isPlaying) {
        iframe.src = ""; // Stop playback
        videoWrapper.classList.remove("video-active");
        isPlaying = false;
      }
    });
  }

  if (video) {
    video.addEventListener("click", function () {
      if (isPlaying) {
        video.pause();
        video.currentTime = 0;
        videoWrapper.classList.remove("video-active");
        isPlaying = false;
      }
    });
  }
});
