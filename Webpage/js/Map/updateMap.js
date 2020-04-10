//Obtain JSON
function updateMap() {
    return new Promise(resolve => {
        setTimeout(() => {
            var txtFile = new XMLHttpRequest();
            txtFile.onreadystatechange = function() {
                var allText = "";
                if (txtFile.readyState === XMLHttpRequest.DONE && txtFile.status == 200) {
                    allText = txtFile.responseText;
                    UpdateMarkerJSON = JSON.parse(allText);
                    if (JSONURL == "https://jsonblob.com/api/jsonBlob/e7be982b-7620-11ea-84c8-85d74a3e24e7") {
                        console.error("\n---\nJSON obtained from https://jsonblob.com/e7be982b-7620-11ea-84c8-85d74a3e24e7\nThe url saved in the './JSON.url' file should be changed ASAP.\n---")
                    }
                }
            }
            var seconds = new Date().getTime() / 1000;
            txtFile.open("GET", JSONURL + '?' + seconds, true);
            txtFile.send(null);
            resolve(UpdateMarkerJSON);
        }, GetJSONSpeed);
    });
}