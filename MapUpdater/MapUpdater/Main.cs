//Originally, this plugin was just going to be used for a private server, because of that, a lot of older code has been changed to be usable for other people.
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

namespace Main
{

    public class Main : DMPPlugin
    {

        private int updateCallCount = 0;

        public string SharedPluginDirectory = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "PluginData");
        public string MapPluginFolder;
        public string VesselPosFolder;
        public string MapConfigFolder;
        public String VesselsList;
        public String FinalSentVesselsList;
        private int ServerClockLast = 0;

        public override void OnServerStart()
        {
            DarkLog.Debug("[MapUpdater] Starting!");
            MapPluginFolder = SharedPluginDirectory + "/DMPServerMap-FrostBird347";
            VesselPosFolder = MapPluginFolder + "/VesselPos";
            MapConfigFolder = MapPluginFolder + "/Config";
            MapUpdater.Setup.SetUpFolders(SharedPluginDirectory, MapPluginFolder, VesselPosFolder, MapConfigFolder);
        }

        public override void OnServerStop()
        {
            DarkLog.Debug("[MapUpdater] Stopping!");
        }

        public override void OnUpdate()
        {
            //Don't set this too low.
            if (updateCallCount >= 300)
            {
                updateCallCount = 0;
                //TODO: use actual JSON, instead of creating and sending a string.
                VesselsList = "{\"Main\":{\"ID\":[";
                //Modified version of DarkMultiPlayerServer.Dekessler().
                //The private server had a "public frequency", which was meant to be the only visible thing on the map, it has since been removed, but I likely will end up adding it back in a separate version for my server, so I have kept the code here: c3RyaW5nIGN1cnJlbnRMaW5lID0gc3IuUmVhZExpbmUoKTsKICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnRMaW5lICE9IG51bGwgJiYgIXZlc3NlbElzUHVibGljRnJlcSkKICAgICAgICAgICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nIHRyaW1tZWRMaW5lID0gY3VycmVudExpbmUuVHJpbSgpOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRyaW1tZWRMaW5lLlRyaW0oKS5TdGFydHNXaXRoKCJGcmVxdWVuY3kgPSIsIFN0cmluZ0NvbXBhcmlzb24uT3JkaW5hbCkpCiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nIFZlc3NlbEZyZXF1ZW5jeSA9IHRyaW1tZWRMaW5lLlN1YnN0cmluZyh0cmltbWVkTGluZS5JbmRleE9mKCI9IiwgU3RyaW5nQ29tcGFyaXNvbi5PcmRpbmFsKSArIDIpOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChWZXNzZWxGcmVxdWVuY3kgPT0gIjIwIikKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlc3NlbElzUHVibGljRnJlcSA9IHRydWU7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudExpbmUgPSBzci5SZWFkTGluZSgpOwogICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgfQ==
                string[] FullvesselList = Directory.GetFiles(Path.Combine(Server.universeDirectory, "Vessels"));
                foreach (string vesselFile in FullvesselList)
                {
                    string vesselID = Path.GetFileNameWithoutExtension(vesselFile);
                    //Check if valid file
                    if (vesselID.Length == 36)
                    {
                        string VesselPosFile = VesselPosFolder + "/" + vesselID + ".txt";
                        string VesselPosString = FileReader.GetSavedValue(VesselPosFile, "pos");
                        string[] VesselPosArray = VesselPosString.Trim('"','[', ']', '"').Split(',');
                        //Console.WriteLine(VesselPosArray[0].ToString().Trim(' '));
                        //Console.WriteLine(VesselPosArray[1].ToString().Trim(' '));
                        //Console.WriteLine(VesselPosArray[2].ToString().Trim(' '));
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
                        Arguments = " -i -X \"PUT\" -d \'" + FinalSentVesselsList + "\' -H \"Content-Type: application/json\" -H \"Accept: application/json\" https://jsonblob.com/api/jsonBlob/e7be982b-7620-11ea-84c8-85d74a3e24e7/",
                        UseShellExecute = false,
                        RedirectStandardOutput = true,
                        RedirectStandardError = true,
                        CreateNoWindow = true
                    }
                };
                 proc.Start();
            }
            else
            {
                updateCallCount++;
            }
        }


        



    }
}
