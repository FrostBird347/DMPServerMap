//Orbit Body: https://wiki.kerbalspaceprogram.com/wiki/Orbit#Reference_code.
function AddMarker(Marker, Type, Planet, MarkerIDIndex, MapID, MapUpdate, IsNewMarker, element, icon, bindthing) {
	console.debug("Added: " + MapID[MarkerIDIndex])
	if (Type == "V") {
		if (Planet == 0) {
			//There is no map for the sun.
		} else if (Planet == 1) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.KERBIN.overlays.Vessels)
		} else if (Planet == 2) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.MUN.overlays.Vessels)
		} else if (Planet == 3) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.MINMUS.overlays.Vessels)
		} else if (Planet == 4) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.MOHO.overlays.Vessels)
		} else if (Planet == 5) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.EVE.overlays.Vessels)
		} else if (Planet == 6) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.DUNA.overlays.Vessels)
		} else if (Planet == 7) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.IKE.overlays.Vessels)
		} else if (Planet == 8) {
			//There is no map for jool.
		} else if (Planet == 9) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.LAYTHE.overlays.Vessels)
		} else if (Planet == 10) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.VALL.overlays.Vessels)
		} else if (Planet == 11) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.BOP.overlays.Vessels)
		} else if (Planet == 12) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.TYLO.overlays.Vessels)
		} else if (Planet == 13) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.GILLY.overlays.Vessels)
		} else if (Planet == 14) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.POL.overlays.Vessels)
		} else if (Planet == 15) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.DRES.overlays.Vessels)
		} else if (Planet == 16) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.EELOO.overlays.Vessels)
		} else {
			console.warn("UNKNOWN PLANET: " + Planet + ". Marker not added!")
			RemoveOldMarker(MapMarkerArray, MarkerIDIndex)
		}
	} else if (Type == "O") {
		if (Planet == 0) {
			//There is no map for the sun.
		} else if (Planet == 1) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.KERBIN.overlays.SpaceObjects)
		} else if (Planet == 2) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.MUN.overlays.SpaceObjects)
		} else if (Planet == 3) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.MINMUS.overlays.SpaceObjects)
		} else if (Planet == 4) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.MOHO.overlays.SpaceObjects)
		} else if (Planet == 5) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.EVE.overlays.SpaceObjects)
		} else if (Planet == 6) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.DUNA.overlays.SpaceObjects)
		} else if (Planet == 7) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.IKE.overlays.SpaceObjects)
		} else if (Planet == 8) {
			//There is no map for jool.
		} else if (Planet == 9) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.LAYTHE.overlays.SpaceObjects)
		} else if (Planet == 10) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.VALL.overlays.SpaceObjects)
		} else if (Planet == 11) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.BOP.overlays.SpaceObjects)
		} else if (Planet == 12) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.TYLO.overlays.SpaceObjects)
		} else if (Planet == 13) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.GILLY.overlays.SpaceObjects)
		} else if (Planet == 14) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.POL.overlays.SpaceObjects)
		} else if (Planet == 15) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.DRES.overlays.SpaceObjects)
		} else if (Planet == 16) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.EELOO.overlays.SpaceObjects)
		} else {
			console.warn("UNKNOWN PLANET: " + Planet + ". Marker not added!")
			RemoveOldMarker(MapMarkerArray, MarkerIDIndex)
		}
	} else if (Type == "K") {
		if (Planet == 0) {
			//There is no map for the sun.
		} else if (Planet == 1) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.KERBIN.overlays.Kerbals)
		} else if (Planet == 2) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.MUN.overlays.Kerbals)
		} else if (Planet == 3) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.MINMUS.overlays.Kerbals)
		} else if (Planet == 4) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.MOHO.overlays.Kerbals)
		} else if (Planet == 5) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.EVE.overlays.Kerbals)
		} else if (Planet == 6) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.DUNA.overlays.Kerbals)
		} else if (Planet == 7) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.IKE.overlays.Kerbals)
		} else if (Planet == 8) {
			//There is no map for jool.
		} else if (Planet == 9) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.LAYTHE.overlays.Kerbals)
		} else if (Planet == 10) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.VALL.overlays.Kerbals)
		} else if (Planet == 11) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.BOP.overlays.Kerbals)
		} else if (Planet == 12) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.TYLO.overlays.Kerbals)
		} else if (Planet == 13) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.GILLY.overlays.Kerbals)
		} else if (Planet == 14) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.POL.overlays.Kerbals)
		} else if (Planet == 15) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.DRES.overlays.Kerbals)
		} else if (Planet == 16) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.EELOO.overlays.Kerbals)
		} else {
			console.warn("UNKNOWN PLANET: " + Planet + ". Marker not added!")
			RemoveOldMarker(MapMarkerArray, MarkerIDIndex)
		}
	} else if (Type == "F") {
		if (Planet == 0) {
			//There is no map for the sun.
		} else if (Planet == 1) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.KERBIN.overlays.Flags)
		} else if (Planet == 2) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.MUN.overlays.Flags)
		} else if (Planet == 3) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.MINMUS.overlays.Flags)
		} else if (Planet == 4) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.MOHO.overlays.Flags)
		} else if (Planet == 5) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.EVE.overlays.Flags)
		} else if (Planet == 6) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.DUNA.overlays.Flags)
		} else if (Planet == 7) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.IKE.overlays.Flags)
		} else if (Planet == 8) {
			//There is no map for jool.
		} else if (Planet == 9) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.LAYTHE.overlays.Flags)
		} else if (Planet == 10) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.VALL.overlays.Flags)
		} else if (Planet == 11) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.BOP.overlays.Flags)
		} else if (Planet == 12) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.TYLO.overlays.Flags)
		} else if (Planet == 13) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.GILLY.overlays.Flags)
		} else if (Planet == 14) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.POL.overlays.Flags)
		} else if (Planet == 15) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.DRES.overlays.Flags)
		} else if (Planet == 16) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.EELOO.overlays.Flags)
		} else {
			console.warn("UNKNOWN PLANET: " + Planet + ". Marker not added!")
			RemoveOldMarker(MapMarkerArray, MarkerIDIndex)
		}
	} else if (Type == "D") {
		if (Planet == 0) {
			//There is no map for the sun.
		} else if (Planet == 1) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.KERBIN.overlays.Debris)
		} else if (Planet == 2) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.MUN.overlays.Debris)
		} else if (Planet == 3) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.MINMUS.overlays.Debris)
		} else if (Planet == 4) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.MOHO.overlays.Debris)
		} else if (Planet == 5) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.EVE.overlays.Debris)
		} else if (Planet == 6) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.DUNA.overlays.Debris)
		} else if (Planet == 7) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.IKE.overlays.Debris)
		} else if (Planet == 8) {
			//There is no map for jool.
		} else if (Planet == 9) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.LAYTHE.overlays.Debris)
		} else if (Planet == 10) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.VALL.overlays.Debris)
		} else if (Planet == 11) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.BOP.overlays.Debris)
		} else if (Planet == 12) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.TYLO.overlays.Debris)
		} else if (Planet == 13) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.GILLY.overlays.Debris)
		} else if (Planet == 14) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.POL.overlays.Debris)
		} else if (Planet == 15) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.DRES.overlays.Debris)
		} else if (Planet == 16) {
			MapMarkerArray[MarkerIDIndex] = Marker[0].addTo(L.KSP.CelestialBody.EELOO.overlays.Debris)
		} else {
			console.warn("UNKNOWN PLANET: " + Planet + ". Marker not added!")
			RemoveOldMarker(MapMarkerArray, MarkerIDIndex)
		}
	} else {
		console.warn("UNKNOWN TYPE: " + Type + ". Marker not added!")
		RemoveOldMarker(MapMarkerArray, MarkerIDIndex)
	}
}