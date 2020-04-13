var statuspos = 0;
function ToggleStatus(){
	if (statuspos == 0) {
    	document.getElementById("sidebarslider").style.transform = "matrix(1, 0, 0, 1, 0, 0)";
    	Array.from(document.getElementsByClassName("leaflet-left")).forEach(
    	function(element, index, array) {
    		element.style.transition = "0.5s";
    		element.style.transform = "matrix(1, 0, 0, 1, 150, 0)";
    	});
    	statuspos = 1;
    } else {
    	document.getElementById("sidebarslider").style.transform = "matrix(1, 0, 0, 1, -150, 0)";
    	Array.from(document.getElementsByClassName("leaflet-left")).forEach(
    	function(element, index, array) {
    		element.style.transition = "0.5s";
    		element.style.transform = "matrix(1, 0, 0, 1, 0, 0)";
    	});
    	statuspos = 0;
    }
}