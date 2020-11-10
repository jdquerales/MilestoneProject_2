var map, autocomplete, service, place, mylat, mylng, option;


function initMap() {
  // Create the map.
  const cork = { lat: 51.8985, lng: -8.4756 };
  map = new google.maps.Map(document.getElementById("map"), {
    center: cork,
    zoom: 17,
  });

  const input = document.getElementById("autocomplete");

  autocomplete = new google.maps.places.Autocomplete(input);
  service = new google.maps.places.PlacesService(map);


// Event listeners.
    autocomplete.addListener('place_changed', onPlaceChanged);
    document.getElementById('category').addEventListener('change', onPlaceChanged);
    
}

 function onPlaceChanged() {   
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
    if ($("#accommodation").is(':selected')) {
        if (place.geometry) {
            map.panTo(place.geometry.location);
            map.setZoom(14);
            var search = {
                bounds: map.getBounds(),
                types: ['lodging']
            };
            doNearbySearch(search);
        }
        else {
            $('#autocomplete').attr("placeholder", "Enter a town or city");
        }
    }
    else if ($("#bars").is(':selected')) {
        if (place.geometry) {
            map.panTo(place.geometry.location);
            map.setZoom(14);
            var search = {
                bounds: map.getBounds(),
                types: ['bar', 'cafe', 'restaurant']
            };
            doNearbySearch(search);
        }
        else {
            $('#autocomplete').attr("placeholder", "Enter a town or city");
        }
    }
    else if ($("#public").is(':selected')) {
        if (place.geometry) {
            map.panTo(place.geometry.location);
            map.setZoom(14);
            var search = {
                bounds: map.getBounds(),
                types: ['bus_station', 'subway_station', 'train_station', 'transit_station']
            };
            doNearbySearch(search);
        }
        else {
            $('#autocomplete').attr("placeholder", "Enter a town or city");
        }
    }
    else if ($("#takeaway").is(':selected')) {
        if (place.geometry) {
            map.panTo(place.geometry.location);
            map.setZoom(14);
            var search = {
                bounds: map.getBounds(),
                types: ['meal_takeaway', 'meal_delivery']
            };
            doNearbySearch(search);
        }
        else {
            $('#autocomplete').attr("placeholder", "Enter a town or city");
        }
    }
    else if ($("#tourist").is(':selected')) {
        if (place.geometry) {
            map.panTo(place.geometry.location);
            map.setZoom(14);
            var search = {
                bounds: map.getBounds(),
                types: ['art_gallery', 'museum', 'aquarium', 'amusement_park']
            };
            doNearbySearch(search);
        }
        else {
            $('#autocomplete').attr("placeholder", "Enter a town or city");
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


function doNearbySearch(search){

    service.nearbySearch(search,
      (results, status, pagination) => {
        if (status !== "OK") return;
        createMarkers(results, map);
        moreButton.disabled = !pagination.hasNextPage;

        if (pagination.hasNextPage) {
          getNextPage = pagination.nextPage;
        }
      }
    )
      

}


// Clear markers

function clearMarkers() {
   
}


// Reset function 

function reset() {
    
}

$("#reset").click(function(){
  document.location.reload(true);
});