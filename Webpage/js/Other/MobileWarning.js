function MobileWarning() {
	if (DisplayTouchWarning() && localStorage.getItem("IgnoreTouchWarning") != "yes") {
		var mobile = 'ontouchstart' in document.documentElement;
		if (mobile) {
			screen.orientation.lock('landscape');
			try { 
				document.getElementById('map').style.display = 'none' ; document.getElementById('MobileWarning').remove()
			} catch { }
			//Some CSS taken from https://codepen.io/imprakash/pen/GgNMXO
			document.body.insertAdjacentHTML('afterBegin', "<div id='MobileWarning' style='position: fixed;display: block;width: 100%;height: 100%;top: 0;left: 0;right: 0;bottom: 0;background-color: rgba(0,0,0,0.75); z-index: 100000;'><div style='margin: 70px auto; padding: 20px; background: #fff; border-radius: 5px; position: relative;'><center><h2>Warning</h2><p>Touchscreen devices are not supported.</p><button onclick='document.getElementById(\"MobileWarning\").remove() ; document.getElementById(\"map\").style.display = \"block\"; localStorage.setItem(\"IgnoreTouchWarning\", \"yes\")' style='font-size: 1em; padding: 10px; color: #000; border-radius: 10px; text-decoration: none; cursor: pointer;'>Continue anyway</button></center></div></div>")
		}
	}
}