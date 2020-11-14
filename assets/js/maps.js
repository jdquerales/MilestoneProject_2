// Define global variables
var map, autocomplete, service, place, mylat, mylng, option, infoWindow;
const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var marker = [];
let labelIndex = 0;


// Initialise Google Maps map

function initMap() {
  // Create the map
  const cork = { lat: 51.8985, lng: -8.4756 };
  map = new google.maps.Map(document.getElementById("map"), {
    center: cork,
    zoom: 17,
  });

  const input = document.getElementById("autocomplete");

  // Create autocomplete instance

  autocomplete = new google.maps.places.Autocomplete(input);

  const infowindow = new google.maps.InfoWindow();
  const infowindowContent = document.getElementById("infowindow-content");
  infowindow.setContent(infowindowContent);

  // Create PlacesService instance

  service = new google.maps.places.PlacesService(map);

  // Define event listeners
  autocomplete.addListener("place_changed", onPlaceChanged);
  document
    .getElementById("category")
    .addEventListener("change", onPlaceChanged);

  // Initialise info window instance to be displayed when clicking on a marker

  infoWindow = new google.maps.InfoWindow({
    content: document.getElementById("info-content"),
  });
}

function onPlaceChanged() {
  
  // Extract coordinates of the input location
  place = autocomplete.getPlace();

  if ($("#accommodation").is(":selected")) {
    if (place.geometry) {
      map.panTo(place.geometry.location);
      map.setZoom(14);
      var search = {
        bounds: map.getBounds(),
        types: ["lodging"],
      };
      doNearbySearch(search);
    } else {
      $("#autocomplete").attr("placeholder", "Enter a town or city");
    }
  } else if ($("#bars").is(":selected")) {
    if (place.geometry) {
      map.panTo(place.geometry.location);
      map.setZoom(14);
      var search = {
        bounds: map.getBounds(),
        types: ["bar", "cafe", "restaurant"],
        //types: ["cafe"],
      };
      doNearbySearch(search);
    } else {
      $("#autocomplete").attr("placeholder", "Enter a town or city");
    }
  } else if ($("#public").is(":selected")) {
    if (place.geometry) {
      map.panTo(place.geometry.location);
      map.setZoom(14);
      var search = {
        radius: 1000,
        bounds: map.getBounds(),
        types: [
          "bus_station",
          "subway_station",
          "train_station",
          "transit_station",
        ],
      };
      doNearbySearch(search);
    } else {
      $("#autocomplete").attr("placeholder", "Enter a town or city");
    }
  } else if ($("#takeaway").is(":selected")) {
    if (place.geometry) {
      map.panTo(place.geometry.location);
      map.setZoom(14);
      var search = {
        bounds: map.getBounds(),
        types: ["meal_takeaway", "meal_delivery"],
      };
      doNearbySearch(search);
    } else {
      $("#autocomplete").attr("placeholder", "Enter a town or city");
    }
  } else if ($("#tourist").is(":selected")) {
    if (place.geometry) {
      map.panTo(place.geometry.location);
      map.setZoom(14);
      var search = {
        bounds: map.getBounds(),
        types: ["art_gallery", "museum", "aquarium", "amusement_park"],
      };
      doNearbySearch(search);
    } else {
      $("#autocomplete").attr("placeholder", "Enter a town or city");
    }
  } else if ($("#shopping").is(":selected")) {
    if (place.geometry) {
      map.panTo(place.geometry.location);
      map.setZoom(14);
      var search = {
        bounds: map.getBounds(),
        types: ["store", "shopping_mall"],
      };
      doNearbySearch(search);
    } else {
      $("#autocomplete").attr("placeholder", "Enter a town or city");
    }
  }
}

function createMarkers(places, map) {
  const bounds = new google.maps.LatLngBounds();
  const placesList = document.getElementById("places");

  for (let i = 0, place; (place = places[i]); i++) {
    const image = {
      url: place.icon,
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(25, 25),
    };

    marker[i] = new google.maps.Marker({
      //  map,
      //    icon: image,
      icon: pinSymbol("#C0C0C0"),
      title: place.name,
      //  position: place.geometry.location,
      animation: google.maps.Animation.DROP,
      position: place.geometry.location,
      label: labels[labelIndex++ % labels.length],
      map: map,
    });

    marker[i].addListener("click", () => {
      infoWindow.open(map, marker[i]);
      buildInfoWindowContent(place);
    });

    const li = document.createElement("li");
    li.textContent = marker[i].label + ") " + place.name;
    placesList.appendChild(li);
    bounds.extend(place.geometry.location);
  }

  map.fitBounds(bounds);
}

function doNearbySearch(search) {
  service.nearbySearch(search, (results, status, pagination) => {
    if (status !== "OK") return;
    createMarkers(results, map);
    
    if (pagination.hasNextPage) {
      getNextPage = pagination.nextPage;
    }
  });
}

// Reset function

function reset() {
  clearMarkers();
}

$("#reset").click(function () {
  document.location.reload(true);
});

// Define customised icon on map

function pinSymbol(color) {
  return {
    path:
      "M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z",
    fillColor: color,
    fillOpacity: 1,
    strokeColor: "#FF4500",
    strokeWeight: 2,
    scale: 1.2,
    labelOrigin: new google.maps.Point(0, -30),
  };
}

// Build info contained in infoWindows on markers

function buildInfoWindowContent(place) {
  document.getElementById("iw-icon").innerHTML =
    '<img class="hotelIcon" ' + 'src="' + place.icon + '"/>';
  document.getElementById("iw-url").innerHTML = "<b>" + place.name + "</b>";
  document.getElementById("iw-address").textContent = place.vicinity;

  if (place.formatted_phone_number) {
    document.getElementById("iw-phone-row").style.display = "";
    document.getElementById("iw-phone").textContent =
      place.formatted_phone_number;
  } else {
    document.getElementById("iw-phone-row").style.display = "none";
  }

  // Assign a five-star rating to the place
  // to indicate the rating the place has earned, and a white star ('&#10025;')

  if (place.rating) {
    var ratingHtml = "";
    for (var i = 0; i < 5; i++) {
      if (place.rating < i + 0.5) {
        ratingHtml += "&#10025;";
      } else {
        ratingHtml += "&#10029;";
      }
      document.getElementById("iw-rating-row").style.display = "";
      document.getElementById("iw-rating").innerHTML = ratingHtml;
    }
  } else {
    document.getElementById("iw-rating-row").style.display = "none";
  }

  if (place.website) {
    var fullUrl = place.website;
    if (website === null) {
      website = "http://" + place.website + "/";
      fullUrl = website;
    }
    document.getElementById("iw-website-row").style.display = "";
    document.getElementById("iw-website").textContent = website;
  } else {
    document.getElementById("iw-website-row").style.display = "none";
  }
}

function clearMarkers() {
  for (var i = 0; i < marker.length; i++) {
    if (marker[i]) {
      marker[i].setMap(null);
    }
  }
  marker = [];
}
