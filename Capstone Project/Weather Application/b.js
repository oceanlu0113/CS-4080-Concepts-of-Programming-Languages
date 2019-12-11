function initialize() {
	var input = document.getElementById('stfield');
	var autocomplete = new google.maps.places.SearchBox(input);
}
google.maps.event.addDomListener(window, 'load', initialize);




