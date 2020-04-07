
const mainNav = document.querySelector(".main-nav");

var scrollLink = $(".scroll");

// Smooth scrolling
scrollLink.click(function(e) {
  e.preventDefault();
  $("body, html").animate(
    {
      scrollTop: $(this.hash).offset().top
    },
    1000
  );
});

// Active link switching
$(window).scroll(function() {
  var scrollbarLocation = $(this).scrollTop();

  scrollLink.each(function() {
    var sectionOffset = $(this.hash).offset().top - 20;
    function scrollFunction() {
      if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        document.getElementById("navbar").style.top = "0";
              $(this)
        .parent()
        .addClass("active");
              $(this)
        .parent()
        .siblings()
        .removeClass("active");
      } else {
        document.getElementById("navbar").style.top = "0";
      }
    }
  });
});