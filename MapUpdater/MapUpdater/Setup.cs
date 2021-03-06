﻿using System;
using System.IO;
using System.Text;
using DarkMultiPlayerServer;
using MapUpdater;

namespace MapUpdater
{
	public static class Setup
	{
		public static void SetUpFolders(string SharedPluginDirectory, string MapPluginFolder, string VesselPosFolder, string MapConfigFolder, string EscapeVesselHash)
		{
			if (!Directory.Exists(SharedPluginDirectory))
			{
				Directory.CreateDirectory(SharedPluginDirectory);
			}
			if (!Directory.Exists(MapPluginFolder))
			{
				Directory.CreateDirectory(MapPluginFolder);
			}
			if (!Directory.Exists(VesselPosFolder))
			{
				Directory.CreateDirectory(VesselPosFolder);
			}
			if (!Directory.Exists(MapConfigFolder))
			{
				Directory.CreateDirectory(MapConfigFolder);
			}
			if (!Directory.Exists(EscapeVesselHash))
			{
				Directory.CreateDirectory(EscapeVesselHash);
			}
		}

		public static void SetUpConfig(string MapConfigFolder)
		{
			if (!File.Exists(MapConfigFolder + "/MapUpdater.txt"))
			{
				byte[] NewConfigData = Encoding.Default.GetBytes("MapUpdater Config:\n");
				File.WriteAllBytes(MapConfigFolder + "/MapUpdater.txt", NewConfigData);
			}
			Main.UploadFrequency = SetupConfigVarDouble(MapConfigFolder, "Upload_Frequency", 3);
			Main.SOIAdd = SetupConfigVarDouble(MapConfigFolder, "SOI_Fix", 5);
			Main.PlayerPrivacy = SetupConfigVarDouble(MapConfigFolder, "PlayerPrivacy", 1);
			Main.SendJSONSetting = SetupConfigVarBool(MapConfigFolder, "SendJSON", false);
			Main.PostURL = SetupConfigVarString(MapConfigFolder, "PostURL", "https://httpbin.org/anything");
			Main.SendTimeout = SetupConfigVarDouble(MapConfigFolder, "SendJSONTimeout", 10);
			Main.SaveJSONSetting = SetupConfigVarBool(MapConfigFolder, "SaveJSON", false);
			Main.JSONPath = SetupConfigVarString(MapConfigFolder, "SaveJSONPath", "PluginData/DMPServerMap-FrostBird347/SavedJSON.json");
			Main.LocalPath = SetupConfigVarBool(MapConfigFolder, "LocalPath", true);
			Main.HidePrivateVessels = SetupConfigVarBool(MapConfigFolder, "HidePrivateVessels", false);
			VesselStealth.SetupConfig(SetupConfigVarString(MapConfigFolder, "HiddenPrivateVesselKey", "[0,0.5,0.5,0.5,0,0,0,0,0,0,0,0,0,0,0,0,0]"));
			VesselStealth.StealthSpeed = SetupConfigVarString(MapConfigFolder, "HiddenPrivateVesselSpeed", "100");
			Main.SetupFinished = true;
		}

		public static bool SetupConfigVarBool(string MapConfigFolder, string ConfigValue, bool DefaultValue)
		{
			string MapConfigFile = MapConfigFolder + "/MapUpdater.txt";
			bool FinalBool = false;
			if (File.Exists(MapConfigFile))
			{
				string ConfigReturn = FileReader.GetConfigValue(ConfigValue);
				if (ConfigReturn != "nil")
				{
					FinalBool = (ConfigReturn.ToString().ToLower() == "true");
				}
				else
				{
					FinalBool = DefaultValue;
					string OldConfigString = File.ReadAllText(MapConfigFile);
					string NewConfigString = OldConfigString + "\n" + ConfigValue + " = " + DefaultValue.ToString();
					byte[] NewConfigData = Encoding.Default.GetBytes(NewConfigString);
					File.WriteAllBytes(MapConfigFile, NewConfigData);
					DarkLog.Debug("[MapUpdater] Missing value " + ConfigValue + " was created in the config");
				}

			}
			else
			{
				DarkLog.Fatal("Config Missing!");
				Server.ShutDown("Config was either removed during setup or it was unable to create the file!");
			}
			DarkLog.Debug("[MapUpdater] " + ConfigValue + " is " + FinalBool);
			return FinalBool;
		}

		public static double SetupConfigVarDouble(string MapConfigFolder, string ConfigValue, double DefaultValue)
		{
			string MapConfigFile = MapConfigFolder + "/MapUpdater.txt";
			double FinalInt = 1;
			if (File.Exists(MapConfigFile))
			{
				string ConfigReturn = FileReader.GetConfigValue(ConfigValue);
				if (ConfigReturn != "nil")
				{
					FinalInt = double.Parse(ConfigReturn, System.Globalization.CultureInfo.InvariantCulture);
				}
				else
				{
					FinalInt = DefaultValue;
					string OldConfigString = File.ReadAllText(MapConfigFile);
					string NewConfigString = OldConfigString + "\n" + ConfigValue + " = " + DefaultValue.ToString();
					byte[] NewConfigData = Encoding.Default.GetBytes(NewConfigString);
					File.WriteAllBytes(MapConfigFile, NewConfigData);
					DarkLog.Debug("[MapUpdater] Missing value " + ConfigValue + " was created in the config");
				}

			}
			else
			{
				DarkLog.Fatal("Config Missing!");
				Server.ShutDown("Config was either removed during setup or it was unable to create the file!");
			}
			DarkLog.Debug("[MapUpdater] " + ConfigValue + " is " + FinalInt);
			return FinalInt;
		}

		public static string SetupConfigVarString(string MapConfigFolder, string ConfigValue, string DefaultValue)
		{
			string MapConfigFile = MapConfigFolder + "/MapUpdater.txt";
			string FinalString = "You should never see this string";
			if (File.Exists(MapConfigFile))
			{
				string ConfigReturn = FileReader.GetConfigValue(ConfigValue);
				if (ConfigReturn != "nil")
				{
					FinalString = ConfigReturn;
				}
				else
				{
					FinalString = DefaultValue;
					string OldConfigString = File.ReadAllText(MapConfigFile);
					string NewConfigString = OldConfigString + "\n" + ConfigValue + " = " + DefaultValue;
					byte[] NewConfigData = Encoding.Default.GetBytes(NewConfigString);
					File.WriteAllBytes(MapConfigFile, NewConfigData);
					DarkLog.Debug("[MapUpdater] Missing value " + ConfigValue + " was created in the config");
				}

			}
			else
			{
				DarkLog.Fatal("Config Missing!");
				Server.ShutDown("Config was either removed during setup or it was unable to create the file!");
			}
			DarkLog.Debug("[MapUpdater] " + ConfigValue + " is " + FinalString);
			return FinalString;
		}


	}

}