var autocomplete;
var place;
var mylat;
var mylng;
var option;

function initMap() {
  // Create the map.
  const cork = { lat: 51.8985, lng: -8.4756 };
  const map = new google.maps.Map(document.getElementById("map"), {
    center: cork,
    zoom: 17,
  });

  const input = document.getElementById("autocomplete");

  autocomplete = new google.maps.places.Autocomplete(input);

  autocomplete.addListener("place_changed", function () {
    // Create the places service.

    
    const service = new google.maps.places.PlacesService(map);
    let getNextPage;
    const moreButton = document.getElementById("more");

    moreButton.onclick = function () {
      moreButton.disabled = true;

      if (getNextPage) {
        getNextPage();
      }
    };

    // Extract coordinates of the input location

    place = autocomplete.getPlace();
    mylat = place.geometry.location.lat();
    mylng = place.geometry.location.lng();

    // Perform a nearby search

    if ($("#accommodation").is(':selected')){
       option = "lodging";
    }

    service.nearbySearch(
      {
        location: { lat: mylat, lng: mylng },
        radius: 1000,
        type: option,
      },
      (results, status, pagination) => {
        if (status !== "OK") return;
        createMarkers(results, map);
        moreButton.disabled = !pagination.hasNextPage;

        if (pagination.hasNextPage) {
          getNextPage = pagination.nextPage;
        }
      }
    );
  });
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
    new google.maps.Marker({
      map,
      icon: image,
      title: place.name,
      position: place.geometry.location,
      animation: google.maps.Animation.DROP,
    });
    const li = document.createElement("li");
    li.textContent = place.name;
    placesList.appendChild(li);
    bounds.extend(place.geometry.location);
  }
  map.fitBounds(bounds);
}
