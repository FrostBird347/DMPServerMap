async function startMapUpdate() {
    while (true) {
        const result = await updateMap();
        MapIDUpdate.forEach(function(part, index, FullArray) {
            try {
                if (part == "N") {
                    RemoveOldMarker(MapMarkerArray, index)
                }
            } catch {}
        })
        try {
            MapIDUpdate.forEach(function(part, index, FullArray) {
                if (FullArray[index] != "REMOVED") {
                    FullArray[index] = "N"
                }
            })
            UpdateStatusBarText(UpdateMarkerJSON.Main.Server)
            UpdateMarkerJSON.Main.ID.forEach((element) => {
                if (element[0] != "nil" && element[0] != "NaN") {
                	//xss fix
                	element.forEach(function(part, index, FullArray) {
                		FullArray[index] = basicxss(part)
                	})
                    //Height stuff
                    var height = Math.round(element[3])
                    var heightstatus = " m"
                    if (height > 1000000000) {
                        height = height / 10000000
                        height = Math.round(height)
                        height = height / 100
                        heightstatus = " Gm"
                    } else if (height > 1000000) {
                        height = height / 10000
                        height = Math.round(height)
                        height = height / 100
                        heightstatus = " Mm"
                    } else if (height > 1000) {
                        height = height / 10
                        height = Math.round(height)
                        height = height / 100
                        heightstatus = " km"
                    }
                    //Velocity stuff
                    var velocity = Math.round(element[4])
                    var velocitystatus = " m/s"
                    if (velocity > 1000000000) {
                        velocity = velocity / 10000000
                        velocity = Math.round(velocity)
                        velocity = velocity / 100
                        velocitystatus = " Gm/s"
                    } else if (velocity > 1000000) {
                        velocity = velocity / 10000
                        velocity = Math.round(velocity)
                        velocity = velocity / 100
                        velocitystatus = " Mm/s"
                    } else if (velocity > 1000) {
                        velocity = velocity / 10
                        velocity = Math.round(velocity)
                        velocity = velocity / 100
                        velocitystatus = " km/s"
                    }
                    if (element[8] == "") {
                    	element[8] = "<span style='color:red'>UNCLAIMED</span>"
                    	element[9] = "<span style='color:red'>None</span>"
                    }
                    MarkerMode = "V"
                    //https://kerbalspaceprogram.com/api/_vessel_8cs.html#afa39c7ec7cc0926b332fcd2d77425edb
                    var icon = L.KSP.Icon.VESSELUnknown
                    if (element[6] == "Debris") {
                        var newmarker = [L.marker([element[0], element[1]], {
                            icon: L.KSP.Icon.DEBRIS
                        }).bindPopup("<strong>" + element[5] + "</strong><br>" + Math.round(element[0]) + " : " + Math.round(element[1]) + "<br>Altitude: " + height + heightstatus + "<br>Velocity: " + velocity + velocitystatus + "<br>Type: " + element[6] + "<br>Owner: " + element[9] + "<br>Protection: " + element[8])];
                        icon = L.KSP.Icon.DEBRIS
                        MarkerMode = "D"
                    } else if (element[6] == "SpaceObject") {
                        var newmarker = [L.marker([element[0], element[1]], {
                            icon: L.KSP.Icon.VESSELSpaceObject
                        }).bindPopup("<strong>" + element[5] + "</strong><br>" + Math.round(element[0]) + " : " + Math.round(element[1]) + "<br>Altitude: " + height + heightstatus + "<br>Velocity: " + velocity + velocitystatus + "<br>Type: " + element[6] + "<br>Owner: " + element[9] + "<br>Protection: " + element[8])];
                        icon = L.KSP.Icon.VESSELSpaceObject
                        MarkerMode = "O"
                    } else if (element[6] == "Probe") {
                        var newmarker = [L.marker([element[0], element[1]], {
                            icon: L.KSP.Icon.VESSELProbe
                        }).bindPopup("<strong>" + element[5] + "</strong><br>" + Math.round(element[0]) + " : " + Math.round(element[1]) + "<br>Altitude: " + height + heightstatus + "<br>Velocity: " + velocity + velocitystatus + "<br>Type: " + element[6] + "<br>Owner: " + element[9] + "<br>Protection: " + element[8])];
                        icon = L.KSP.Icon.VESSELProbe
                        MarkerMode = "V"
                    } else if (element[6] == "Relay") {
                        var newmarker = [L.marker([element[0], element[1]], {
                            icon: L.KSP.Icon.VESSELRelay
                        }).bindPopup("<strong>" + element[5] + "</strong><br>" + Math.round(element[0]) + " : " + Math.round(element[1]) + "<br>Altitude: " + height + heightstatus + "<br>Velocity: " + velocity + velocitystatus + "<br>Type: " + element[6] + "<br>Owner: " + element[9] + "<br>Protection: " + element[8])];
                        icon = L.KSP.Icon.VESSELRelay
                        MarkerMode = "V"
                    } else if (element[6] == "Rover") {
                        var newmarker = [L.marker([element[0], element[1]], {
                            icon: L.KSP.Icon.VESSELRover
                        }).bindPopup("<strong>" + element[5] + "</strong><br>" + Math.round(element[0]) + " : " + Math.round(element[1]) + "<br>Altitude: " + height + heightstatus + "<br>Velocity: " + velocity + velocitystatus + "<br>Type: " + element[6] + "<br>Owner: " + element[9] + "<br>Protection: " + element[8])];
                        icon = L.KSP.Icon.VESSELRover
                        MarkerMode = "V"
                    } else if (element[6] == "Lander") {
                        var newmarker = [L.marker([element[0], element[1]], {
                            icon: L.KSP.Icon.VESSELLander
                        }).bindPopup("<strong>" + element[5] + "</strong><br>" + Math.round(element[0]) + " : " + Math.round(element[1]) + "<br>Altitude: " + height + heightstatus + "<br>Velocity: " + velocity + velocitystatus + "<br>Type: " + element[6] + "<br>Owner: " + element[9] + "<br>Protection: " + element[8])];
                        icon = L.KSP.Icon.VESSELLander
                        MarkerMode = "V"
                    } else if (element[6] == "Ship") {
                        var newmarker = [L.marker([element[0], element[1]], {
                            icon: L.KSP.Icon.VESSELShip
                        }).bindPopup("<strong>" + element[5] + "</strong><br>" + Math.round(element[0]) + " : " + Math.round(element[1]) + "<br>Altitude: " + height + heightstatus + "<br>Velocity: " + velocity + velocitystatus + "<br>Type: " + element[6] + "<br>Owner: " + element[9] + "<br>Protection: " + element[8])];
                        icon = L.KSP.Icon.VESSELShip
                        MarkerMode = "V"
                    } else if (element[6] == "Plane") {
                        var newmarker = [L.marker([element[0], element[1]], {
                            icon: L.KSP.Icon.VESSELPlane
                        }).bindPopup("<strong>" + element[5] + "</strong><br>" + Math.round(element[0]) + " : " + Math.round(element[1]) + "<br>Altitude: " + height + heightstatus + "<br>Velocity: " + velocity + velocitystatus + "<br>Type: " + element[6] + "<br>Owner: " + element[9] + "<br>Protection: " + element[8])];
                        icon = L.KSP.Icon.VESSELPlane
                        MarkerMode = "V"
                    } else if (element[6] == "Station") {
                        var newmarker = [L.marker([element[0], element[1]], {
                            icon: L.KSP.Icon.VESSELStation
                        }).bindPopup("<strong>" + element[5] + "</strong><br>" + Math.round(element[0]) + " : " + Math.round(element[1]) + "<br>Altitude: " + height + heightstatus + "<br>Velocity: " + velocity + velocitystatus + "<br>Type: " + element[6] + "<br>Owner: " + element[9] + "<br>Protection: " + element[8])];
                        MarkerMode = "V"
                        icon = L.KSP.Icon.VESSELStation
                    } else if (element[6] == "Base") {
                        var newmarker = [L.marker([element[0], element[1]], {
                            icon: L.KSP.Icon.VESSELBase
                        }).bindPopup("<strong>" + element[5] + "</strong><br>" + Math.round(element[0]) + " : " + Math.round(element[1]) + "<br>Altitude: " + height + heightstatus + "<br>Velocity: " + velocity + velocitystatus + "<br>Type: " + element[6] + "<br>Owner: " + element[9] + "<br>Protection: " + element[8])];
                        MarkerMode = "V"
                        icon = L.KSP.Icon.VESSELBase
                    } else if (element[6] == "EVA") {
                        var newmarker = [L.marker([element[0], element[1]], {
                            icon: L.KSP.Icon.VESSELEVA
                        }).bindPopup("<strong>" + element[5] + "</strong><br>" + Math.round(element[0]) + " : " + Math.round(element[1]) + "<br>Altitude: " + height + heightstatus + "<br>Velocity: " + velocity + velocitystatus + "<br>Type: " + element[6] + "<br>Owner: " + element[9] + "<br>Protection: " + element[8])];
                        MarkerMode = "K"
                        icon = L.KSP.Icon.VESSELEVA
                    } else if (element[6] == "Flag") {
                        var newmarker = [L.marker([element[0], element[1]], {
                            icon: L.KSP.Icon.VESSELFlag
                        }).bindPopup("<strong>" + element[5] + "</strong><br>" + Math.round(element[0]) + " : " + Math.round(element[1]) + "<br>Altitude: " + height + heightstatus + "<br>Velocity: " + velocity + velocitystatus + "<br>Type: " + element[6] + "<br>Owner: " + element[9] + "<br>Protection: " + element[8])];
                        MarkerMode = "F"
                        icon = L.KSP.Icon.VESSELFlag
                    } else if (element[6] == "DeployedScienceController") {
                        var newmarker = [L.marker([element[0], element[1]], {
                            icon: L.KSP.Icon.VESSELDeployedScienceController
                        }).bindPopup("<strong>" + element[5] + "</strong><br>" + Math.round(element[0]) + " : " + Math.round(element[1]) + "<br>Altitude: " + height + heightstatus + "<br>Velocity: " + velocity + velocitystatus + "<br>Type: " + element[6] + "<br>Owner: " + element[9] + "<br>Protection: " + element[8])];
                        MarkerMode = "V"
                        icon = L.KSP.Icon.VESSELDeployedScienceController
                    } else if (element[6] == "DeployedSciencePart") {
                        var newmarker = [L.marker([element[0], element[1]], {
                            icon: L.KSP.Icon.VESSELDeployedSciencePart
                        }).bindPopup("<strong>" + element[5] + "</strong><br>" + Math.round(element[0]) + " : " + Math.round(element[1]) + "<br>Altitude: " + height + heightstatus + "<br>Velocity: " + velocity + velocitystatus + "<br>Type: " + element[6] + "<br>Owner: " + element[9] + "<br>Protection: " + element[8])];
                        MarkerMode = "V"
                        icon = L.KSP.Icon.VESSELDeployedSciencePart
                    } else {
                        var newmarker = [L.marker([element[0], element[1]], {
                            icon: L.KSP.Icon.VESSELUnknown
                        }).bindPopup("<strong>" + element[5] + "</strong><br>" + Math.round(element[0]) + " : " + Math.round(element[1]) + "<br>Altitude: " + height + heightstatus + "<br>Velocity: " + velocity + velocitystatus + "<br>Type: " + element[6] + "<br>Owner: " + element[9] + "<br>Protection: " + element[8])];
                        MarkerMode = "V"
                        icon = L.KSP.Icon.VESSELUnknown
                    }
                    var MarkerIDIndex = "None"
                    var IsNewMarker = "N"
                    if (element[2] != 0 && element[2] != 8) {
                        MapID.forEach(function(part, index, FullArray) {
                            if (part == element[7]) {
                                MarkerIDIndex = index
                            }
                        });
                        if (MarkerIDIndex == "None") {
                            MarkerIDIndex = MapID.push(element[7]) - 1
                            MapIDUpdate.push("Y")
                            IsNewMarker = "Y"
                            MapIDPlanet.push(element[2])
                        }
                        var bindthing = "<strong>" + element[5] + "</strong><br>" + Math.round(element[0]) + " : " + Math.round(element[1]) + "<br>Altitude: " + height + heightstatus + "<br>Velocity: " + velocity + velocitystatus + "<br>Type: " + element[6] + "<br>Owner: " + element[9] + "<br>Protection: " + element[8]
                        if (IsNewMarker != "Y") {
                            UpdateMarker(newmarker, MarkerMode, element[2], MarkerIDIndex, MapID, MapIDUpdate[MarkerIDIndex], IsNewMarker, element, icon, bindthing)
                        } else {
                            AddMarker(newmarker, MarkerMode, element[2], MarkerIDIndex, MapID, MapIDUpdate[MarkerIDIndex], IsNewMarker, element, icon, bindthing)
                        }
                        MapIDUpdate[MarkerIDIndex] = "Y"
                        if (MapIDPlanet[MarkerIDIndex] != element[2]) {
                            MapIDUpdate[MarkerIDIndex] = "N"
                        }
                    }
                } else {
                    console.warn("nil or NaN coordinate found, skipping marker!")
                    console.warn(element)
                }
            })
        } catch (e) {
            console.warn("ERROR BELOW")
            console.error(e)
            console.warn("JSON BELOW")
            console.warn(UpdateMarkerJSON)
        }
    }
}