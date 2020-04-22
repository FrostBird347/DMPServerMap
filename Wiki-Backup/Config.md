# Config
An implementation of the telemachus vessel map as a DMP server plugin, allowing users to view vessels on an interactive map.

## Plugin

### Setup
The plugin's config is created on server startup and is located at `[Server]/PluginData/DMPServerMap-FrostBird347/Config/MapUpdater.txt`.

Values are stored as: `VAR = VALUE`.

### Config Values
- `Upload_Frequency` 
	- Default value is `3` seconds.
	- Controls how often the server will attempt to update the webpage.
- `SOI_Fix`
	- Default value is `5` meters.
	- Value is added each planet's stored SOI or Sphere of Influence.
	- See [#1](https://github.com/FrostBird347/DMPServerMap/issues/1) for more info.
- `HidePrivateVessels`
	- Default value is `False`.
	- Ignore private vessels if set to `True`.
- `SendJSON`
	- Default value is `False`.
	- Send marker data via a HTTP PUT request if set to `True`.
- `PostURL`
	- Requires `SendJSON` to be set to `True`.
	- Default value is `https://httpbin.org/anything`.
	- Marker data is sent to this URL.
- `SendJSONTimeout`
	- Requires `SendJSON` to be set to `True`.
	- Default value is `10` seconds. 
	- HTTP PUT request timeout.
- `SaveJSON`
	- Default value is `False`.
	- Save marker data to a file if set to `True`.
- `SaveJSONPath`
	- Requires `SaveJSON` to be set to `True`.
	- Default value is `PluginData/DMPServerMap-FrostBird347/SavedJSON.json`.
	- Location to save the marker data to.
- `LocalPath`
	- Requires `SaveJSON` to be set to `True`.
	- Default value is `True`.
	- Use a path relative to the server to save the marker data if `True`.
	- Use an absolute path to save the marker data if set to `False`.

## Webpage

### Setup
The webpage's config is located at `[Webpage Folder]/config/config.cfg`.

Values are stored as: 

```javascript
function VAR() {
	return VALUE
}
```

### Config Values
- `GetRemoteJSONUrl`
	- Default value is `http://httpbin.org/status/501` 
	- URL to receive marker data from.
- `GetSavedJSONSpeed`
	- Default value is `4` seconds.
	- Controls how often the map will attempt to update the markers.
	- Setting a lower value on the webpage, without touching the server's `Upload_Frequency` value increases the chance of the webpage receiving the same data again.