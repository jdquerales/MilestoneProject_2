function initMap() {
    const myLatLng = { lat: 51.8985, lng: -8.4756 };
    const map = new google.maps.Map(
        document.getElementById("map"), {
            zoom : 4,
            center : myLatLng,
        });
    marker = new google.maps.Marker(
        {
        position: myLatLng,
        map,
        draggable: true,
        title: "Hello World",
        animation: google.maps.Animation.DROP,
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

