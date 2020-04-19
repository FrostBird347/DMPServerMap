function RemoveOldMarker(MapMarkerArray, MarkerIDIndex) {
	var Planet = MapIDPlanet[MarkerIDIndex]
	console.debug("Removed: " + MapID[MarkerIDIndex])
	if (Planet == 0) {
		//There is no map for the sun.
	} else if (Planet == 1) {
		try {
			L.KSP.CelestialBody.KERBIN.overlays.Vessels.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
		try {
			L.KSP.CelestialBody.KERBIN.overlays.SpaceObjects.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
		try {
			L.KSP.CelestialBody.KERBIN.overlays.Kerbals.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
		try {
			L.KSP.CelestialBody.KERBIN.overlays.Flags.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
		try {
			L.KSP.CelestialBody.KERBIN.overlays.Debris.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
	} else if (Planet == 2) {
		try {
			L.KSP.CelestialBody.MUN.overlays.Vessels.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
		try {
			L.KSP.CelestialBody.MUN.overlays.SpaceObjects.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
		try {
			L.KSP.CelestialBody.MUN.overlays.Kerbals.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
		try {
			L.KSP.CelestialBody.MUN.overlays.Flags.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
		try {
			L.KSP.CelestialBody.MUN.overlays.Debris.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
	} else if (Planet == 3) {
		try {
			L.KSP.CelestialBody.MINMUS.overlays.Vessels.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
		try {
			L.KSP.CelestialBody.MINMUS.overlays.SpaceObjects.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
		try {
			L.KSP.CelestialBody.MINMUS.overlays.Kerbals.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
		try {
			L.KSP.CelestialBody.MINMUS.overlays.Flags.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
		try {
			L.KSP.CelestialBody.MINMUS.overlays.Debris.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
	} else if (Planet == 4) {
		try {
			L.KSP.CelestialBody.MOHO.overlays.Vessels.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
		try {
			L.KSP.CelestialBody.MOHO.overlays.SpaceObjects.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
		try {
			L.KSP.CelestialBody.MOHO.overlays.Kerbals.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
		try {
			L.KSP.CelestialBody.MOHO.overlays.Flags.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
		try {
			L.KSP.CelestialBody.MOHO.overlays.Debris.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
	} else if (Planet == 5) {
		try {
			L.KSP.CelestialBody.EVE.overlays.Vessels.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
		try {
			L.KSP.CelestialBody.EVE.overlays.SpaceObjects.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
		try {
			L.KSP.CelestialBody.EVE.overlays.Kerbals.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
		try {
			L.KSP.CelestialBody.EVE.overlays.Flags.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
		try {
			L.KSP.CelestialBody.EVE.overlays.Debris.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
	} else if (Planet == 6) {
		try {
			L.KSP.CelestialBody.DUNA.overlays.Vessels.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
		try {
			L.KSP.CelestialBody.DUNA.overlays.SpaceObjects.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
		try {
			L.KSP.CelestialBody.DUNA.overlays.Kerbals.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
		try {
			L.KSP.CelestialBody.DUNA.overlays.Flags.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
		try {
			L.KSP.CelestialBody.DUNA.overlays.Debris.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
	} else if (Planet == 7) {
		try {
			L.KSP.CelestialBody.IKE.overlays.Vessels.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
		try {
			L.KSP.CelestialBody.IKE.overlays.SpaceObjects.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
		try {
			L.KSP.CelestialBody.IKE.overlays.Kerbals.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
		try {
			L.KSP.CelestialBody.IKE.overlays.Flags.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
		try {
			L.KSP.CelestialBody.IKE.overlays.Debris.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
	} else if (Planet == 8) {
		//There is no map for jool.
	} else if (Planet == 9) {
		try {
			L.KSP.CelestialBody.LAYTHE.overlays.Vessels.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
		try {
			L.KSP.CelestialBody.LAYTHE.overlays.SpaceObjects.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
		try {
			L.KSP.CelestialBody.LAYTHE.overlays.Kerbals.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
		try {
			L.KSP.CelestialBody.LAYTHE.overlays.Flags.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
		try {
			L.KSP.CelestialBody.LAYTHE.overlays.Debris.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
	} else if (Planet == 10) {
		try {
			L.KSP.CelestialBody.VALL.overlays.Vessels.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
		try {
			L.KSP.CelestialBody.VALL.overlays.SpaceObjects.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
		try {
			L.KSP.CelestialBody.VALL.overlays.Kerbals.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
		try {
			L.KSP.CelestialBody.VALL.overlays.Flags.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
		try {
			L.KSP.CelestialBody.VALL.overlays.Debris.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
	} else if (Planet == 11) {
		try {
			L.KSP.CelestialBody.BOP.overlays.Vessels.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
		try {
			L.KSP.CelestialBody.BOP.overlays.SpaceObjects.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
		try {
			L.KSP.CelestialBody.BOP.overlays.Kerbals.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
		try {
			L.KSP.CelestialBody.BOP.overlays.Flags.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
		try {
			L.KSP.CelestialBody.BOP.overlays.Debris.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
	} else if (Planet == 12) {
		try {
			L.KSP.CelestialBody.TYLO.overlays.Vessels.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
		try {
			L.KSP.CelestialBody.TYLO.overlays.SpaceObjects.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
		try {
			L.KSP.CelestialBody.TYLO.overlays.Kerbals.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
		try {
			L.KSP.CelestialBody.TYLO.overlays.Flags.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
		try {
			L.KSP.CelestialBody.TYLO.overlays.Debris.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
	} else if (Planet == 13) {
		try {
			L.KSP.CelestialBody.GILLY.overlays.Vessels.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
		try {
			L.KSP.CelestialBody.GILLY.overlays.SpaceObjects.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
		try {
			L.KSP.CelestialBody.GILLY.overlays.Kerbals.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
		try {
			L.KSP.CelestialBody.GILLY.overlays.Flags.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
		try {
			L.KSP.CelestialBody.GILLY.overlays.Debris.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
	} else if (Planet == 14) {
		try {
			L.KSP.CelestialBody.POL.overlays.Vessels.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
		try {
			L.KSP.CelestialBody.POL.overlays.SpaceObjects.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
		try {
			L.KSP.CelestialBody.POL.overlays.Kerbals.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
		try {
			L.KSP.CelestialBody.POL.overlays.Flags.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
		try {
			L.KSP.CelestialBody.POL.overlays.Debris.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
	} else if (Planet == 15) {
		try {
			L.KSP.CelestialBody.DRES.overlays.Vessels.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
		try {
			L.KSP.CelestialBody.DRES.overlays.SpaceObjects.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
		try {
			L.KSP.CelestialBody.DRES.overlays.Kerbals.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
		try {
			L.KSP.CelestialBody.DRES.overlays.Flags.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
		try {
			L.KSP.CelestialBody.DRES.overlays.Debris.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
	} else if (Planet == 16) {
		try {
			L.KSP.CelestialBody.EELOO.overlays.Vessels.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
		try {
			L.KSP.CelestialBody.EELOO.overlays.SpaceObjects.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
		try {
			L.KSP.CelestialBody.EELOO.overlays.Kerbals.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
		try {
			L.KSP.CelestialBody.EELOO.overlays.Flags.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
		try {
			L.KSP.CelestialBody.EELOO.overlays.Debris.removeLayer(MapMarkerArray[MarkerIDIndex])
		} catch {}
	}
	MapMarkerArray[MarkerIDIndex] = "REMOVED"
	MapID[MarkerIDIndex] = "REMOVED"
	MapIDUpdate[MarkerIDIndex] = "REMOVED"
	MapIDPlanet[MarkerIDIndex] = "REMOVED"
}