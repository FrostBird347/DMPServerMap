var StatusH2 = "1000px";

function StatusH() {
	var body = document.body,
		html = document.documentElement;
	var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.offsetHeight);
	if (height > 0) {
		StatusH2 = Math.floor(height - 10) + "px"
	}
	document.getElementById("statusbar").style.height = StatusH2;
}