function UpdateMarkerPath(Marker, Type, Planet, MarkerIDIndex, MapID, MapUpdate, IsNewMarker, element, icon, bindthing, CircleC) {
	var Point = element[10]
	var Point0 = new L.LatLng(element[0], element[1])
	var Point1 = new L.LatLng(Point[0], Point[1])
	var Point2 = new L.LatLng(Point[2], Point[3])
	var Point3 = new L.LatLng(Point[4], Point[5])
	var Point4 = new L.LatLng(Point[6], Point[7])
	var Point5 = new L.LatLng(Point[8], Point[9])
	var Points01 = [Point0, Point1]
	var Points12 = [Point1, Point2]
	var Points23 = [Point2, Point3]
	var Points34 = [Point3, Point4]
	var Points45 = [Point4, Point5]
	var PointLine01 = new L.Polyline(Points01, {
		color: CircleC,
		weight: 3,
		opacity: ( (element[11] / 100) * ( 0.85 - 0.70 ) ) + 0.70,
		smoothFactor: 1
	})
	var PointLine12 = new L.Polyline(Points12, {
		color: CircleC,
		weight: 2.5,
		opacity: ( (element[11] / 100) * ( 0.70 - 0.55 ) ) + 0.55,
		smoothFactor: 1
	})
	var PointLine23 = new L.Polyline(Points23, {
		color: CircleC,
		weight: 2,
		opacity: ( (element[11] / 100) * ( 0.55 - 0.40 ) ) + 0.40,
		smoothFactor: 1
	})
	var PointLine34 = new L.Polyline(Points34, {
		color: CircleC,
		weight: 1.5,
		opacity: ( (element[11] / 100) * ( 0.40 - 0.25 ) ) + 0.25,
		smoothFactor: 1
	})
	var PointLine45 = new L.Polyline(Points45, {
		color: CircleC,
		weight: 1,
		opacity: (element[11] / 100) * 0.25,
		smoothFactor: 1
	})
	var CircleZC = '#ff1b1b';
	switch (Type) {
		case 'F':
			CircleZC = '#6ae252';
			break;
		case 'V':
			CircleZC = '#53a0ff';
			break;
		case 'O':
			CircleZC = '#5f66ca';
			break;
		case 'K':
			CircleZC = '#5f89ca';
			break;
		case 'D':
			CircleZC = '#959595';
			break;
	}
	if (Type == "V" && icon.options.iconUrl.endsWith("markers-vessel-unknown.png")) {
		CircleZC = '#ff1b1b';
	}
	var Circle0 = new L.CircleMarker(Point0, {
		color: CircleZC,
		fillColor: CircleZC,
		fillOpacity: 1,
		stroke: true,
		opacity: 0.75,
		weight: 3,
		radius: 2,
		interactive: false
	})
	if (element[11] > 90) {
		var Circle1 = new L.CircleMarker(Point1, {
			color: CircleC,
			fillColor: CircleC,
			fillOpacity: ( (element[11] / 100) * ( 0.85 - 0.70 ) ) + 0.70,
			stroke: false,
			radius: 2 + ( 3 * ( 1 - (( element[11] - 90 ) / 10 ))),
			interactive: false
		})
	} else {
		var Circle1 = new L.CircleMarker(Point1, {
			color: CircleC,
			fillColor: CircleC,
			fillOpacity: ( (element[11] / 100) * ( 0.85 - 0.70 ) ) + 0.70,
			stroke: false,
			radius: 5,
			interactive: false
		})
	}
	var Circle2 = new L.CircleMarker(Point2, {
		color: CircleC,
		fillColor: CircleC,
		fillOpacity: ( (element[11] / 100) * ( 0.70 - 0.55 ) ) + 0.55,
		stroke: false,
		radius: 5,
		interactive: false
	})
	var Circle3 = new L.CircleMarker(Point3, {
		color: CircleC,
		fillColor: CircleC,
		fillOpacity: ( (element[11] / 100) * ( 0.55 - 0.40 ) ) + 0.40,
		stroke: false,
		radius: 5,
		interactive: false
	})
	var Circle4 = new L.CircleMarker(Point4, {
		color: CircleC,
		fillColor: CircleC,
		opacity: ( (element[11] / 100) * ( 0.40 - 0.25 ) ) + 0.25,
		stroke: false,
		radius: 5,
		interactive: false
	})
	var Circle5 = new L.CircleMarker(Point5, {
		color: CircleC,
		fillColor: CircleC,
		fillOpacity: (element[11] / 100) * 0.25,
		stroke: false,
		//strokeOpacity: (element[11] / 100) * 0.125,
		//weight: ( 30 * ( 1 - (element[11] / 100))),
		radius: 5,
		interactive: false
	})
	if (Type != "F" && element[4] != "0") {
		if (Planet == 0) {
			Circle1.addTo(L.KSP.CelestialBody.KERBOL.overlays.Orbit)
			Circle2.addTo(L.KSP.CelestialBody.KERBOL.overlays.Orbit)
			Circle3.addTo(L.KSP.CelestialBody.KERBOL.overlays.Orbit)
			Circle4.addTo(L.KSP.CelestialBody.KERBOL.overlays.Orbit)
			Circle5.addTo(L.KSP.CelestialBody.KERBOL.overlays.Orbit)
			Circle0.addTo(L.KSP.CelestialBody.KERBOL.overlays.Orbit)
			if (localStorage.getItem("DisplayOrbitPath") == "true") {
				PointLine01.addTo(L.KSP.CelestialBody.KERBOL.overlays.Orbit)
				PointLine12.addTo(L.KSP.CelestialBody.KERBOL.overlays.Orbit)
				PointLine23.addTo(L.KSP.CelestialBody.KERBOL.overlays.Orbit)
				PointLine34.addTo(L.KSP.CelestialBody.KERBOL.overlays.Orbit)
				PointLine45.addTo(L.KSP.CelestialBody.KERBOL.overlays.Orbit)
			}
		} else if (Planet == 1) {
			Circle1.addTo(L.KSP.CelestialBody.KERBIN.overlays.Orbit)
			Circle2.addTo(L.KSP.CelestialBody.KERBIN.overlays.Orbit)
			Circle3.addTo(L.KSP.CelestialBody.KERBIN.overlays.Orbit)
			Circle4.addTo(L.KSP.CelestialBody.KERBIN.overlays.Orbit)
			Circle5.addTo(L.KSP.CelestialBody.KERBIN.overlays.Orbit)
			Circle0.addTo(L.KSP.CelestialBody.KERBIN.overlays.Orbit)
			if (localStorage.getItem("DisplayOrbitPath") == "true") {
				PointLine01.addTo(L.KSP.CelestialBody.KERBIN.overlays.Orbit)
				PointLine12.addTo(L.KSP.CelestialBody.KERBIN.overlays.Orbit)
				PointLine23.addTo(L.KSP.CelestialBody.KERBIN.overlays.Orbit)
				PointLine34.addTo(L.KSP.CelestialBody.KERBIN.overlays.Orbit)
				PointLine45.addTo(L.KSP.CelestialBody.KERBIN.overlays.Orbit)
			}
		} else if (Planet == 2) {
			Circle1.addTo(L.KSP.CelestialBody.MUN.overlays.Orbit)
			Circle2.addTo(L.KSP.CelestialBody.MUN.overlays.Orbit)
			Circle3.addTo(L.KSP.CelestialBody.MUN.overlays.Orbit)
			Circle4.addTo(L.KSP.CelestialBody.MUN.overlays.Orbit)
			Circle5.addTo(L.KSP.CelestialBody.MUN.overlays.Orbit)
			Circle0.addTo(L.KSP.CelestialBody.MUN.overlays.Orbit)
			if (localStorage.getItem("DisplayOrbitPath") == "true") {
				PointLine01.addTo(L.KSP.CelestialBody.MUN.overlays.Orbit)
				PointLine12.addTo(L.KSP.CelestialBody.MUN.overlays.Orbit)
				PointLine23.addTo(L.KSP.CelestialBody.MUN.overlays.Orbit)
				PointLine34.addTo(L.KSP.CelestialBody.MUN.overlays.Orbit)
				PointLine45.addTo(L.KSP.CelestialBody.MUN.overlays.Orbit)
			}
		} else if (Planet == 3) {
			Circle1.addTo(L.KSP.CelestialBody.MINMUS.overlays.Orbit)
			Circle2.addTo(L.KSP.CelestialBody.MINMUS.overlays.Orbit)
			Circle3.addTo(L.KSP.CelestialBody.MINMUS.overlays.Orbit)
			Circle4.addTo(L.KSP.CelestialBody.MINMUS.overlays.Orbit)
			Circle5.addTo(L.KSP.CelestialBody.MINMUS.overlays.Orbit)
			Circle0.addTo(L.KSP.CelestialBody.MINMUS.overlays.Orbit)
			if (localStorage.getItem("DisplayOrbitPath") == "true") {
				PointLine01.addTo(L.KSP.CelestialBody.MINMUS.overlays.Orbit)
				PointLine12.addTo(L.KSP.CelestialBody.MINMUS.overlays.Orbit)
				PointLine23.addTo(L.KSP.CelestialBody.MINMUS.overlays.Orbit)
				PointLine34.addTo(L.KSP.CelestialBody.MINMUS.overlays.Orbit)
				PointLine45.addTo(L.KSP.CelestialBody.MINMUS.overlays.Orbit)
			}
		} else if (Planet == 4) {
			Circle1.addTo(L.KSP.CelestialBody.MOHO.overlays.Orbit)
			Circle2.addTo(L.KSP.CelestialBody.MOHO.overlays.Orbit)
			Circle3.addTo(L.KSP.CelestialBody.MOHO.overlays.Orbit)
			Circle4.addTo(L.KSP.CelestialBody.MOHO.overlays.Orbit)
			Circle5.addTo(L.KSP.CelestialBody.MOHO.overlays.Orbit)
			Circle0.addTo(L.KSP.CelestialBody.MOHO.overlays.Orbit)
			if (localStorage.getItem("DisplayOrbitPath") == "true") {
				PointLine01.addTo(L.KSP.CelestialBody.MOHO.overlays.Orbit)
				PointLine12.addTo(L.KSP.CelestialBody.MOHO.overlays.Orbit)
				PointLine23.addTo(L.KSP.CelestialBody.MOHO.overlays.Orbit)
				PointLine34.addTo(L.KSP.CelestialBody.MOHO.overlays.Orbit)
				PointLine45.addTo(L.KSP.CelestialBody.MOHO.overlays.Orbit)
			}
		} else if (Planet == 5) {
			Circle1.addTo(L.KSP.CelestialBody.EVE.overlays.Orbit)
			Circle2.addTo(L.KSP.CelestialBody.EVE.overlays.Orbit)
			Circle3.addTo(L.KSP.CelestialBody.EVE.overlays.Orbit)
			Circle4.addTo(L.KSP.CelestialBody.EVE.overlays.Orbit)
			Circle5.addTo(L.KSP.CelestialBody.EVE.overlays.Orbit)
			Circle0.addTo(L.KSP.CelestialBody.EVE.overlays.Orbit)
			if (localStorage.getItem("DisplayOrbitPath") == "true") {
				PointLine01.addTo(L.KSP.CelestialBody.EVE.overlays.Orbit)
				PointLine12.addTo(L.KSP.CelestialBody.EVE.overlays.Orbit)
				PointLine23.addTo(L.KSP.CelestialBody.EVE.overlays.Orbit)
				PointLine34.addTo(L.KSP.CelestialBody.EVE.overlays.Orbit)
				PointLine45.addTo(L.KSP.CelestialBody.EVE.overlays.Orbit)
			}
		} else if (Planet == 6) {
			Circle1.addTo(L.KSP.CelestialBody.DUNA.overlays.Orbit)
			Circle2.addTo(L.KSP.CelestialBody.DUNA.overlays.Orbit)
			Circle3.addTo(L.KSP.CelestialBody.DUNA.overlays.Orbit)
			Circle4.addTo(L.KSP.CelestialBody.DUNA.overlays.Orbit)
			Circle5.addTo(L.KSP.CelestialBody.DUNA.overlays.Orbit)
			Circle0.addTo(L.KSP.CelestialBody.DUNA.overlays.Orbit)
			if (localStorage.getItem("DisplayOrbitPath") == "true") {
				PointLine01.addTo(L.KSP.CelestialBody.DUNA.overlays.Orbit)
				PointLine12.addTo(L.KSP.CelestialBody.DUNA.overlays.Orbit)
				PointLine23.addTo(L.KSP.CelestialBody.DUNA.overlays.Orbit)
				PointLine34.addTo(L.KSP.CelestialBody.DUNA.overlays.Orbit)
				PointLine45.addTo(L.KSP.CelestialBody.DUNA.overlays.Orbit)
			}
		} else if (Planet == 7) {
			Circle1.addTo(L.KSP.CelestialBody.IKE.overlays.Orbit)
			Circle2.addTo(L.KSP.CelestialBody.IKE.overlays.Orbit)
			Circle3.addTo(L.KSP.CelestialBody.IKE.overlays.Orbit)
			Circle4.addTo(L.KSP.CelestialBody.IKE.overlays.Orbit)
			Circle5.addTo(L.KSP.CelestialBody.IKE.overlays.Orbit)
			Circle0.addTo(L.KSP.CelestialBody.IKE.overlays.Orbit)
			if (localStorage.getItem("DisplayOrbitPath") == "true") {
				PointLine01.addTo(L.KSP.CelestialBody.IKE.overlays.Orbit)
				PointLine12.addTo(L.KSP.CelestialBody.IKE.overlays.Orbit)
				PointLine23.addTo(L.KSP.CelestialBody.IKE.overlays.Orbit)
				PointLine34.addTo(L.KSP.CelestialBody.IKE.overlays.Orbit)
				PointLine45.addTo(L.KSP.CelestialBody.IKE.overlays.Orbit)
			}
		} else if (Planet == 8) {
			Circle1.addTo(L.KSP.CelestialBody.JOOL.overlays.Orbit)
			Circle2.addTo(L.KSP.CelestialBody.JOOL.overlays.Orbit)
			Circle3.addTo(L.KSP.CelestialBody.JOOL.overlays.Orbit)
			Circle4.addTo(L.KSP.CelestialBody.JOOL.overlays.Orbit)
			Circle5.addTo(L.KSP.CelestialBody.JOOL.overlays.Orbit)
			Circle0.addTo(L.KSP.CelestialBody.JOOL.overlays.Orbit)
			if (localStorage.getItem("DisplayOrbitPath") == "true") {
				PointLine01.addTo(L.KSP.CelestialBody.JOOL.overlays.Orbit)
				PointLine12.addTo(L.KSP.CelestialBody.JOOL.overlays.Orbit)
				PointLine23.addTo(L.KSP.CelestialBody.JOOL.overlays.Orbit)
				PointLine34.addTo(L.KSP.CelestialBody.JOOL.overlays.Orbit)
				PointLine45.addTo(L.KSP.CelestialBody.JOOL.overlays.Orbit)
			}
		} else if (Planet == 9) {
			Circle1.addTo(L.KSP.CelestialBody.LAYTHE.overlays.Orbit)
			Circle2.addTo(L.KSP.CelestialBody.LAYTHE.overlays.Orbit)
			Circle3.addTo(L.KSP.CelestialBody.LAYTHE.overlays.Orbit)
			Circle4.addTo(L.KSP.CelestialBody.LAYTHE.overlays.Orbit)
			Circle5.addTo(L.KSP.CelestialBody.LAYTHE.overlays.Orbit)
			Circle0.addTo(L.KSP.CelestialBody.LAYTHE.overlays.Orbit)
			if (localStorage.getItem("DisplayOrbitPath") == "true") {
				PointLine01.addTo(L.KSP.CelestialBody.LAYTHE.overlays.Orbit)
				PointLine12.addTo(L.KSP.CelestialBody.LAYTHE.overlays.Orbit)
				PointLine23.addTo(L.KSP.CelestialBody.LAYTHE.overlays.Orbit)
				PointLine34.addTo(L.KSP.CelestialBody.LAYTHE.overlays.Orbit)
				PointLine45.addTo(L.KSP.CelestialBody.LAYTHE.overlays.Orbit)
			}
		} else if (Planet == 10) {
			Circle1.addTo(L.KSP.CelestialBody.VALL.overlays.Orbit)
			Circle2.addTo(L.KSP.CelestialBody.VALL.overlays.Orbit)
			Circle3.addTo(L.KSP.CelestialBody.VALL.overlays.Orbit)
			Circle4.addTo(L.KSP.CelestialBody.VALL.overlays.Orbit)
			Circle5.addTo(L.KSP.CelestialBody.VALL.overlays.Orbit)
			Circle0.addTo(L.KSP.CelestialBody.VALL.overlays.Orbit)
			if (localStorage.getItem("DisplayOrbitPath") == "true") {
				PointLine01.addTo(L.KSP.CelestialBody.VALL.overlays.Orbit)
				PointLine12.addTo(L.KSP.CelestialBody.VALL.overlays.Orbit)
				PointLine23.addTo(L.KSP.CelestialBody.VALL.overlays.Orbit)
				PointLine34.addTo(L.KSP.CelestialBody.VALL.overlays.Orbit)
				PointLine45.addTo(L.KSP.CelestialBody.VALL.overlays.Orbit)
			}
		} else if (Planet == 11) {
			Circle1.addTo(L.KSP.CelestialBody.BOP.overlays.Orbit)
			Circle2.addTo(L.KSP.CelestialBody.BOP.overlays.Orbit)
			Circle3.addTo(L.KSP.CelestialBody.BOP.overlays.Orbit)
			Circle4.addTo(L.KSP.CelestialBody.BOP.overlays.Orbit)
			Circle5.addTo(L.KSP.CelestialBody.BOP.overlays.Orbit)
			Circle0.addTo(L.KSP.CelestialBody.BOP.overlays.Orbit)
			if (localStorage.getItem("DisplayOrbitPath") == "true") {
				PointLine01.addTo(L.KSP.CelestialBody.BOP.overlays.Orbit)
				PointLine12.addTo(L.KSP.CelestialBody.BOP.overlays.Orbit)
				PointLine23.addTo(L.KSP.CelestialBody.BOP.overlays.Orbit)
				PointLine34.addTo(L.KSP.CelestialBody.BOP.overlays.Orbit)
				PointLine45.addTo(L.KSP.CelestialBody.BOP.overlays.Orbit)
			}
		} else if (Planet == 12) {
			Circle1.addTo(L.KSP.CelestialBody.TYLO.overlays.Orbit)
			Circle2.addTo(L.KSP.CelestialBody.TYLO.overlays.Orbit)
			Circle3.addTo(L.KSP.CelestialBody.TYLO.overlays.Orbit)
			Circle4.addTo(L.KSP.CelestialBody.TYLO.overlays.Orbit)
			Circle5.addTo(L.KSP.CelestialBody.TYLO.overlays.Orbit)
			Circle0.addTo(L.KSP.CelestialBody.TYLO.overlays.Orbit)
			if (localStorage.getItem("DisplayOrbitPath") == "true") {
				PointLine01.addTo(L.KSP.CelestialBody.TYLO.overlays.Orbit)
				PointLine12.addTo(L.KSP.CelestialBody.TYLO.overlays.Orbit)
				PointLine23.addTo(L.KSP.CelestialBody.TYLO.overlays.Orbit)
				PointLine34.addTo(L.KSP.CelestialBody.TYLO.overlays.Orbit)
				PointLine45.addTo(L.KSP.CelestialBody.TYLO.overlays.Orbit)
			}
		} else if (Planet == 13) {
			Circle1.addTo(L.KSP.CelestialBody.GILLY.overlays.Orbit)
			Circle2.addTo(L.KSP.CelestialBody.GILLY.overlays.Orbit)
			Circle3.addTo(L.KSP.CelestialBody.GILLY.overlays.Orbit)
			Circle4.addTo(L.KSP.CelestialBody.GILLY.overlays.Orbit)
			Circle5.addTo(L.KSP.CelestialBody.GILLY.overlays.Orbit)
			Circle0.addTo(L.KSP.CelestialBody.GILLY.overlays.Orbit)
			if (localStorage.getItem("DisplayOrbitPath") == "true") {
				PointLine01.addTo(L.KSP.CelestialBody.GILLY.overlays.Orbit)
				PointLine12.addTo(L.KSP.CelestialBody.GILLY.overlays.Orbit)
				PointLine23.addTo(L.KSP.CelestialBody.GILLY.overlays.Orbit)
				PointLine34.addTo(L.KSP.CelestialBody.GILLY.overlays.Orbit)
				PointLine45.addTo(L.KSP.CelestialBody.GILLY.overlays.Orbit)
			}
		} else if (Planet == 14) {
			Circle1.addTo(L.KSP.CelestialBody.POL.overlays.Orbit)
			Circle2.addTo(L.KSP.CelestialBody.POL.overlays.Orbit)
			Circle3.addTo(L.KSP.CelestialBody.POL.overlays.Orbit)
			Circle4.addTo(L.KSP.CelestialBody.POL.overlays.Orbit)
			Circle5.addTo(L.KSP.CelestialBody.POL.overlays.Orbit)
			Circle0.addTo(L.KSP.CelestialBody.POL.overlays.Orbit)
			if (localStorage.getItem("DisplayOrbitPath") == "true") {
				PointLine01.addTo(L.KSP.CelestialBody.POL.overlays.Orbit)
				PointLine12.addTo(L.KSP.CelestialBody.POL.overlays.Orbit)
				PointLine23.addTo(L.KSP.CelestialBody.POL.overlays.Orbit)
				PointLine34.addTo(L.KSP.CelestialBody.POL.overlays.Orbit)
				PointLine45.addTo(L.KSP.CelestialBody.POL.overlays.Orbit)
			}
		} else if (Planet == 15) {
			Circle1.addTo(L.KSP.CelestialBody.DRES.overlays.Orbit)
			Circle2.addTo(L.KSP.CelestialBody.DRES.overlays.Orbit)
			Circle3.addTo(L.KSP.CelestialBody.DRES.overlays.Orbit)
			Circle4.addTo(L.KSP.CelestialBody.DRES.overlays.Orbit)
			Circle5.addTo(L.KSP.CelestialBody.DRES.overlays.Orbit)
			Circle0.addTo(L.KSP.CelestialBody.DRES.overlays.Orbit)
			if (localStorage.getItem("DisplayOrbitPath") == "true") {
				PointLine01.addTo(L.KSP.CelestialBody.DRES.overlays.Orbit)
				PointLine12.addTo(L.KSP.CelestialBody.DRES.overlays.Orbit)
				PointLine23.addTo(L.KSP.CelestialBody.DRES.overlays.Orbit)
				PointLine34.addTo(L.KSP.CelestialBody.DRES.overlays.Orbit)
				PointLine45.addTo(L.KSP.CelestialBody.DRES.overlays.Orbit)
			}
		} else if (Planet == 16) {
			Circle1.addTo(L.KSP.CelestialBody.EELOO.overlays.Orbit)
			Circle2.addTo(L.KSP.CelestialBody.EELOO.overlays.Orbit)
			Circle3.addTo(L.KSP.CelestialBody.EELOO.overlays.Orbit)
			Circle4.addTo(L.KSP.CelestialBody.EELOO.overlays.Orbit)
			Circle5.addTo(L.KSP.CelestialBody.EELOO.overlays.Orbit)
			Circle0.addTo(L.KSP.CelestialBody.EELOO.overlays.Orbit)
			if (localStorage.getItem("DisplayOrbitPath") == "true") {
				PointLine01.addTo(L.KSP.CelestialBody.EELOO.overlays.Orbit)
				PointLine12.addTo(L.KSP.CelestialBody.EELOO.overlays.Orbit)
				PointLine23.addTo(L.KSP.CelestialBody.EELOO.overlays.Orbit)
				PointLine34.addTo(L.KSP.CelestialBody.EELOO.overlays.Orbit)
				PointLine45.addTo(L.KSP.CelestialBody.EELOO.overlays.Orbit)
			}
		}

	}
}