//Menu
$(".navbar__menu-btn").on("click", function () {
  $(".navbar__links").toggleClass("active");
  $(this).find("i").toggleClass("fa-bars");
  $(this).find("i").toggleClass("fa-times");
});

$(".slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  dots: false,
  autoplaySpeed: 3000,
  prevArrow: '<button type="button" class="slick-prev">Previous</button>',
  nextArrow: '<button type="button" class="slick-next">Next</button>',
});

$(".slider__testimonials").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  dots: true,
  autoplaySpeed: 3000,
});
