function UpdateStatusBarText(Server) {
	Server.forEach(function(part, index, FullArray) {
        FullArray[index] = basicxss(part)
    })
    document.getElementById("statusbar").innerHTML = "<span style='font-size: 15px;'>Server Info: </span><span><br>Server Name: " + Server[0] + "</span><span>Server version: " + Server[1] + "</span><span>Protocol version: " + Server[2] + "</span><span>Gamemode: " + Server[6] + "</span><span>Warpmode: " + Server[7] + "</span><span>Players: " + Server[3] + "/" + Server[5] + "<br>" + Server[4];
}