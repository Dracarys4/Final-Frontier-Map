var map = L.map('map', {
	crs: L.CRS.Simple,
	minZoom: -1,
	maxZoom: 10,
});

var FirstThree = [[0,0], [4000,4000]];
var galMinusOne = L.imageOverlay('images/GalacticMap.png', FirstThree).addTo(map);

//var galBoundsZero = [[1948.479, 1853.162], [2006.641, 1922.162]];

var galZero = L.imageOverlay('images/gZero.png', FirstThree);

var galOne = L.imageOverlay('images/gOne.png', FirstThree);

map.fitBounds(FirstThree);

map.on("zoomend", function(){
	zoomLev = map.getZoom();
//alert(zoomLev);
	if (zoomLev == 0){
		map.eachLayer(function (layer){
			map.removeLayer(layer)
		});
		galZero.addTo(map);
	}
	else if (zoomLev == 1){
		map.eachLayer(function (layer){
			map.removeLayer(layer)
		});
	 	galOne.addTo(map);
	}
	else{
		map.addLayer(galMinusOne);
	}
});






//map.fitBounds(solBounds);
// if(map.getZoom() > 2){
// 	solarSystem.addTo(map);
// 	map.remove(galacticMap);
// }
// if(map.getZoom() <= 2){
// 	galacticMap.addTo(map);
// 	map.remove(solarSystem);
// }

// if(map.hasLayer(galacticMap))
// {
//	map.fitBounds(galacticBounds);
// }
// else if(map.hasLayer(solarSystem))
// {
// 	map.fitBounds(solBounds);
// }


