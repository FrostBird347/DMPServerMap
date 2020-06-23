async function MapFix() {
	while (true) {
		await AsyncAwaitThing(250)
		SetCredits()
		StatusH()
		$(function() {
			$(".leaflet-map-pane").each(function() {
				$("img").each(function() {
					if (this.naturalWidth === 0) {
						this.classList.add("ZeroWidthIMG");
					} else if (this.classList.contains("ZeroWidthIMG")) {
						this.classList.remove("ZeroWidthIMG");
					}
					if (this.src.startsWith(new URL("./img/tiles/AltTileLoad.png?", document.baseURI).href)) {
						var NewSrc = this.src.replace(new URL("./img/tiles/AltTileLoad.png?", window.location.href).href, "http://d3kmnwgldcmvsd.cloudfront.net/tiles/");
						this.src = NewSrc + ".png";
						let clone = this.cloneNode(true);
						let clone2 = this.cloneNode(true);
						this.parentElement.appendChild(clone);
						this.parentElement.appendChild(clone2);
						clone.src = this.src.replace("http://d3kmnwgldcmvsd.cloudfront.net/tiles/", "https://ksp.deringenieur.net/kmaps/tiles/");
						clone2.style.opacity = 0.25
						clone2.style.zIndex = 1
						this.src = "./img/tiles/AltTileLoad2.png"
						this.remove()
						clone.alt = ""
						clone2.alt = ""
						clone.classList.add("leaflet-tile-loaded");
						clone2.classList.add("leaflet-tile-loaded");
						clone.style.visibility = "visible"
						clone2.style.visibility = "visible"
					} else if (this.src.startsWith(new URL("./img/tiles/nodata_kerbol.png?", document.baseURI).href)) {
						var NewSrc = this.src.replace(new URL("./img/tiles/nodata_kerbol.png?", window.location.href).href, "https://ksp.deringenieur.net/kmaps/tiles/gilly/");
						this.src = NewSrc + ".png";
						this.style.filter = "contrast(0.5) sepia(1) hue-rotate(3deg) contrast(2) saturate(2) brightness(1) grayscale(0.5) brightness(1.25) contrast(1.5)";
						this.classList.add("leaflet-tile");
					} else if (this.src.startsWith(new URL("./img/tiles/nodata_jool.png?", document.baseURI).href)) {
						var NewSrc = this.src.replace(new URL("./img/tiles/nodata_jool.png?color", window.location.href).href, "https://ksp.deringenieur.net/kmaps/tiles/bop/color");
						this.src = NewSrc + ".png";
						this.style.overflow = "hidden";
						this.style.filter = "contrast(0.125) sepia(1) hue-rotate(65deg) contrast(2) brightness(1.125) contrast(2) invert(1) hue-rotate(180deg)";
						this.classList.add("leaflet-tile");
					}
				});
			});
		})
		if (!LayersReady) {
			SetupLayers()
		}
	}
}

function AsyncAwaitThing(waitms) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve('resolved');
		}, waitms);
	});
}