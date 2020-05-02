function SetUserConfig() {
	if (!UserConfigSetupComplete) {
		var StorageDetect = false
		var FinalPlayerData = "<span style='font-size: 20px; color: red;'>You should never see this text.</span><br><br>";
		try {
			if (typeof(Storage) !== "undefined") {
				localStorage.setItem("StorageTest", true);
				StorageDetect = localStorage.getItem("StorageTest");
			} else {
				StorageDetect = false
			}
		} catch {
			StorageDetect = false
		}
		
		if (StorageDetect) {
			FinalPlayerData = "<span style='font-size: 20px;'>Settings</span><br><br><span style='font-size: 15px;'>Connect orbit dots with lines <input type='checkbox'  id='CheckSetting-OrbitLine' onclick='localStorage.setItem(\"DisplayOrbitPath\", document.getElementById(\"CheckSetting-OrbitLine\").checked);'></span>";
		} else {
			FinalPlayerData = "<span style='font-size: 20px; color: red;'>Error: No web storage support</span><br><br>";
		}
		document.getElementById("UserConfigtext").innerHTML = FinalPlayerData
		if(localStorage.getItem("DisplayOrbitPath") == "true") {
			document.getElementById("CheckSetting-OrbitLine").click()
		}
	}
	SetupUserConfig()
}