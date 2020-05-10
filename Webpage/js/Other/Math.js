Math.getDistance = function(x1, y1, x2, y2) {
	var xs = x2 - x1,
		ys = y2 - y1;
	xs *= xs;
	ys *= ys;
	return Math.sqrt(xs + ys);
};