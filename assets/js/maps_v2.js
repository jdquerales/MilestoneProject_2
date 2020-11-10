function initMap() {
    const myLatLng = { lat: 51.8985, lng: -8.4756 };
    const map = new google.maps.Map(
        document.getElementById("map"), {
            zoom : 15,
            center : myLatLng,
        });

    const card = document.getElementById("pac-card");
    const input = document.getElementById("pac-input");
    //map.controls[google.maps.ControlPosition.TOP_RIGHT].push(card);
    const autocomplete = new google.maps.places.Autocomplete(input, {types: ['(cities)'],
            componentRestrictions: { country: 'irl' }});

    autocomplete.bindTo("bounds", map);

    // Set the data fields to return when the user selects a place.
    autocomplete.setFields(["address_components", "geometry", "icon", "name", "rating"]);

  const infowindow = new google.maps.InfoWindow();
  const infowindowContent = document.getElementById("infowindow-content");
  infowindow.setContent(infowindowContent);

  marker = new google.maps.Marker({
    map,
    draggable: true,
    anchorPoint: new google.maps.Point(0, -29),
    animation: google.maps.Animation.DROP,
    label: "Here we are!",
  });

 autocomplete.addListener("place_changed", () => {
    infowindow.close();
    marker.setVisible(false);
    const place = autocomplete.getPlace();

    if (!place.geometry) {
      // User entered the name of a Place that was not suggested and
      // pressed the Enter key, or the Place Details request failed.
      window.alert("No details available for input: '" + place.name + "'");
      return;
    }

    // If the place has a geometry, then present it on a map.
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17); // Why 17? Because it looks good.
    }
    marker.setPosition(place.geometry.location);
    marker.setVisible(true);
    let address = "";

    if (place.address_components) {
      address = [
        (place.address_components[0] &&
          place.address_components[0].short_name) ||
          "",
        (place.address_components[1] &&
          place.address_components[1].short_name) ||
          "",
        (place.address_components[2] &&
          place.address_components[2].short_name) ||
          "",
      ].join(" ");
    }
    infowindowContent.children["place-icon"].src = place.icon;
    infowindowContent.children["place-name"].textContent = place.name;
    infowindowContent.children["place-address"].textContent = address;
    infowindow.open(map, marker);
  });

  marker.addListener("click", toggleBounce);
    
}

function toggleBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}

