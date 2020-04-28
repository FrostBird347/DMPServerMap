function SetupPlayerInfo() {
	var PlayerInfo = document.getElementById("PlayerInfo");
	var btn = document.getElementById("PlayerInfoButton");
	var span = document.getElementsByClassName("PlayerInfoClose")[0];
	btn.onclick = function() {
		ToggleStatus()
		PlayerInfo.style.visibility = "visible"
	}
	span.onclick = function() {
		PlayerInfo.style.visibility = "hidden"
	}
	window.onclick = function(event) {
		if (event.target == PlayerInfo) {
			PlayerInfo.style.visibility = "hidden"
		}
	}
	window.onclick = function(event) {
		if (event.target == PlayerInfo) {
			PlayerInfo.style.visibility = "hidden"
		}
	}
	if (!PlayerInfoSetupComplete) {
		PlayerInfoSetupComplete = true
		PlayerInfo.style.visibility = "hidden"
	}
}