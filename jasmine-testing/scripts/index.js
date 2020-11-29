
function updateTime(todayDyn) {   
    var h = addZero(todayDyn.getHours());
    var m = addZero(todayDyn.getMinutes());
    var s = addZero(todayDyn.getSeconds());
    document.getElementById("p2").innerHTML = h + ":" + m + ":" + s;
    setTimeout(updateTime, 1000);
     return h + ":" + m + ":" + s;
  }

  
  function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
