function SetCredits() {
    document.getElementsByClassName("leaflet-control-attribution")[0].style.textAlign = "right"
    document.getElementsByClassName("leaflet-control-attribution")[0].innerHTML = "<a target='_blank' href='https://github.com/FrostBird347/DMPServerMap/blob/master/Attributions.md#Map-Attributions'>Map attributions</a> - <a target='_blank' href='https://github.com/FrostBird347/DMPServerMap/blob/master/Attributions.md'>Full list of attributions</a><br>" + "Powered by <a href='http://leafletjs.com'>Leaflet</a> — Map data © Joel Pedraza"
}