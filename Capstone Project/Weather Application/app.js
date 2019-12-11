window.addEventListener('load',()=> {
	let long;
	let lat;
	let fahrenheit = true;
	let temperatureDescription = document.querySelector('.temperature-description');
	let temperatureDegree = document.querySelector('.temperature-degree');
	let temperatureType = document.querySelector('.FarOrCel');
	let locationTimeZone = document.querySelector('.location-timezone');
	const searchElement = document.querySelector('.city-search');
	const searchBox = new google.maps.places.SearchBox(searchElement);
	let proxy = 'https://cors-anywhere.herokuapp.com/';
	let api;
	
	

	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(position => {
			long = position.coords.longitude;
			lat = position.coords.latitude; 
			api = `${proxy}https://api.darksky.net/forecast/03af9c9f856c8c0e0408cda48b335ea9/${lat},${long}`;
			fetch(api)
			.then(response =>{
				return response.json();
			})
			.then(data => {
				const {temperature,summary, icon} = data.currently;
				temperatureDegree.textContent = temperature;
				temperatureDescription.textContent = summary;
				locationTimeZone.textContent = data.timezone.replace("_"," ");
				setIcons(icon, document.querySelector('.icon'));

			});
		});
	}
		
	searchBox.addListener('places_changed',()=> {
		const place = searchBox.getPlaces()[0];
		lat = place.geometry.location.lat();
		long = place.geometry.location.lng();
		if (place== null){
			return;
		} 
		api = `${proxy}https://api.darksky.net/forecast/03af9c9f856c8c0e0408cda48b335ea9/${lat},${long}`;
		fetch(api)
		.then(response =>{
			return response.json();
		})
		.then( data => {
			setWeatherData(data,place);
		});
	});
	

	

	temperatureDegree.addEventListener("click", tempConverter);

	function setWeatherData(data, place) {
		const {temperature, summary, icon} = data.currently;
		locationTimezone.textContent = place;
		temperatureDescription.textContent = temperature;
		temperatureDescription.textContent = summary;
		locationTimezone.textContent = place;
		setIcons(icon, document.querySelector('.icon'));
	}

	function setIcons(icon, iconID) {
		const skycons = new Skycons({color: "white"});
		const currentIcon = icon.replace(/-/g,"_").toUpperCase();
		skycons.play();
		return skycons.set(iconID, Skycons[currentIcon]);
	}

	function tempConverter() {
	    var temp = parseFloat(temperatureDegree.textContent);
	    var newTemp;
	    if (fahrenheit) {
	        newTemp = (temp-32) * (5/9);
	        temperatureType.textContent = "C";
	        fahrenheit = false;
	    }
	    else {
	        newTemp = temp * (9/5) + 32;
	        temperatureType.textContent = "F";
	        fahrenheit = true;
	    }
	    temperatureDegree.textContent = newTemp.toFixed(2);
	}
});

