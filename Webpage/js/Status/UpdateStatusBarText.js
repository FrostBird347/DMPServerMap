function UpdateStatusBarText(Server) {
	var BadServer = UpdateMarkerJSON.Main.Server[4]
	Server.forEach(function(part, index, FullArray) {
		FullArray[index] = basicxss(part)
	})
	document.getElementById("statusbar").innerHTML = "<span style='font-size: 15px;'>Server Info: </span><br><span>Server status: " + ServerStat + "</span><span>Server Name: " + Server[0] + "</span><span>Server version: " + Server[1] + "</span><span>Protocol version: " + Server[2] + "</span><span>Gamemode: " + Server[6] + "</span><span>Warpmode: " + Server[7] + "</span><span>Players: " + Server[3] + "/" + Server[5] + "<br>" + GetPlayerHTML(BadServer) + "</span></span><span style='vertical-align: text-bottom; bottom: 0px; position: absolute;'>Version: " + CurrentVersion + "</span>";
}

function GetPlayerHTML(PlayerData) {
	var FinalPlayerData = "";
	PlayerData.forEach(function(part, index, FullArray) {
		FinalPlayerData = FinalPlayerData + "<span class='statustooltip'>" + basicxss(part[0]) + "<span class='statustooltiptext'>" + basicxss(part[1]) + "</span></span><br>"
	})
	return FinalPlayerData
}