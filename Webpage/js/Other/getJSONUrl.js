function getJSONUrl() {
	try {
		var returnstring = GetRemoteJSONUrl()
		if (returnstring == undefined) {
			console.error("Failed to get JSON URL, using default JSON URL instead!")
			return "https://jsonblob.com/api/jsonBlob/e7be982b-7620-11ea-84c8-85d74a3e24e7"
		} else {
			return returnstring
		}
	} catch {
		console.error("Failed to get JSON URL, using the default JSON URL instead!")
		return "https://jsonblob.com/api/jsonBlob/e7be982b-7620-11ea-84c8-85d74a3e24e7"
	}
}