function adjustStickySecHeight() {
  var navHeight = $(".u4m-anchor-nav-bar").outerHeight();
  $(".sticky-offset").css("min-height", navHeight),
    $(".u4m-anchor-nav-bar").css("margin-top", -navHeight);
}
$(window).on("scroll", function () {
  var stickySecTop = $(".sticky-offset").offset().top;
  $(window).scrollTop() >= stickySecTop
    ? $("body").addClass("sticky")
    : $("body").removeClass("sticky");
}),
  $(document).ready(function () {
    adjustStickySecHeight();
  }),
  $(window).on("resize", function () {
    adjustStickySecHeight();
  });
