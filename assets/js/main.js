$(document).ready(function () {
  var images = [
    "assets/img/luggage.jpg",
    "assets/img/maldives.jpg",
    "assets/img/eiffel-tower.jpg",
  ];

  var index = 0;

  setInterval(change_up, 5000);

  function change_up() {
    index = index + 1 < images.length ? index + 1 : 0;

    $("#home").fadeOut(5000, function () {
      $(this).css("background-image", "url(" + images[index] + ")");

      $(this).fadeIn(5000);
    });
  }
});
