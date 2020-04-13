async function MapFix() {
	  while (true) {
        await AsyncAwaitThing(250)
        SetCredits()
        StatusH()
        $(function() {
        $(".leaflet-map-pane").each(function() {
        $("img").each(function() {
        if (this.src.startsWith(new URL("./img/AltTileLoad.png?", document.baseURI).href)) {
          	var NewSrc = this.src.replace(new URL("./img/AltTileLoad.png?", window.location.href).href, "http://d3kmnwgldcmvsd.cloudfront.net/tiles/");
            this.src = NewSrc + ".png";
        	let clone = this.cloneNode( true );
        	let clone2 = this.cloneNode( true );
        	this.parentElement.appendChild( clone );
        	this.parentElement.appendChild( clone2 );
        	clone.src = this.src.replace("http://d3kmnwgldcmvsd.cloudfront.net/tiles/", "https://ksp.deringenieur.net/kmaps/tiles/");
        	clone2.style.opacity = 0.25
        	clone2.style.zIndex = 1
        	this.src = "./img/AltTileLoad2.png"
        	this.remove()
        	clone.alt = ""
        	clone2.alt = ""
        	clone.classList.add("leaflet-tile-loaded");
        	clone2.classList.add("leaflet-tile-loaded");
        	clone.style.visibility = "visible"
        	clone2.style.visibility = "visible"
        }
        });
     });
     })
}
}


function AsyncAwaitThing(waitms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, waitms);
  });
}

