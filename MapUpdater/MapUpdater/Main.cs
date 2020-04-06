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
        private int updateCallCount = 0;
        public static Int32 UploadFrequency = 300000;
        public static string PostURL;
        public static string SharedPluginDirectory = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "PluginData");
        public static string MapPluginFolder;
        public static string VesselPosFolder;
        public static string MapConfigFolder;
        public static bool SetupFinished = false;
        public String VesselsList;
        public String FinalSentVesselsList;
        private int ServerClockLast = 0;
        
        public override void OnServerStart()
        {
            DarkLog.Debug("[MapUpdater] Starting!");
            MapPluginFolder = SharedPluginDirectory + "/DMPServerMap-FrostBird347";
            VesselPosFolder = MapPluginFolder + "/VesselPos";
            MapConfigFolder = MapPluginFolder + "/Config";
            Setup.SetUpFolders(SharedPluginDirectory, MapPluginFolder, VesselPosFolder, MapConfigFolder);
            Setup.SetUpConfig(MapConfigFolder);
        }

        public override void OnServerStop()
        {
            DarkLog.Debug("[MapUpdater] Stopping!");
        }

        public override void OnUpdate()
        {
            if (SetupFinished)
            {
                if (updateCallCount >= UploadFrequency * 100)
                {
                    updateCallCount = 0;
                    //TODO: use actual JSON, instead of creating and sending a string.
                    VesselsList = "{\"Main\":{\"ID\":[";
                    string[] FullvesselList = Directory.GetFiles(Path.Combine(Server.universeDirectory, "Vessels"));
                    foreach (string vesselFile in FullvesselList)
                    {
                        string vesselID = Path.GetFileNameWithoutExtension(vesselFile);
                        //Check if valid file
                        if (vesselID.Length == 36)
                        {
                            string VesselPosFile = VesselPosFolder + "/" + vesselID + ".txt";
                            string VesselPosString = FileReader.GetSavedValue(VesselPosFile, "pos");
                            string[] VesselPosArray = VesselPosString.Trim('"', '[', ']', '"').Split(',');
                            VesselsList = VesselsList + "[\"" + VesselPosArray[0].ToString().Trim(' ') + "\",\"" + VesselPosArray[1].ToString().Trim(' ') + "\"," + FileReader.GetSavedValue(vesselFile, "REF") + ",\"" + VesselPosArray[2].ToString().Trim(' ') + "\"," + FileReader.GetSavedValue(VesselPosFile, "vel") + "," + FileReader.GetSavedValue(vesselFile, "name") + "," + FileReader.GetSavedValue(vesselFile, "type") + ",\"" + vesselID + "\"],";
                        }
                    }
                    //TODO: use actual JSON, instead of creating and sending a string.
                    VesselsList = VesselsList.Remove(VesselsList.Length - 1, 1) + "]}";
                    FinalSentVesselsList = VesselsList + "}";
                    //Sometimes it would send every \, I have no idea why it happens, but this should remove them from the JSON before it sends.
                    FinalSentVesselsList.Replace("\\", string.Empty);
                    //TODO: send the request in C# instead of launching an executable.
                    Process proc = new Process
                    {
                        StartInfo = new ProcessStartInfo
                        {
                            FileName = "/opt/local/bin/curl",
                            //TODO: Get URL from a config.
                            Arguments = " -i -X \"PUT\" -d \'" + FinalSentVesselsList + "\' -H \"Content-Type: application/json\" -H \"Accept: application/json\" " + PostURL,
                            UseShellExecute = false,
                            RedirectStandardOutput = true,
                            RedirectStandardError = true,
                            CreateNoWindow = true
                        }
                    };
                    proc.Start();
                    //Default URL warning
                    if (PostURL == "https://jsonblob.com/e7be982b-7620-11ea-84c8-85d74a3e24e7/")
                    {
                        DarkLog.Error("\n---\nJSON posted to https://jsonblob.com/e7be982b-7620-11ea-84c8-85d74a3e24e7/\nThe 'PostURL' value in the config should be changed ASAP. \nYou will need to restart the server to reload the config.\n---");
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
