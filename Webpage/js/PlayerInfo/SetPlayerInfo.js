function SetPlayerInfo(PlayerData, PrivacyLevel) {
	var FinalPlayerData = "<span style='font-size: 20px;'>Connected Players: </span><br><br>";
	if (PrivacyLevel == "0") {
		try {
			PlayerData.forEach(function(part, index, FullArray) {
				FinalPlayerData = FinalPlayerData + "<span id='resizetext' style='display: inline-block; font-size: 16px;'>" + basicxss(part[0]) + "<br><span id='resizetext' style='color:grey; font-size: 15px; display: inline-block; text-indent: 10px;'>" + basicxss(part[1]) + "</span></span><br>"
			})
		} catch (e) {
			FinalPlayerData = FinalPlayerData + "<br><span id='resizetext' style='display: inline-block; font-size: 16px; color: red;'>" + e + "</span>"
		}
	} else if (PrivacyLevel == "1") {
		try {
			PlayerData.forEach(function(part, index, FullArray) {
				FinalPlayerData = FinalPlayerData + "<span id='resizetext' style='display: inline-block; font-size: 16px;'>" + basicxss(part[0]) + "<br></span><br>"
			})
		} catch (e) {
			FinalPlayerData = FinalPlayerData + "<br><span id='resizetext' style='display: inline-block; font-size: 16px; color: red;'>" + e + "</span>"
		}
	}
	document.getElementById("playerinfotext").innerHTML = FinalPlayerData
	SetupPlayerInfo()
}