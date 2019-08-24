// toggle hamburger menu

$(document).ready(function() {
  $(".burger").click(function() {
    $(".menu-bar-links").toggleClass("active");
  });
});

// create menu script

$(document).ready(function() {
  $(".menu").click(function() {
    $(".sidebar").css("left", "0px");
    function showMenu() {
      $(".sidebar").css(
        "-webkit-clip-path",
        "polygon(0 0,100% 0,100% 100%,0% 100%)"
      );
      $(".menu").animate({ right: "-100" }, 300);
      $(".swiper-container").animate({ right: "-300" }, 300);
      $(".logo").animate({ left: "400" }, 300);
    }
    setTimeout(showMenu, 100);
  });

  $(".close").click(function() {
    $(".sidebar").css(
      "-webkit-clip-path",
      "polygon(0 0,0% 0,100% 100%,0% 100%)"
    );
    function hideMenu() {
      $(".sidebar").css("left", "-300px");
      $(".menu").animate({ right: "50" }, 300);
      $(".swiper-container").animate({ right: "0" }, 300);
      $(".logo").animate({ left: "10%" }, 300);
    }
    setTimeout(hideMenu, 300);

    function originalLayout() {
      $(".sidebar").css(
        "-webkit-clip-path",
        "polygon(0 0,100% 0,0% 100%,0% 100%)"
      );
    }
    setTimeout(originalLayout, 600);
  });
});

// initialization of swipper slider

var swiper = new Swiper(".swiper-container", {
  speed: 3000,
  autoplay: {
    delay: 3000
  },
  effect: "fade",
  grabCursor: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

// initialization of wow library

new WOW().init();

// init owl carousel

$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    itemsCustom: false,
    singleItem: false,
    itemsScaleUp: false,
    autoplayHoverPause: false,
    margin: 30,
    smartSpeed: 700,
    autoplay: true,
    loop: true,
    nav: false,
    dots: false,
    responsive: {
      0: { items: 1 },
      500: { items: 2 },
      800: { items: 3 }
    }
  });
});

// animsition navigate

$(document).ready(function() {
  $(".animsition-overlay").animsition({
    inClass: "overlay-slide-in-right",
    outClass: "overlay-slide-out-right",
    inDuration: 1500,
    outDuration: 800,
    linkElement: ".animsition-link",
    loading: true,
    loadingParentElement: "body",
    loadingClass: "animsition-loading",
    loadingInner: "",
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: ["animation-duration", "-webkit-animation-duration"],
    overlay: true,
    overlayClass: "animsition-overlay-slide",
    overlayParentElement: "body",
    transition: function(url) {
      window.location.href = url;
    }
  });
});

// header script

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 10) {
      $("header.fixed-header").addClass("sticky");
    } else {
      $("header.fixed-header").removeClass("sticky");
    }
  });
});
