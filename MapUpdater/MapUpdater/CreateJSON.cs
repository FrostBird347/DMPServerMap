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
            string players = Server.players.ToString();
            string max_players = Settings.settingsStore.maxPlayers.ToString();
            string game_mode = Settings.settingsStore.gameMode.ToString();
            string warp_mode = Settings.settingsStore.warpMode.ToString();
            
            return new JArray(new JValue(server_name), new JValue(version), new JValue(protocol_version), new JValue(player_count), new JValue(players), new JValue(max_players), new JValue(game_mode), new JValue(warp_mode));
        }

        public static JArray GetJSONValues(string vesselFile)
        {
            string vesselID = Path.GetFileNameWithoutExtension(vesselFile);
            string VesselPosFile = Main.VesselPosFolder + "/" + vesselID + ".txt";
            string VesselPosString = FileReader.GetSavedValue(VesselPosFile, "pos");
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
                VesselPermission = "Error";
                VesselOwner = "Error";
            }
            try
            {
                VesselPosJArray = JArray.Parse(VesselPosString);
            }
            catch
            {
                VesselPosJArray = new JArray(new JValue("NaN"), new JValue("NaN"), new JValue("NaN"));
            }
            string[] VesselPosArray = VesselPosJArray.ToObject<string[]>();
            JArray VesselsJSON = new JArray(new JValue(VesselPosArray[0].ToString()), new JValue(VesselPosArray[1].ToString()), new JValue(FileReader.GetSavedValue(vesselFile, "REF")), new JValue(VesselPosArray[2].ToString()), new JValue(FileReader.GetSavedValue(VesselPosFile, "vel")), new JValue(FileReader.GetSavedValue(vesselFile, "name")), new JValue(FileReader.GetSavedValue(vesselFile, "type")), new JValue(vesselID), new JValue(VesselPermission), new JValue(VesselOwner));
            return VesselsJSON;
        }

    }
}