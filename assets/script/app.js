$(function() {
  // Navbar
  $("#handleOnHover").on("mouseover", function() {
    $(".nav__hover__wrapper").css({ display: "block" });
    $(".nav__hover__excess").css({ display: "block" });
  });

  $(".nav__hover__wrapper").on("mouseover", function() {
    $(this).css({ display: "block" });
    $(".nav__hover__excess").css({ display: "block" });
  });
  $("#handleOnHover").on("mouseleave", function() {
    $(".nav__hover__wrapper").css({ display: "none" });
    $(".nav__hover__excess").css({ display: "none" });
  });
  $(".nav__hover__excess").on("mouseover", function() {
    $(".nav__hover__wrapper").css({ display: "none" });
    $(".nav__hover__excess").css({ display: "none" });
  });

  $(".nav__menubar__burger").click(() => {
    $(".nav__menubar__burger").toggleClass("active");
    $(".nav__menu__modal").toggleClass("active");
    $(".line-1").toggleClass("toggle");
    $(".line-2").toggleClass("toggle");
    $(".line-3").toggleClass("toggle");
    $(".nav__menu__modal").toggleClass("active;");
  });

  // end of navbar

  // Slider
  let trans = 0;
  let x = 0;
  let imageLength = document.getElementsByClassName("image__slider__box");
  $("#countLength").text(imageLength.length);
  $("#count").text(x + 1);
  $(".next").click(() => {
    trans = trans + -100;
    x = x + 1;
    if (x >= imageLength.length) {
      trans = 0;
      x = 0;
    }
    $("#count").text(x + 1);
    $(".image__slider__box").css({ transform: `translate(${trans}%)` });
  });
  $(".prev").click(() => {
    trans = trans + 100;
    x = x - 1;
    if (x < 0) {
      x = imageLength.length - 1;
      trans = x * -100;
    }
    $("#count").text(x + 2 - 1);
    $(".image__slider__box").css({ transform: `translate(${trans}%)` });
  });
  // end of Slider

  // Mobile and Laptop Slider

  let ml_trans = 0;
  let ml_x = 0;
  let ml_imageLength = document.getElementsByClassName("ml__image__slide");
  console.log(ml_imageLength.length);
  $("#ml_countLength").text(ml_imageLength.length);
  $("#ml_count").text(ml_x + 1);
  $(".ml_next").click(() => {
    ml_trans = ml_trans + -100;
    ml_x = ml_x + 1;
    if (ml_x >= ml_imageLength.length) {
      ml_trans = 0;
      ml_x = 0;
    }
    $("#ml_count").text(ml_x + 1);
    console.log("clicked");
    console.log(ml_x);
    $(".ml__image__slide").css({ transform: `translate(${ml_trans}%)` });
    $(".ml__text__slide").css({ transform: `translate(${ml_trans}%)` });
  });
  $(".ml_prev").click(() => {
    ml_trans = ml_trans + 100;
    ml_x = ml_x - 1;
    if (ml_x < 0) {
      ml_x = ml_imageLength.length - 1;
      ml_trans = ml_x * -100;
    }
    $("#ml_count").text(ml_x + 2 - 1);
    console.log("clicked");
    $(".ml__image__slide").css({ transform: `translate(${ml_trans}%)` });
    $(".ml__text__slide").css({ transform: `translate(${ml_trans}%)` });
  });

  $(".mv__section__five__boxOne").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    centerMode: true,
    arrows: false,
    asNavFor: ".mv__slider"
  });

  $(".mv__s5__b2__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    asNavFor: ".mv__slider",
    arrows: false
  });

  $(".mv__s5__b3__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    asNavFor: ".mv__section__five__boxOne",
    arrows: false
  });

  $(".mv__section__five__boxFour").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    asNavFor: ".mv__section__five__boxOne",
    arrows: false
  });

  // Testimonial Slider
  $(".s4__slider__box").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    centerMode: true,
    arrows: true,
    variableWidth: true,
    nextArrow: $(".s4__slick-next"),
    prevArrow: $(".s4__slick-prev"),
    asNavFor: ".section__third__box"
  });

  $(".section__third__box").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    centerMode: true,
    arrows: false,
    variableWidth: true,
    infinite: true,
    asNavFor: ".s4__slider__box"
  });

  let lenghtOfTextBox = document.querySelectorAll("#mv__testimony");
  let mv__testimony__count = 1;

  $(".s4__slick-next").click(() => {
    if (mv__testimony__count >= lenghtOfTextBox.length) {
      mv__testimony__count = 0;
    }
    mv__testimony__count = mv__testimony__count + 1;
    $(".mv__first__num").text(mv__testimony__count);
  });
  $(".mv__last__num").text(lenghtOfTextBox.length);
  $(".mv__first__num").text(mv__testimony__count);
  // $(".mv__first__num").text(mv__testimony__count + 1);

  //End of Testimonial Slider
});
