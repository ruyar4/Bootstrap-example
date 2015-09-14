function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -35.4328002, lng: -71.5926578},
    zoom: 8
  });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
}
