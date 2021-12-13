/*---=== AOS ===---*/
AOS.init();


/*---=== Navbar on scroll ===---*/
$(window).scroll(function() {
  if ($(window).scrollTop() > 47) {
    $(".navbar").addClass("navbar-bg");
    $("header .nav-link").css("color", "#333");
    $("header .col-3").css("color", "rgb(9, 88, 236)");
    $("header .col-9").css("color", "#666");
    $("header .num a").css("color", "#111");
  }
  else if ($(window).scrollTop() < 47 && $(window).width() > 992) {
    $(".navbar").removeClass("navbar-bg");
    $("header .nav-link").css("color", "#fff");
    $("header .col-3").css("color", "rgb(105, 189, 245)");
    $("header .col-9").css("color", "#ccc");
    $("header .num a").css("color", "#fff");
  }
})
/*---=== Navbar mobile ===---*/
if ($(window).width() < 992) {
  $("header .nav-link").css("color", "#333");
  $("header .nav-link").css("padding", "12px");
}


/*---=== Hero section ===---*/
var rect = $('#home')[0].getBoundingClientRect();
var mouse = {x: 0, y: 0, moved: false};

$("#home").mousemove(function(e) {
  mouse.moved = true;
  mouse.x = e.clientX - rect.left;
  mouse.y = e.clientY - rect.top;
});
 
// Ticker event will be called on every frame
TweenLite.ticker.addEventListener('tick', function(){
  if (mouse.moved){    
    parallaxIt(".parallax-icon", -60);
    parallaxIt(".parallax-img", -20);
  }
  mouse.moved = false;
});

function parallaxIt(target, movement) {
  TweenMax.to(target, 0.3, {
    x: (mouse.x - rect.width / 2) / rect.width * movement,
    y: (mouse.y - rect.height / 2) / rect.height * movement
  });
}

$(window).on('resize scroll', function(){
  rect = $('#home')[0].getBoundingClientRect();
})


/*---=== Stats section ===---*/
$(window).scroll(function() {
  let hT = $('#stats-section').offset().top,
    hH = $('#stats-section').outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
  if (wS > (hT+hH-wH - 200)){
    $('.counting').each(function() {
      var $this = $(this),
          countTo = $this.attr('data-count');
      $({ countNum: $this.text()}).animate({
        countNum: countTo
      }, {
        duration: 3000,
        easing:'linear',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
        }
      });  
    });
  }
});


jQuery(document).ready(function($) {
  "use strict";
  //  TESTIMONIALS CAROUSEL HOOK
  $('#customers-testimonials').owlCarousel({
      loop: true,
      center: true,
      items: 3,
      margin: 0,
      autoplay: true,
      dots:true,
      autoplayTimeout: 8500,
      smartSpeed: 450,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        1170: {
          items: 3
        }
      }
  });
});
