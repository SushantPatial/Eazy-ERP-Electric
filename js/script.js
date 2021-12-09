/*---=== Navbar on scroll ===---*/
$(window).scroll(function() {
  if ($(window).scrollTop() > 47) {
    $(".navbar").addClass("navbar-bg");
    $("header .nav-link").css("color", "#333");
    $("header .col-3").css("color", "rgb(9, 88, 236)");
    $("header .col-9").css("color", "#666");
    $("header .num").css("color", "#111");
  }
  else if ($(window).scrollTop() < 47 && $(window).width() > 992) {
    $(".navbar").removeClass("navbar-bg");
    $("header .nav-link").css("color", "#fff");
    $("header .col-3").css("color", "rgb(105, 189, 245)");
    $("header .col-9").css("color", "#ccc");
    $("header .num").css("color", "#fff");
  }
})
/*---=== Navbar mobile ===---*/
if ($(window).width() < 992) {
  $("header .nav-link").css("color", "#333");
  $("header .nav-link").css("padding", "12px");
}