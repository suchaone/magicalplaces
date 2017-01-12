$(document).foundation();

$(document).ready(function() {
  $(".footnote-link").click(function(e) {
    e.preventDefault();
    var active = $(this).hasClass("active");
    $(".footnote-link").removeClass("active");
    $(".footnote-expanded").hide();
    if (!active) {
      $($(this).attr("href")).fadeIn();
      $(this).addClass("active");
    } 
  });
});
