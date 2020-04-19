function SetCredits() {
	document.getElementsByClassName("leaflet-control-attribution")[0].style.textAlign = "right"
	document.getElementsByClassName("leaflet-control-attribution")[0].innerHTML = "<a target='_blank' href='https://github.com/FrostBird347/DMPServerMap/blob/master/Credits.md#Map'>Map credits</a> - <a target='_blank' href='https://github.com/FrostBird347/DMPServerMap/blob/master/Credits.md'>Full list of credits</a><br>" + "Powered by <a href='http://leafletjs.com'>Leaflet</a> — Map data © Joel Pedraza"
}