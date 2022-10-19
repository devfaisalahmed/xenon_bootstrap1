jQuery(document).ready(function () {
// =========== magnific popup ===============
 $('.project_popup').magnificPopup({
    type: 'image',
    gallery: {
      enabled:true,
    }
 });
 // ========== counter js =============
$('.counters').counterUp({
   delay: 100,
   time: 1000
});
   // ============ slick js ========
   $('.tesimonials').slick({
      arrows: false,
      dots: true,
      speed: 300,
      autoplay: true,
   });
});
$(window).load(function () {
   // sticky menu
   $(window).on('scroll', function () {
      if ($(this).scrollTop() > 20) {
         $('.header').addClass('sticky');
      }else {
         $('.header').removeClass('sticky');
      }
   })
})