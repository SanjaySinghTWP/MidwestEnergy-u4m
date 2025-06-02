document.addEventListener("DOMContentLoaded", function () {
  const videoWrapper = document.querySelector(".vid_wrp");
  if (!videoWrapper) {
    console.warn(".vid_wrp element not found on the page");
    return; // Stop execution here, no element to work with
  }

  const playIcon = videoWrapper.querySelector(".play-icon");
  if (!playIcon) {
    console.warn(".play-icon element not found inside .vid_wrp");
    return;
  }

  const iframe = videoWrapper.querySelector("iframe");
  const video = videoWrapper.querySelector("video");

  let isPlaying = false;

  playIcon.addEventListener("click", function () {
    if (!isPlaying) {
      if (iframe) {
        const videoSrc = iframe.getAttribute("data-src");
        iframe.src = videoSrc + "?autoplay=1&mute=1";
        videoWrapper.classList.add("video-active");
        isPlaying = true;
      } else if (video) {
        video.play();
        videoWrapper.classList.add("video-active");
        isPlaying = true;
      }
    }
  });

  if (iframe) {
    iframe.addEventListener("click", function () {
      if (isPlaying) {
        iframe.src = "";
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
