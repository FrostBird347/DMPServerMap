using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using DarkMultiPlayerServer;
using MapUpdater;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace MapUpdater
{
	public static class CreateJSON
	{
		static List<string> PreShortVesselList = new List<string>();
		static string[] ShortvesselList;
		static JArray VesselPosJArray;
		static JArray NextVesselPosJArray;
		static JArray NextVesselPosJArray2;
		static JArray NextVesselPosJArray3;
		static JArray NextVesselPosJArray4;
		static JArray NextVesselPosJArray5;

		public static void CreateSentJSON()
		{
			string[] FullvesselList = Directory.GetFiles(Path.Combine(Server.universeDirectory, "Vessels"));
			foreach (string vesselFile in FullvesselList)
			{
				string vesselID = Path.GetFileNameWithoutExtension(vesselFile);
				if (vesselID.Length == 36 && !EscapeDetect.HasEscaped(vesselFile) && !VesselCheck.VesselisPrivate(vesselFile))
				{
					PreShortVesselList.Add(vesselFile);
				}
			}
			ShortvesselList = PreShortVesselList.ToArray();
			PreShortVesselList.Clear();
			JObject SentJSON = new JObject(
			new JProperty("Main",
				new JObject(
					new JProperty("V",
						new JArray(new JValue(PluginVersion.GetJSONVersion()))),
					new JProperty("ID",
						new JArray(
							from vesselFile in ShortvesselList
								select new JArray(GetJSONValues(vesselFile)))),
					new JProperty("Server",
						new JArray(GetJSONServerValues())))));
			Main.FinalSentVesselsList = SentJSON.ToString();
		}

		public static JArray GetJSONServerValues() 
		{
			string server_name = Settings.settingsStore.serverName.ToString();
			string version = DarkMultiPlayerCommon.Common.PROGRAM_VERSION.ToString();
			string protocol_version = DarkMultiPlayerCommon.Common.PROTOCOL_VERSION.ToString();
			string player_count = Server.playerCount.ToString();
			string max_players = Settings.settingsStore.maxPlayers.ToString();
			ClientObject[] FullClientList = ClientHandler.GetClients();
			JArray players = new JArray();
			 foreach (ClientObject CurrentClient in FullClientList)
			{
				try
				{
					//Send player names and status text
					if (Int32.Parse(Main.PlayerPrivacy.ToString()) == 0)
					{
						players.Add(new JArray(new JValue(CurrentClient.playerName), new JValue(CurrentClient.playerStatus.statusText)));

					}
					//Send player names and hide status text
					else if (Int32.Parse(Main.PlayerPrivacy.ToString()) == 1)
					{
						players.Add(new JArray(new JValue(CurrentClient.playerName), new JValue("---")));
					}
					//Send player count only
					else if (Int32.Parse(Main.PlayerPrivacy.ToString()) == 2)
					{
						players.Add(new JArray(new JValue("---"), new JValue("---")));
					}
				}
				catch { }
			}

			//Send no player info
			if (Int32.Parse(Main.PlayerPrivacy.ToString()) == 3)
			{
				players = new JArray(new JValue("---"), new JValue("---"));
				player_count = "---";
				max_players = "---";
			}

			string game_mode = Settings.settingsStore.gameMode.ToString();
			string warp_mode = Settings.settingsStore.warpMode.ToString();

			return new JArray(new JValue(server_name), new JValue(version), new JValue(protocol_version), new JValue(player_count), players, new JValue(max_players), new JValue(game_mode), new JValue(warp_mode), new JValue(Main.PlayerPrivacy.ToString()));
		}

		public static JArray GetJSONValues(string vesselFile)
		{
			string vesselID = Path.GetFileNameWithoutExtension(vesselFile);
			string VesselPosFile = Main.VesselPosFolder + "/" + vesselID + ".txt";
			string VesselPosString = FileReader.GetSavedValue(VesselPosFile, "pos");
			string NextVesselPosString = FileReader.GetSavedValue(VesselPosFile, "nextloc");
			string NextVesselPosString2 = FileReader.GetSavedValue(VesselPosFile, "nextloc2");
			string NextVesselPosString3 = FileReader.GetSavedValue(VesselPosFile, "nextloc3");
			string NextVesselPosString4 = FileReader.GetSavedValue(VesselPosFile, "nextloc4");
			string NextVesselPosString5 = FileReader.GetSavedValue(VesselPosFile, "nextloc5");
			string VesselPosTimePercent = FileReader.GetSavedValue(VesselPosFile, "timep"); 
			string VesselPermissionsFile = Main.VesselPermissionFolder + "/" + vesselID + ".txt";
			string VesselPermission;
			string VesselOwner;
			try
			{
				VesselPermission = FileReader.GetPermissionValue(VesselPermissionsFile, 2);
				VesselOwner = FileReader.GetPermissionValue(VesselPermissionsFile, 1);
			}
			catch
			{
				VesselPermission = "";
				VesselOwner = "";
			}
			try
			{
				VesselPosJArray = JArray.Parse(VesselPosString);
				NextVesselPosJArray = JArray.Parse(NextVesselPosString);
				NextVesselPosJArray2 = JArray.Parse(NextVesselPosString2);
				NextVesselPosJArray3 = JArray.Parse(NextVesselPosString3);
				NextVesselPosJArray4 = JArray.Parse(NextVesselPosString4);
				NextVesselPosJArray5 = JArray.Parse(NextVesselPosString5);
			}
			catch
			{
				VesselPosJArray = new JArray(new JValue("NaN"), new JValue("NaN"), new JValue("NaN"));
				NextVesselPosJArray = new JArray(new JValue("NaN"), new JValue("NaN"), new JValue("NaN"));
				NextVesselPosJArray2 = new JArray(new JValue("NaN"), new JValue("NaN"), new JValue("NaN"));
				NextVesselPosJArray3 = new JArray(new JValue("NaN"), new JValue("NaN"), new JValue("NaN"));
				NextVesselPosJArray4 = new JArray(new JValue("NaN"), new JValue("NaN"), new JValue("NaN"));
				NextVesselPosJArray5 = new JArray(new JValue("NaN"), new JValue("NaN"), new JValue("NaN"));
			}
			string[] VesselPosArray = VesselPosJArray.ToObject<string[]>();
			JArray VesselsJSON = new JArray(new JValue(VesselPosArray[0].ToString()), new JValue(VesselPosArray[1].ToString()), new JValue(FileReader.GetSavedValue(vesselFile, "REF")), new JValue(VesselPosArray[2].ToString()), new JValue(FileReader.GetSavedValue(VesselPosFile, "vel")), new JValue(FileReader.GetSavedValue(vesselFile, "name")), new JValue(FileReader.GetSavedValue(vesselFile, "type")), new JValue(vesselID), new JValue(VesselPermission), new JValue(VesselOwner), new JArray(new JValue(NextVesselPosJArray[0].ToString()), new JValue(NextVesselPosJArray[1].ToString()), new JValue(NextVesselPosJArray2[0].ToString()), new JValue(NextVesselPosJArray2[1].ToString()), new JValue(NextVesselPosJArray3[0].ToString()), new JValue(NextVesselPosJArray3[1].ToString()), new JValue(NextVesselPosJArray4[0].ToString()), new JValue(NextVesselPosJArray4[1].ToString()), new JValue(NextVesselPosJArray5[0].ToString()), new JValue(NextVesselPosJArray5[1].ToString())), new JValue(VesselPosTimePercent));
			return VesselsJSON;
		}

	}
}