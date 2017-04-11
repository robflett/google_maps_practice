var initialize = function(){

  var center = {lat: 58.552722, lng: -3.918369}
  var container = document.querySelector("#main-map");
  var mainMap = new MapWrapper(container, center, 12);
  var forteviotButton = document.querySelector("#forteviot-button")
  var melvichButton = document.querySelector("#melvich-button")

  mainMap.addMarker(center, mainMap);
  mainMap.addClickEvent();
  mainMap.addInfoWindow(center, "Melvich is a simple place")

  var findForteviot = function(){
    var forteviot = { lat: 56.340646, lng: -3.535601};
    mainMap.googleMap.setCenter(forteviot);
    mainMap.addInfoWindow(forteviot, "Forteviot is a special place");
  }

  var findMelvich = function(){
    var melvich = {lat: 58.552722, lng: -3.918369};
    mainMap.googleMap.setCenter(melvich);
    mainMap.addInfoWindow(melvich, "Melvich is a simple place")
  }

forteviotButton.onclick = findForteviot;
melvichButton.onclick = findMelvich;

}
window.onload = initialize;