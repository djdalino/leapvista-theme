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
});
