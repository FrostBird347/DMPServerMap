function SaveLayers() {
	try {
		if (!LayersReady) {
			SetupLayers()
		} else {
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
			LBiomeM = document.getElementsByClassName("leaflet-control-layers-base")[0].children[6].firstElementChild,
			FinalLayersChecked = [OrbitB.checked, SpaceCB.checked, VesselB.checked, DebrisB.checked, KerbalB.checked, FlagB.checked, SpaceObjB.checked, AnomalyB.checked, POIB.checked, 0]
			
			if (SatM.checked) {
				FinalLayersChecked[9] = 0
			} else if (AltSatM.checked) {
				FinalLayersChecked[9] = 1
			} else if (HybridSatM.checked) {
				FinalLayersChecked[9] = 2
			} else if (ColorM.checked) {
				FinalLayersChecked[9] = 3
			} else if (SlopeM.checked) {
				FinalLayersChecked[9] = 4
			} else if (BiomeM.checked) {
				FinalLayersChecked[9] = 5
			} else if (LBiomeM.checked) {
				FinalLayersChecked[9] = 6
			} else {
				FinalLayersChecked[9] = 0
			}
			
			localStorage.setItem("SavedLayers", FinalLayersChecked);
		}
	} catch {}
}