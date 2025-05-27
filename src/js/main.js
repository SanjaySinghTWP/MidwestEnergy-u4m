// Smooth 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		if (document.querySelector(this.getAttribute('href'))) {
			document.querySelector(this.getAttribute('href')).scrollIntoView({
				block: 'start',
				behavior: 'smooth'
			});
		}
	});
});
// Load
// window.addEventListener('load', function () {
//   document.body.classList.add('window-loaded');
//   //
//   AOS.init({
//     duration: 1000,
//     once: true,
//     disable: 'mobile'
//   });
// });
// Scroll
window.addEventListener('scroll', function () {
	const html = document.documentElement;
	const top = html.scrollTop;
	if (top > 100) {
		document.body.classList.add('page-scrolled');
	}
	else {
		document.body.classList.remove('page-scrolled');
	}
});


// $('.header-wrap .header-top .page-center .top-inner .right-search .search-box').click(function(){
// 	$('html').addClass('open-search');
// });

// $('.header-wrap .header-top .page-center .top-inner .right-search .search-item a.search_close').click(function(){
// 	$('html').removeClass('open-search');
// });

$('.header-wrap .header-top .page-center .top-inner .right-search .search-box').on('click', function() {
  $('html').addClass('open-search');
});

// Use event delegation for dynamically added elements
$(document).on('click', '.header-wrap .header-top .page-center .top-inner .right-search .search-item a.search_close', function() {
  $('html').removeClass('open-search');
});

$('.header-wrap .mainNav .page-center .mainNav-inner .hamburger').click(function(){
	$('html').toggleClass('mobile-menu-open');
});

$('.header-wrap .mainNav .page-center .mainNav-inner .header-menu .hs-menu-wrapper>ul>li.hs-item-has-children>a').after(`<div class="child-trigger"><svg class="e-font-icon-svg e-fas-caret-down" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path></svg></div>`);


$('.child-trigger').on('click', function(e) {
	e.preventDefault(); // Optional: prevent default action if it's a link
	$(this).closest('li.hs-item-has-children').toggleClass('active');
});
