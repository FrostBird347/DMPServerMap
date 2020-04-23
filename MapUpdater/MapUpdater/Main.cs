using System;
using System.Collections.Specialized;
using System.Net;
using DarkMultiPlayerServer;
using DarkMultiPlayerCommon;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
using MessageStream2;
using System.Collections.Generic;
using System.Security.Cryptography;
using System.Threading;
using System.Net.Sockets;
using System.Diagnostics;
using System.ComponentModel;
using System.Net.Http;
using System.Net.Http.Headers;
using MapUpdater;

namespace MapUpdater
{

	public class Main : DMPPlugin
	{
		public static string CurrentPluginVersion = PluginVersion.GetVersion();
		private int updateCallCount = 0;
		public static double UploadFrequency = 300000;
		public static double SOIAdd;
		public static double SendTimeout;
		public static string PostURL;
		public static string SharedPluginDirectory = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "PluginData");
		public static string VesselPermissionFolder = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "Universe", "Permissions", "Vessels");
		public static string MapPluginFolder;
		public static string VesselPosFolder;
		public static string MapConfigFolder;
		public static string EscapeVesselHash;
		public static bool SetupFinished = false;
		public static bool SaveJSONSetting = false;
		public static bool SendJSONSetting = false;
		public static bool HidePrivateVessels = false;
		public static String FinalSentVesselsList;
		public static string JSONPath;
		public static bool LocalPath;

		public override void OnServerStart()
		{
			DarkLog.Normal("[MapUpdater] Starting!");
			MapPluginFolder = SharedPluginDirectory + "/DMPServerMap-FrostBird347";
			VesselPosFolder = MapPluginFolder + "/VesselPos";
			MapConfigFolder = MapPluginFolder + "/Config";
			EscapeVesselHash = MapPluginFolder + "/SOI_Fix";
			Setup.SetUpFolders(SharedPluginDirectory, MapPluginFolder, VesselPosFolder, MapConfigFolder, EscapeVesselHash);
			Setup.SetUpConfig(MapConfigFolder);
			CommandHandler.RegisterCommand("reloadmap", ReloadConfig, "Reload the MapUpdater plugin's config.");
			CommandHandler.RegisterCommand("mapv", DisplayVersion, "Display the map plugin's version.");
			DarkLog.Normal("[MapUpdater] Started! - Version " + CurrentPluginVersion + ".");
		}

		public override void OnServerStop()
		{
			DarkLog.Debug("[MapUpdater] Stopping!");
		}

		public void ReloadConfig(string input)
		{
			SetupFinished = false;
			DarkLog.Normal("[MapUpdater] Reloading config...");
			Setup.SetUpFolders(SharedPluginDirectory, MapPluginFolder, VesselPosFolder, MapConfigFolder, EscapeVesselHash);
			Setup.SetUpConfig(MapConfigFolder);
			DarkLog.Normal("[MapUpdater] Finished.");
		}

		public void DisplayVersion(string input)
		{
			DarkLog.Normal("[MapUpdater] Version " + CurrentPluginVersion + ".");
		}

		public override void OnUpdate()
		{
			if (SetupFinished)
			{
				if (updateCallCount >= UploadFrequency * 100)
				{
					updateCallCount = 0;
					CreateJSON.CreateSentJSON();
					if (SaveJSONSetting)
					{
						byte[] FinalSentVesselsDataList = Encoding.Default.GetBytes(FinalSentVesselsList);
						if (LocalPath)
						{
							File.WriteAllBytes(Path.Combine(AppDomain.CurrentDomain.BaseDirectory, JSONPath), FinalSentVesselsDataList);
						}
						else
						{
							File.WriteAllBytes(JSONPath, FinalSentVesselsDataList);
						}
					}
					if (SendJSONSetting)
					{
						SendJSON.SendJSONData(FinalSentVesselsList, PostURL);
						//Default URL warning
						if (PostURL == "https://httpbin.org/anything")
						{
							DarkLog.Error("\n---\nJSON posted to https://httpbin.org/anything\nThe 'PostURL' value in the config should be changed ASAP. \nYou will need to run the command '/reloadmap' to reload the config.\n---");
						}
					}
				}
				else
				{
					updateCallCount++;
				}
			}
		}






	}
}