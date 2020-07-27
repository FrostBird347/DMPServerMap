# Config

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
- `PlayerPrivacy`
	- Default value is `1`.
	- Will send player info, depending on the value.
		- `0` - player count, player list and what each player is doing is sent.
		- `1` - player count and player list is sent.
		- `2` - player count is sent.
		- `3` - no player data is sent.
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
- `HidePrivateVessels`
	- Default value is `False`.
	- Ignore private vessels if set to `True`.
- `HiddenPrivateVesselKey`
	- Requires `HidePrivateVessels` to be set to `True`.
	- Default value is `[0,0.5,0.5,0.5,0,0,0,0,0,0,0,0,0,0,0,0,0]`.
	- Sorted by planet index.
		- `[Kerbol, Kerbin, Mun, Minmus, Moho, Eve, Duna, Ike, Jool, Laythe, Vall, Bop, Tylo, Gilly, Pol, Dres, Eeloo]`.
	- Values control how private vessels are hidden.
		- `0` = Ignore all private vessels.
		- `0.5` = Ignore all private vessels moving slower than `HiddenPrivateVesselSpeed`.
		- `1` = Do not ignore any private vessels.
- `HiddenPrivateVesselSpeed`
	- Requires `HidePrivateVessels` to be set to `True`.
	- Default value is `100`.
	- Controls the speed value for `HiddenPrivateVesselKey`.

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
- `HideDeepVessels`
	- Default value is `true`.
	- Hide vessels under -250m if `true`.
- `CheckInvalidJSON`
	- Default value is `true`.
	- Hide the invalid JSON version alert `false`.
- `GetPageTitle`
	- Default value is `{PNum}/{PMax} Players | {N}`.
	- `{N}` = Server Name
	- `{V}` = Server Version
	- `{PV}` = Server Protocol Version
	- `{PNum}` = Player Count
	- `{PMax}` = Max Players
	- `{GM}` = Game Mode
	- `{WM}` = Warp Mode
- `GetDefaultLayers`
	- Default value is `[true, true, true, false, true, true, false, false, false, 0, "Kerbin"]`.
	- Changes the default layer and overlay settings.
	- <img src="https://i.imgur.com/9cZ1yOD.png" height="400">

		- `[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`
	- For example `[false, false, true, false, false, true, true, false, false, 3, "Kerbin"]` is:
		- <img src="https://i.imgur.com/X2m2spM.png" height="400">

- `DynamicIcon`
	- Default value is `false`.
	- Changes the page favicon to the planet the user is viewing.

- `DisplayTouchWarning`
	- Default value is `true`.
	- Displays a warning message for devices that have a touch screen.