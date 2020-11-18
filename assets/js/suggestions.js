function initMap() {
    const buenosaires = { lat: -34.6037, lng: -58.3816 }; 
    const map = new google.maps.Map(
        document.getElementById("suggestions-map"), {
            zoom : 12,
            center : buenosaires,
        });
    marker = new google.maps.Marker(
        {
        position: buenosaires,
        map,
        draggable: true,
        title: "Buenos Aires",
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