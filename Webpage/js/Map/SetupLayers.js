function SetupLayers() {
	if (!LayersReady) {
		var OrbitB = document.getElementsByClassName("leaflet-control-layers-overlays")[0].children[0].firstElementChild,
		SpaceCB = document.getElementsByClassName("leaflet-control-layers-overlays")[0].children[1].firstElementChild,
		VesselB = document.getElementsByClassName("leaflet-control-layers-overlays")[0].children[2].firstElementChild,
		DebrisB = document.getElementsByClassName("leaflet-control-layers-overlays")[0].children[3].firstElementChild,
		KerbalB = document.getElementsByClassName("leaflet-control-layers-overlays")[0].children[4].firstElementChild,
		FlagB = document.getElementsByClassName("leaflet-control-layers-overlays")[0].children[5].firstElementChild,
		SpaceObjB = document.getElementsByClassName("leaflet-control-layers-overlays")[0].children[6].firstElementChild,
		AnomalyB = document.getElementsByClassName("leaflet-control-layers-overlays")[0].children[7].firstElementChild,
		POIB = document.getElementsByClassName("leaflet-control-layers-overlays")[0].children[8].firstElementChild,
		SatM = document.getElementsByClassName("leaflet-control-layers-base")[0].children[0].firstElementChild,
		AltSatM = document.getElementsByClassName("leaflet-control-layers-base")[0].children[1].firstElementChild,
		HybridSatM = document.getElementsByClassName("leaflet-control-layers-base")[0].children[2].firstElementChild,
		ColorM = document.getElementsByClassName("leaflet-control-layers-base")[0].children[3].firstElementChild,
		SlopeM = document.getElementsByClassName("leaflet-control-layers-base")[0].children[4].firstElementChild,
		BiomeM = document.getElementsByClassName("leaflet-control-layers-base")[0].children[5].firstElementChild,
		LBiomeM = document.getElementsByClassName("leaflet-control-layers-base")[0].children[6].firstElementChild
		
		if (localStorage.getItem("SavedLayers") == null) {
			localStorage.setItem("SavedLayers", GetDefaultLayers());
			SavedLayersVar = localStorage.getItem("SavedLayers").split(',')
		} else {
			SavedLayersVar = localStorage.getItem("SavedLayers").split(',')
		}
		
		if (SavedLayersVar[0] == "true") {
			SetCheck(OrbitB, true)
		} else {
			SetCheck(OrbitB, false)
		}
		if (SavedLayersVar[1] == "true") {
			SetCheck(SpaceCB, true)
		} else {
			SetCheck(SpaceCB, false)
		}
		if (SavedLayersVar[2] == "true") {
			SetCheck(VesselB, true)
		} else {
			SetCheck(VesselB, false)
		}
		if (SavedLayersVar[3] == "true") {
			SetCheck(DebrisB, true)
		} else {
			SetCheck(DebrisB, false)
		}
		if (SavedLayersVar[4] == "true") {
			SetCheck(KerbalB, true)
		} else {
			SetCheck(KerbalB, false)
		}
		if (SavedLayersVar[5] == "true") {
			SetCheck(FlagB, true)
		} else {
			SetCheck(FlagB, false)
		}
		if (SavedLayersVar[6] == "true") {
			SetCheck(SpaceObjB, true)
		} else {
			SetCheck(SpaceObjB, false)
		}
		if (SavedLayersVar[7] == "true") {
			SetCheck(AnomalyB, true)
		} else {
			SetCheck(AnomalyB, false)
		}
		if (SavedLayersVar[8] == "true") {
			SetCheck(POIB, true)
		} else {
			SetCheck(POIB, false)
		}
		
		SetCheck(document.getElementsByClassName("leaflet-control-layers-base")[0].children[SavedLayersVar[9]].firstElementChild, true)
		
		window.onbeforeunload = function() {
			console.warn("Page is being closed!")
			document.getElementsByClassName("leaflet-control-celestialbodies-list")[0].children[3].firstElementChild.click();
			console.warn("Saving...")
			SaveLayers();
			console.warn("Saved!")
			return;
		};
		
		LayersReady = true
	}
}