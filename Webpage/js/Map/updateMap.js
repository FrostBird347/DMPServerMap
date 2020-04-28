//Obtain JSON
function updateMap() {
	if (JSONURL == "http://httpbin.org/status/501") {
		console.error("\n---\nGetRemoteJSONUrl not set!\n---")
	}
	return new Promise(resolve => {
		setTimeout(() => {
			var txtFile = new XMLHttpRequest();
			txtFile.onreadystatechange = function() {
				var allText = "";
				if (txtFile.readyState === XMLHttpRequest.DONE && txtFile.status == 200) {
					allText = txtFile.responseText;
					if (JSON.stringify(JSON.parse(allText)) == LastUpdateMarkerJSON) {
						ServerStat = "<br><span style='color: #ff6a00; text-align: center;'>Server sent the same data!</span>"
					} else {
						ServerStat = "<br><span style='color: green; text-align: center;'>Server is online</span>"
					}
					UpdateMarkerJSON = JSON.parse(allText);
					LastUpdateMarkerJSON = JSON.stringify(JSON.parse(allText));
				} else if (txtFile.readyState === XMLHttpRequest.DONE) {
					ServerStat = "<br><span style='color: red; text-align: center;'>Failed to obtain server data.<br>Error code: " + txtFile.status; + "</span>"
				}
			}
			var seconds = new Date().getTime() / 1000;
			txtFile.open("GET", JSONURL + '?' + seconds, true);
			txtFile.send(null);
			resolve(UpdateMarkerJSON);
		}, GetJSONSpeed);
	});
}