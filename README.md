# DMPServerMap
An implementation of the telemachus vessel map as a DMP server plugin, allowing users to view vessels on an interactive map.

- [Download](https://github.com/FrostBird347/DMPServerMap/releases/latest/)
- [Credits](https://github.com/FrostBird347/DMPServerMap/blob/master/Credits.md)
- [License (MIT)](https://github.com/FrostBird347/DMPServerMap/blob/master/LICENSE)

## Setup

### Server Plugin
1. Download [Server_Plugins.zip](https://github.com/FrostBird347/DMPServerMap/releases/latest/) and place the 4 files called `ConfigNode.dll`, `MapUpdater.dll`, `VesselPositions.dll` and `Newtonsoft.Json.dll` in your server's `Plugins` folder.
2. Start the server and open the file `[Server]/PluginData/DMPServerMap-FrostBird347/Config/MapUpdater.txt` in a text editor.
3. Setup the server [config](https://github.com/FrostBird347/DMPServerMap/wiki/Config#Plugin).
4. Run the command `/reloadmap` to reload the server's config.

### Webpage
1. Download [Webpage.zip](https://github.com/FrostBird347/DMPServerMap/releases/latest/), which contains the webpage's files.
2. Currently, no web server is provided and will need to be set up manually.
3. Setup the webpage's [config](https://github.com/FrostBird347/DMPServerMap/wiki/Config#Webpage).