var map, autocomplete, service, place, mylat, mylng, option, infoWindow;
const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var marker = [];
let labelIndex = 0;


function initMap() {
  // Create the map.
  const cork = { lat: 51.8985, lng: -8.4756 };
  map = new google.maps.Map(document.getElementById("map"), {
    center: cork,
    zoom: 17,
  });



  const input = document.getElementById("autocomplete");

  autocomplete = new google.maps.places.Autocomplete(input);


  const infowindow = new google.maps.InfoWindow();
  const infowindowContent = document.getElementById("infowindow-content");
  infowindow.setContent(infowindowContent);

  service = new google.maps.places.PlacesService(map);


// Event listeners.
    autocomplete.addListener('place_changed', onPlaceChanged);
    document.getElementById('category').addEventListener('change', onPlaceChanged);
    

// Initialise info window to be displayed when clicking on a marker

infoWindow = new google.maps.InfoWindow({
        content: document.getElementById('info-content')
    });

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
                //types: ['bar', 'cafe', 'restaurant']
                types: ['cafe']
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

    else if ($("#shopping").is(':selected')) {
        if (place.geometry) {
            map.panTo(place.geometry.location);
            map.setZoom(14);
            var search = {
                bounds: map.getBounds(),
                types: ['store', 'shopping_mall']
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

    
    marker[i] = new google.maps.Marker({
    //  map,
    //    icon: image,
        icon : pinSymbol('blue'),
        title: place.name,
    //  position: place.geometry.location,
    animation: google.maps.Animation.DROP,
    position: place.geometry.location,
    label: labels[labelIndex++ % labels.length],
    map: map,
    });

       //marker.placeResult = place;
    
    marker[i].addListener("click", () => {
    infoWindow.open(map, marker[i]);
    });
   

   //setTimeout(dropMarker(i), i * 100);
   // addResult(place, i);

    const li = document.createElement("li");
    li.textContent =marker[i].label + ") " + place.name; 
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

function pinSymbol(color) {
    return {
        path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z',
        fillColor: color,
        fillOpacity: 1,
        strokeColor: '#000',
        strokeWeight: 2,
        scale: 1.2,
        labelOrigin: new google.maps.Point(0, -30)
    };
}