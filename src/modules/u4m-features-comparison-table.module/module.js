document.addEventListener("DOMContentLoaded", function () {
  // Hide all .main-wrapper initially
  const wrappers = document.querySelectorAll(".main-wrapper");
  wrappers.forEach(function(wrapper, index) {
    if (index === 0) {
      slideDown(wrapper); // First one open
    } else {
      wrapper.style.display = "none";
    }
  });

  // Add click toggle
  const toggleTitles = document.querySelectorAll(".toggletitle");
  toggleTitles.forEach(function(title) {
    title.addEventListener("click", function () {
      const wrapper = this.parentElement.querySelector(".main-wrapper");
      slideToggle(wrapper, 250);
    });
  });

  // Animation helpers below
  function slideUp(element, duration = 250) {
    element.style.height = element.offsetHeight + 'px';
    element.offsetHeight; // force repaint
    element.style.transition = `height ${duration}ms ease`;
    element.style.overflow = 'hidden';
    element.style.height = 0;

    setTimeout(() => {
      element.style.display = 'none';
      element.style.removeProperty('height');
      element.style.removeProperty('transition');
      element.style.removeProperty('overflow');
    }, duration);
  }

  function slideDown(element, duration = 250) {
    element.style.removeProperty('display');
    let display = window.getComputedStyle(element).display;
    if (display === 'none') display = 'block';
    element.style.display = display;

    let height = element.scrollHeight;
    element.style.height = 0;
    element.offsetHeight; // force repaint
    element.style.transition = `height ${duration}ms ease`;
    element.style.overflow = 'hidden';
    element.style.height = height + 'px';

    setTimeout(() => {
      element.style.removeProperty('height');
      element.style.removeProperty('transition');
      element.style.removeProperty('overflow');
    }, duration);
  }

  function slideToggle(element, duration = 250) {
    if (window.getComputedStyle(element).display === 'none') {
      slideDown(element, duration);
    } else {
      slideUp(element, duration);
    }
  }
});
