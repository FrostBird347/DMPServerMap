function RemoveOldMarker(MapMarkerArray, MarkerIDIndex) {
	var Planet = MapIDPlanet[MarkerIDIndex]
	console.debug("Removed: " + MapID[MarkerIDIndex])
	try {
		MapMarkerArray[MarkerIDIndex].setOpacity(0)
	} catch {}
	setTimeout(function () {
		if (Planet == 0) {
			try {
				L.KSP.CelestialBody.KERBOL.overlays.Vessels.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.KERBOL.overlays.SpaceObjects.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.KERBOL.overlays.Kerbals.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.KERBOL.overlays.Debris.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
		} else if (Planet == 1) {
			try {
				L.KSP.CelestialBody.KERBIN.overlays.Vessels.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.KERBIN.overlays.SpaceObjects.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.KERBIN.overlays.Kerbals.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.KERBIN.overlays.Flags.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.KERBIN.overlays.Debris.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
		} else if (Planet == 2) {
			try {
				L.KSP.CelestialBody.MUN.overlays.Vessels.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.MUN.overlays.SpaceObjects.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.MUN.overlays.Kerbals.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.MUN.overlays.Flags.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.MUN.overlays.Debris.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
		} else if (Planet == 3) {
				L.KSP.CelestialBody.MINMUS.overlays.Vessels.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.MINMUS.overlays.SpaceObjects.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.MINMUS.overlays.Kerbals.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.MINMUS.overlays.Flags.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.MINMUS.overlays.Debris.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
		} else if (Planet == 4) {
			try {
				L.KSP.CelestialBody.MOHO.overlays.Vessels.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.MOHO.overlays.SpaceObjects.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.MOHO.overlays.Kerbals.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.MOHO.overlays.Flags.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.MOHO.overlays.Debris.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
		} else if (Planet == 5) {
			try {
				L.KSP.CelestialBody.EVE.overlays.Vessels.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.EVE.overlays.SpaceObjects.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.EVE.overlays.Kerbals.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.EVE.overlays.Flags.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.EVE.overlays.Debris.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
		} else if (Planet == 6) {
			try {
				L.KSP.CelestialBody.DUNA.overlays.Vessels.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.DUNA.overlays.SpaceObjects.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.DUNA.overlays.Kerbals.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.DUNA.overlays.Flags.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.DUNA.overlays.Debris.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
		} else if (Planet == 7) {
			try {
				L.KSP.CelestialBody.IKE.overlays.Vessels.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.IKE.overlays.SpaceObjects.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.IKE.overlays.Kerbals.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.IKE.overlays.Flags.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.IKE.overlays.Debris.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
		} else if (Planet == 8) {
			try {
				L.KSP.CelestialBody.JOOL.overlays.Vessels.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.JOOL.overlays.SpaceObjects.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.JOOL.overlays.Kerbals.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.JOOL.overlays.Debris.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
		} else if (Planet == 9) {
			try {
				L.KSP.CelestialBody.LAYTHE.overlays.Vessels.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.LAYTHE.overlays.SpaceObjects.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.LAYTHE.overlays.Kerbals.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.LAYTHE.overlays.Flags.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.LAYTHE.overlays.Debris.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
		} else if (Planet == 10) {
			try {
				L.KSP.CelestialBody.VALL.overlays.Vessels.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.VALL.overlays.SpaceObjects.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.VALL.overlays.Kerbals.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.VALL.overlays.Flags.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.VALL.overlays.Debris.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
		} else if (Planet == 11) {
			try {
				L.KSP.CelestialBody.BOP.overlays.Vessels.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.BOP.overlays.SpaceObjects.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.BOP.overlays.Kerbals.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.BOP.overlays.Flags.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.BOP.overlays.Debris.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
		} else if (Planet == 12) {
			try {
				L.KSP.CelestialBody.TYLO.overlays.Vessels.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.TYLO.overlays.SpaceObjects.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.TYLO.overlays.Kerbals.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.TYLO.overlays.Flags.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.TYLO.overlays.Debris.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
		} else if (Planet == 13) {
			try {
				L.KSP.CelestialBody.GILLY.overlays.Vessels.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.GILLY.overlays.SpaceObjects.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.GILLY.overlays.Kerbals.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.GILLY.overlays.Flags.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.GILLY.overlays.Debris.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
		} else if (Planet == 14) {
			try {
				L.KSP.CelestialBody.POL.overlays.Vessels.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.POL.overlays.SpaceObjects.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.POL.overlays.Kerbals.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.POL.overlays.Flags.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.POL.overlays.Debris.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
		} else if (Planet == 15) {
			try {
				L.KSP.CelestialBody.DRES.overlays.Vessels.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.DRES.overlays.SpaceObjects.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.DRES.overlays.Kerbals.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.DRES.overlays.Flags.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.DRES.overlays.Debris.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
		} else if (Planet == 16) {
			try {
				L.KSP.CelestialBody.EELOO.overlays.Vessels.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.EELOO.overlays.SpaceObjects.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.EELOO.overlays.Kerbals.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.EELOO.overlays.Flags.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
			try {
				L.KSP.CelestialBody.EELOO.overlays.Debris.clearLayers(MapMarkerArray[MarkerIDIndex])
			} catch {}
		}
	}, 500);
	MapMarkerArray[MarkerIDIndex] = "REMOVED"
	MapID[MarkerIDIndex] = "REMOVED"
	MapIDUpdate[MarkerIDIndex] = "REMOVED"
	MapIDPlanet[MarkerIDIndex] = "REMOVED"
}