$(document).ready(function () {
  var today = new Date();

  var date =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();

    document.getElementById("p1").innerHTML = date;

  updateTime();

  // This function update time by setting setTimeout

  function updateTime() {
    var todayDyn = new Date();
    var h = addZero(todayDyn.getHours());
    var m = addZero(todayDyn.getMinutes());
    var s = addZero(todayDyn.getSeconds());
    document.getElementById("p2").innerHTML = h + ":" + m + ":" + s;
    setTimeout(updateTime, 1000);
  }

  // This function add zeros dates and months
  function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  /*
$( "#icon-one" ).mouseenter(function() {
  $( "#log" ).show();
});

$( "#icon-one" ).mouseleave(function() {
  $( "#log" ).hide();
});
*/
});
