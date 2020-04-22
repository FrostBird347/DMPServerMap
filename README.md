# DMPServerMap

[![Loading...](https://img.shields.io/github/v/release/FrostBird347/DMPServerMap?label=Latest%20Release)](https://github.com/FrostBird347/DMPServerMap/releases/latest) [![Loading...](https://img.shields.io/github/v/release/FrostBird347/DMPServerMap?include_prereleases&label=Latest%20Pre-Release)](https://github.com/FrostBird347/DMPServerMap/releases) [![Loading...](https://img.shields.io/github/issues-raw/FrostBird347/DMPServerMap?label=Open%20Issues)](https://github.com/FrostBird347/DMPServerMap/issues) [![Loading...](https://img.shields.io/github/issues-closed-raw/FrostBird347/DMPServerMap?label=Closed%20Issues&color=success)](https://github.com/frostbird347/dmpservermap/issues?q=is%3Aissue+sort%3Aupdated-desc+is%3Aclosed) [![Loading...](https://img.shields.io/github/downloads/FrostBird347/DMPServerMap/total?label=Downloads)](https://github.com/FrostBird347/DMPServerMap/releases)

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