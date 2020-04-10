function UpdateMarker(Marker, Type, Planet, MarkerIDIndex, MapID, MapUpdate, IsNewMarker, element, icon, bindthing) {
    var WasOpen = false
    try {
        try {
            try {} catch {}
            WasOpen = MapMarkerArray[MarkerIDIndex].isPopupOpen()
        } catch {
            WasOpen = false
        }
        var MarkLat = Marker[0].getLatLng()["lat"]
        MarkLat = MarkLat.toString()
        var MarkLng = Marker[0].getLatLng()["lng"]
        MarkLng = MarkLng.toString()
        MapMarkerArray[MarkerIDIndex].setLatLng([MarkLat, MarkLng])
    } catch {}
    MapMarkerArray[MarkerIDIndex].setIcon(icon)
    MapMarkerArray[MarkerIDIndex].bindPopup(Marker[0]._popup._content)
    if (WasOpen) {
        MapMarkerArray[MarkerIDIndex].openPopup()
        Oldpopuptext = MapMarkerArray[MarkerIDIndex]._popup._content
    }
}