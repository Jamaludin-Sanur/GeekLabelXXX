var GeekLabel = GeekLabel || {};;

window.onload = function(){
	GeekLabel.loadScript();
}

GeekLabel.loadScript = function(){
	var gMapScript = document.createElement('script');
	gMapScript.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyArSEY62mjET8ZuD7DE9KhyGb5OL3XAbe8&callback=GeekLabel.loadMap";
	document.head.appendChild(gMapScript);
}

GeekLabel.loadMap = function(){
		let allMaps = document.getElementsByClassName("maps_google");
		for(let i=0; i<allMaps.length; i++){
			let dom = allMaps[i];
			let map = new google.maps.Map(dom, {
			  center: {lat: 51.524451, lng: -0.073866},
			  zoom:  16
			});
		}
}

