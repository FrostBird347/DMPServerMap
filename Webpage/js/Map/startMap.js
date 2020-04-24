//I have not touched this much
function startMap() {
	var previousBody = -1;
	var newBody;
	jQuery(document).ready(function($) {
		map = new L.KSP.Map('map', {
			layers: [L.KSP.CelestialBody.KERBIN],
			zoom: 1,
			center: [-0.1027, -74.5754],
			bodyControl: true,
			layerControl: false,
			scaleControl: true
		});
		map.fitWorld();
		map.setMaxBounds(new L.LatLngBounds([-90 * 2, -180 * 2], [90 * 2, 180 * 2]));
		rawData = [
			[0]
		];
		var i = 0;
		resetMap()
		startMapUpdate()
	});
}