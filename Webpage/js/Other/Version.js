function isRelease() {
	return true;
}

function GetVersion() {
	var v = "1.4.7"
	if (!isRelease()) {
		return v + " - dev"
	} else {
		return v;
	}
}

function GetJSONVersion() {
	return "3"
}