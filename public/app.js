var initialize = function(){

  var center = {lat: 58.552722, lng: -3.918369}
  var container = document.querySelector("#main-map");
  var mainMap = new MapWrapper(container, center, 12);

  mainMap.addMarker(center, mainMap);
  mainMap.addClickEvent();
  mainMap.addInfoWindow(center, "Melvich is a simple place")


}
window.onload = initialize;