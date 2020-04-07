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
                if (vesselID.Length == 36 && !EscapeDetect.HasEscaped(vesselFile))
                {
                    PreShortVesselList.Add(vesselFile);
                }
            }
            ShortvesselList = PreShortVesselList.ToArray();
            JObject SentJSON = new JObject(
            new JProperty("Main",
                new JObject(
                    new JProperty("ID",
                        new JArray(
                            from vesselFile in ShortvesselList
                            select new JArray(GetJSONValues(vesselFile)))))));
            Main.FinalSentVesselsList = SentJSON.ToString();
        }

        public static JArray GetJSONValues(string vesselFile)
        {
            string vesselID = Path.GetFileNameWithoutExtension(vesselFile);
            string VesselPosFile = Main.VesselPosFolder + "/" + vesselID + ".txt";
            string VesselPosString = FileReader.GetSavedValue(VesselPosFile, "pos");
            try
            {
                VesselPosJArray = JArray.Parse(VesselPosString);
            }
            catch(Exception e)
            {
                VesselPosJArray = new JArray(new JValue("NaN"), new JValue("NaN"), new JValue("NaN"));
            }
            string[] VesselPosArray = VesselPosJArray.ToObject<string[]>();
            JArray VesselsJSON = new JArray(new JValue(VesselPosArray[0].ToString()), new JValue(VesselPosArray[1].ToString()), new JValue(FileReader.GetSavedValue(vesselFile, "REF")), new JValue(VesselPosArray[2].ToString()), new JValue(FileReader.GetSavedValue(VesselPosFile, "vel")), new JValue(FileReader.GetSavedValue(vesselFile, "name")), new JValue(FileReader.GetSavedValue(vesselFile, "type")), new JValue(vesselID));
            return VesselsJSON;
        }

    }
}