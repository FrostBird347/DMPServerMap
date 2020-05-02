function UpdateMarkerPath(Marker, Type, Planet, MarkerIDIndex, MapID, MapUpdate, IsNewMarker, element, icon, bindthing, CircleC) {
	var Point = element[10]
	var Point0 = new L.LatLng(element[0], element[1])
	var Point1 = new L.LatLng(Point[0], Point[1])
	var Point2 = new L.LatLng(Point[2], Point[3])
	var Point3 = new L.LatLng(Point[4], Point[5])
	var Point4 = new L.LatLng(Point[6], Point[7])
	var Point5 = new L.LatLng(Point[8], Point[9])
	var Circle0 = new L.CircleMarker(Point0, {
		color: CircleC,
		fillColor: CircleC,
		fillOpacity: 1,
		stroke: false,
		radius: 5,
		interactive: false
	})
	var Circle1 = new L.CircleMarker(Point1, {
		color: CircleC,
		fillColor: CircleC,
		fillOpacity: 0.85,
		stroke: false,
		radius: 5,
		interactive: false
	})
	var Circle2 = new L.CircleMarker(Point2, {
		color: CircleC,
		fillColor: CircleC,
		fillOpacity: 0.70,
		stroke: false,
		radius: 5,
		interactive: false
	})
	var Circle3 = new L.CircleMarker(Point3, {
		color: CircleC,
		fillColor: CircleC,
		fillOpacity: 0.55,
		stroke: false,
		radius: 5,
		interactive: false
	})
	var Circle4 = new L.CircleMarker(Point4, {
		color: CircleC,
		fillColor: CircleC,
		fillOpacity: 0.40,
		stroke: false,
		radius: 5,
		interactive: false
	})
	var Circle5 = new L.CircleMarker(Point5, {
		color: CircleC,
		fillColor: CircleC,
		fillOpacity: 0.25,
		stroke: false,
		radius: 5,
		interactive: false
	})
	if (Type != "F" && element[4] != "0") {
		if (Planet == 0) {
			Circle0.addTo(L.KSP.CelestialBody.KERBOL.overlays.Orbit)
			Circle1.addTo(L.KSP.CelestialBody.KERBOL.overlays.Orbit)
			Circle2.addTo(L.KSP.CelestialBody.KERBOL.overlays.Orbit)
			Circle3.addTo(L.KSP.CelestialBody.KERBOL.overlays.Orbit)
			Circle4.addTo(L.KSP.CelestialBody.KERBOL.overlays.Orbit)
			Circle5.addTo(L.KSP.CelestialBody.KERBOL.overlays.Orbit)
		} else if (Planet == 1) {
			Circle0.addTo(L.KSP.CelestialBody.KERBIN.overlays.Orbit)
			Circle1.addTo(L.KSP.CelestialBody.KERBIN.overlays.Orbit)
			Circle2.addTo(L.KSP.CelestialBody.KERBIN.overlays.Orbit)
			Circle3.addTo(L.KSP.CelestialBody.KERBIN.overlays.Orbit)
			Circle4.addTo(L.KSP.CelestialBody.KERBIN.overlays.Orbit)
			Circle5.addTo(L.KSP.CelestialBody.KERBIN.overlays.Orbit)
		} else if (Planet == 2) {
			Circle0.addTo(L.KSP.CelestialBody.MUN.overlays.Orbit)
			Circle1.addTo(L.KSP.CelestialBody.MUN.overlays.Orbit)
			Circle2.addTo(L.KSP.CelestialBody.MUN.overlays.Orbit)
			Circle3.addTo(L.KSP.CelestialBody.MUN.overlays.Orbit)
			Circle4.addTo(L.KSP.CelestialBody.MUN.overlays.Orbit)
			Circle5.addTo(L.KSP.CelestialBody.MUN.overlays.Orbit)
		} else if (Planet == 3) {
			Circle0.addTo(L.KSP.CelestialBody.MINMUS.overlays.Orbit)
			Circle1.addTo(L.KSP.CelestialBody.MINMUS.overlays.Orbit)
			Circle2.addTo(L.KSP.CelestialBody.MINMUS.overlays.Orbit)
			Circle3.addTo(L.KSP.CelestialBody.MINMUS.overlays.Orbit)
			Circle4.addTo(L.KSP.CelestialBody.MINMUS.overlays.Orbit)
			Circle5.addTo(L.KSP.CelestialBody.MINMUS.overlays.Orbit)
		} else if (Planet == 4) {
			Circle0.addTo(L.KSP.CelestialBody.MOHO.overlays.Orbit)
			Circle1.addTo(L.KSP.CelestialBody.MOHO.overlays.Orbit)
			Circle2.addTo(L.KSP.CelestialBody.MOHO.overlays.Orbit)
			Circle3.addTo(L.KSP.CelestialBody.MOHO.overlays.Orbit)
			Circle4.addTo(L.KSP.CelestialBody.MOHO.overlays.Orbit)
			Circle5.addTo(L.KSP.CelestialBody.MOHO.overlays.Orbit)
		} else if (Planet == 5) {
			Circle0.addTo(L.KSP.CelestialBody.EVE.overlays.Orbit)
			Circle1.addTo(L.KSP.CelestialBody.EVE.overlays.Orbit)
			Circle2.addTo(L.KSP.CelestialBody.EVE.overlays.Orbit)
			Circle3.addTo(L.KSP.CelestialBody.EVE.overlays.Orbit)
			Circle4.addTo(L.KSP.CelestialBody.EVE.overlays.Orbit)
			Circle5.addTo(L.KSP.CelestialBody.EVE.overlays.Orbit)
		} else if (Planet == 6) {
			Circle0.addTo(L.KSP.CelestialBody.DUNA.overlays.Orbit)
			Circle1.addTo(L.KSP.CelestialBody.DUNA.overlays.Orbit)
			Circle2.addTo(L.KSP.CelestialBody.DUNA.overlays.Orbit)
			Circle3.addTo(L.KSP.CelestialBody.DUNA.overlays.Orbit)
			Circle4.addTo(L.KSP.CelestialBody.DUNA.overlays.Orbit)
			Circle5.addTo(L.KSP.CelestialBody.DUNA.overlays.Orbit)
		} else if (Planet == 7) {
			Circle0.addTo(L.KSP.CelestialBody.IKE.overlays.Orbit)
			Circle1.addTo(L.KSP.CelestialBody.IKE.overlays.Orbit)
			Circle2.addTo(L.KSP.CelestialBody.IKE.overlays.Orbit)
			Circle3.addTo(L.KSP.CelestialBody.IKE.overlays.Orbit)
			Circle4.addTo(L.KSP.CelestialBody.IKE.overlays.Orbit)
			Circle5.addTo(L.KSP.CelestialBody.IKE.overlays.Orbit)
		} else if (Planet == 8) {
			Circle0.addTo(L.KSP.CelestialBody.JOOL.overlays.Orbit)
			Circle1.addTo(L.KSP.CelestialBody.JOOL.overlays.Orbit)
			Circle2.addTo(L.KSP.CelestialBody.JOOL.overlays.Orbit)
			Circle3.addTo(L.KSP.CelestialBody.JOOL.overlays.Orbit)
			Circle4.addTo(L.KSP.CelestialBody.JOOL.overlays.Orbit)
			Circle5.addTo(L.KSP.CelestialBody.JOOL.overlays.Orbit)
		} else if (Planet == 9) {
			Circle0.addTo(L.KSP.CelestialBody.LAYTHE.overlays.Orbit)
			Circle1.addTo(L.KSP.CelestialBody.LAYTHE.overlays.Orbit)
			Circle2.addTo(L.KSP.CelestialBody.LAYTHE.overlays.Orbit)
			Circle3.addTo(L.KSP.CelestialBody.LAYTHE.overlays.Orbit)
			Circle4.addTo(L.KSP.CelestialBody.LAYTHE.overlays.Orbit)
			Circle5.addTo(L.KSP.CelestialBody.LAYTHE.overlays.Orbit)
		} else if (Planet == 10) {
			Circle0.addTo(L.KSP.CelestialBody.VALL.overlays.Orbit)
			Circle1.addTo(L.KSP.CelestialBody.VALL.overlays.Orbit)
			Circle2.addTo(L.KSP.CelestialBody.VALL.overlays.Orbit)
			Circle3.addTo(L.KSP.CelestialBody.VALL.overlays.Orbit)
			Circle4.addTo(L.KSP.CelestialBody.VALL.overlays.Orbit)
			Circle5.addTo(L.KSP.CelestialBody.VALL.overlays.Orbit)
		} else if (Planet == 11) {
			Circle0.addTo(L.KSP.CelestialBody.BOP.overlays.Orbit)
			Circle1.addTo(L.KSP.CelestialBody.BOP.overlays.Orbit)
			Circle2.addTo(L.KSP.CelestialBody.BOP.overlays.Orbit)
			Circle3.addTo(L.KSP.CelestialBody.BOP.overlays.Orbit)
			Circle4.addTo(L.KSP.CelestialBody.BOP.overlays.Orbit)
			Circle5.addTo(L.KSP.CelestialBody.BOP.overlays.Orbit)
		} else if (Planet == 12) {
			Circle0.addTo(L.KSP.CelestialBody.TYLO.overlays.Orbit)
			Circle1.addTo(L.KSP.CelestialBody.TYLO.overlays.Orbit)
			Circle2.addTo(L.KSP.CelestialBody.TYLO.overlays.Orbit)
			Circle3.addTo(L.KSP.CelestialBody.TYLO.overlays.Orbit)
			Circle4.addTo(L.KSP.CelestialBody.TYLO.overlays.Orbit)
			Circle5.addTo(L.KSP.CelestialBody.TYLO.overlays.Orbit)
		} else if (Planet == 13) {
			Circle0.addTo(L.KSP.CelestialBody.GILLY.overlays.Orbit)
			Circle1.addTo(L.KSP.CelestialBody.GILLY.overlays.Orbit)
			Circle2.addTo(L.KSP.CelestialBody.GILLY.overlays.Orbit)
			Circle3.addTo(L.KSP.CelestialBody.GILLY.overlays.Orbit)
			Circle4.addTo(L.KSP.CelestialBody.GILLY.overlays.Orbit)
			Circle5.addTo(L.KSP.CelestialBody.GILLY.overlays.Orbit)
		} else if (Planet == 14) {
			Circle0.addTo(L.KSP.CelestialBody.POL.overlays.Orbit)
			Circle1.addTo(L.KSP.CelestialBody.POL.overlays.Orbit)
			Circle2.addTo(L.KSP.CelestialBody.POL.overlays.Orbit)
			Circle3.addTo(L.KSP.CelestialBody.POL.overlays.Orbit)
			Circle4.addTo(L.KSP.CelestialBody.POL.overlays.Orbit)
			Circle5.addTo(L.KSP.CelestialBody.POL.overlays.Orbit)
		} else if (Planet == 15) {
			Circle0.addTo(L.KSP.CelestialBody.DRES.overlays.Orbit)
			Circle1.addTo(L.KSP.CelestialBody.DRES.overlays.Orbit)
			Circle2.addTo(L.KSP.CelestialBody.DRES.overlays.Orbit)
			Circle3.addTo(L.KSP.CelestialBody.DRES.overlays.Orbit)
			Circle4.addTo(L.KSP.CelestialBody.DRES.overlays.Orbit)
			Circle5.addTo(L.KSP.CelestialBody.DRES.overlays.Orbit)
		} else if (Planet == 16) {
			Circle0.addTo(L.KSP.CelestialBody.EELOO.overlays.Orbit)
			Circle1.addTo(L.KSP.CelestialBody.EELOO.overlays.Orbit)
			Circle2.addTo(L.KSP.CelestialBody.EELOO.overlays.Orbit)
			Circle3.addTo(L.KSP.CelestialBody.EELOO.overlays.Orbit)
			Circle4.addTo(L.KSP.CelestialBody.EELOO.overlays.Orbit)
			Circle5.addTo(L.KSP.CelestialBody.EELOO.overlays.Orbit)
		}
		
	}
}