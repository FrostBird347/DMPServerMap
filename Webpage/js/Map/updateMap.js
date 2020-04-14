//Obtain JSON
function updateMap() {
    return new Promise(resolve => {
        setTimeout(() => {
            var txtFile = new XMLHttpRequest();
            txtFile.onreadystatechange = function() {
                var allText = "";
                if (txtFile.readyState === XMLHttpRequest.DONE && txtFile.status == 200) {
                    allText = txtFile.responseText;
                    if (JSON.stringify(JSON.parse(allText)) == JSON.stringify(UpdateMarkerJSON)) {
                    	ServerStat = "<br><span style='color: #ff6a00; text-align: center;'>Server sent the exact same data!</span>"
                    } else {
                    	ServerStat = "<br><span style='color: green; text-align: center;'>Server online</span>"
                    }
                    
                    UpdateMarkerJSON = JSON.parse(allText);
                    if (JSONURL == "https://jsonblob.com/api/jsonBlob/e7be982b-7620-11ea-84c8-85d74a3e24e7") {
                        console.error("\n---\nJSON obtained from https://jsonblob.com/e7be982b-7620-11ea-84c8-85d74a3e24e7\nThe url saved in the './JSON.url' file should be changed ASAP.\n---")
                    }
                } else if (txtFile.readyState === XMLHttpRequest.DONE) {
                    ServerStat = "<br><span style='color: red; text-align: center;'>Failed to load server data.<br>Error code: " + txtFile.status; + "</span>"
                }
            }
            var seconds = new Date().getTime() / 1000;
            txtFile.open("GET", JSONURL + '?' + seconds, true);
            txtFile.send(null);
            resolve(UpdateMarkerJSON);
        }, GetJSONSpeed);
    });
}