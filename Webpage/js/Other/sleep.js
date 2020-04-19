function sleep(ms) {
	var date = new Date();
	var curDate = null;
	do {
		curDate = new Date();
	}
	while (curDate - date < ms);
}