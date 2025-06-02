document.addEventListener("DOMContentLoaded", function () {
  const playIcon = document.querySelector(".play-icon");
  const videoWrapper = document.querySelector(".vid_wrp");
  const iframe = videoWrapper.querySelector("iframe");
  const video = videoWrapper.querySelector("video");

  let isPlaying = false;

  playIcon.addEventListener("click", function () {
    // For iframe (YouTube)
    if (iframe && !isPlaying) {
      const videoSrc = iframe.getAttribute("data-src");
      iframe.src = videoSrc + "?autoplay=1&enablejsapi=1";
      videoWrapper.classList.add("video-active");
      isPlaying = true;
    }

    // For video tag (MP4)
    if (video && !isPlaying) {
      video.play();
      videoWrapper.classList.add("video-active");
      isPlaying = true;
    }
  });

  // Stop video on click
  if (iframe) {
    iframe.addEventListener("click", function () {
      if (isPlaying) {
        iframe.src = ""; // remove src to stop playback
        videoWrapper.classList.remove("video-active");
        isPlaying = false;
      }
    });
  }

  if (video) {
    video.addEventListener("click", function () {
      if (isPlaying) {
        video.pause();
        video.currentTime = 0; // optional: reset to start
        videoWrapper.classList.remove("video-active");
        isPlaying = false;
      }
    });
  }
});
