function SetupUserConfig() {
	var UserConfig = document.getElementById("UserConfig");
	var btn = document.getElementById("UserConfigButton");
	var span = document.getElementsByClassName("UserConfigClose")[0];
	btn.onclick = function() {
		ToggleStatus()
		UserConfig.style.visibility = "visible"
	}
	span.onclick = function() {
		UserConfig.style.visibility = "hidden"
	}
	window.onclick = function(event) {
		if (event.target == UserConfig) {
			UserConfig.style.visibility = "hidden"
		}
	}
	window.onclick = function(event) {
		if (event.target == UserConfig) {
			UserConfig.style.visibility = "hidden"
		}
	}
	if (!UserConfigSetupComplete) {
		UserConfigSetupComplete = true
		UserConfig.style.visibility = "hidden"
	}
}