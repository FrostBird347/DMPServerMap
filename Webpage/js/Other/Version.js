function isRelease() {
	return false;
}

function GetVersion() {
	var v = "1.4.1"
	if (!isRelease()) {
		return v + " - dev"
	} else {
		return v;
	}
}

function GetJSONVersion() {
	return "3"
}