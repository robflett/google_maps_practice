var MapWrapper = function(container, coords, zoom){


  this.googleMap = new google.maps.Map(container, {
    center: coords, zoom: zoom
  });

  

  // console.log(this.infowindow);
  
}

MapWrapper.prototype = {



  addMarker: function(coords){
    var marker = new google.maps.Marker({
      position: coords, 
      map: this.googleMap
    });
    return marker;
  },

  addInfoWindow: function(coords, describePlace){
    var marker = this.addMarker(coords);
    marker.addListener('click', function() {
      var infowindow = new google.maps.InfoWindow({
        content: describePlace
      });
      infowindow.open(this.map, marker);
    });
  },

  addClickEvent: function(){
    google.maps.event.addListener(this.googleMap, "click", function(event){
        // console.log(event);
        // console.log(event.latLng.lat());
        // var position = { lat: event.latLng.lat(), 
          // lng: event.latLng.lng()}
        this.addMarker(event.latLng);
    }.bind(this))
    // bind(this) here refers to the larger context of this and not just the callback
  },

  geoLocate: function(){
      navigator.geolocation.getCurrentPosition(function(position) {
        var center = {lat: position.coords.latitude, lng: position.coords.longitude}; 
        this.googleMap.setCenter(center); 
        this.addMarker(center);
      }.bind(this)); 
    }

}
