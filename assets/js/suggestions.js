$(document).ready(function () {
  $("#paris").on("click", initMapPA);
});

$(document).ready(function () {
  $("#buenos_aires").on("click", initMapBA);
});

$(document).ready(function () {
  $("#cancun").on("click", initMapCA);
});

$(document).ready(function () {
  $("#cuba").on("click", initMapCU);
});

var map;
var coordinates = [
  {
    lat: 48.864716,
    lng: 2.349014,
  },
  {
    lat: -34.6037,
    lng: -58.3816,
  },
  {
    lat: 21.1619,
    lng: -86.8515,
  },
  {
    lat: 23.113592,
    lng: -82.366592,
  },
];
var markers = [];

function initMapPA() {
  const myLatLng = { lat: 51.8985, lng: -8.4756 };
  const map = new google.maps.Map(document.getElementById("suggestions-map"), {
    zoom: 6,
    center: coordinates[0],
  });

  var marker = new google.maps.Marker({
    position: coordinates[0],
    map: map,
    animation: google.maps.Animation.DROP,
  });
}

function initMapBA() {
  const myLatLng = { lat: 51.8985, lng: -8.4756 };
  const map = new google.maps.Map(document.getElementById("suggestions-map"), {
    zoom: 6,
    center: coordinates[1],
  });

  var marker = new google.maps.Marker({
    position: coordinates[1],
    map: map,
    animation: google.maps.Animation.DROP,
  });
}

function initMapCA() {
  const myLatLng = { lat: 51.8985, lng: -8.4756 };
  const map = new google.maps.Map(document.getElementById("suggestions-map"), {
    zoom: 6,
    center: coordinates[2],
  });

  var marker = new google.maps.Marker({
    position: coordinates[2],
    map: map,
    animation: google.maps.Animation.DROP,
  });
}

function initMapCU() {
  const myLatLng = { lat: 51.8985, lng: -8.4756 };
  const map = new google.maps.Map(document.getElementById("suggestions-map"), {
    zoom: 6,
    center: coordinates[3],
  });

  var marker = new google.maps.Marker({
    position: coordinates[3],
    map: map,
    animation: google.maps.Animation.DROP,
  });
}

function displayMap() {
  var x = document.getElementById("suggestions-map");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else if (x.style.display === "block"){
    x.style.display = "block";
  }
}
