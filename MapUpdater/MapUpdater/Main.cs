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
        public static double UploadFrequency = 300000;
        public static double SOIAdd;
        public static string PostURL;
        public static string SharedPluginDirectory = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "PluginData");
        public static string MapPluginFolder;
        public static string VesselPosFolder;
        public static string MapConfigFolder;
        public static string EscapeVesselHash;
        public static bool SetupFinished = false;
        public static String FinalSentVesselsList;
        private int ServerClockLast = 0;
        
        public override void OnServerStart()
        {
            DarkLog.Debug("[MapUpdater] Starting!");
            MapPluginFolder = SharedPluginDirectory + "/DMPServerMap-FrostBird347";
            VesselPosFolder = MapPluginFolder + "/VesselPos";
            MapConfigFolder = MapPluginFolder + "/Config";
            EscapeVesselHash = MapPluginFolder + "/SOI_Fix";
            Setup.SetUpFolders(SharedPluginDirectory, MapPluginFolder, VesselPosFolder, MapConfigFolder, EscapeVesselHash);
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
                    CreateJSON.CreateSentJSON();
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
                    if (PostURL == "https://jsonblob.com/api/jsonBlob/e7be982b-7620-11ea-84c8-85d74a3e24e7")
                    {
                        DarkLog.Error("\n---\nJSON posted to https://jsonblob.com/api/jsonBlob/e7be982b-7620-11ea-84c8-85d74a3e24e7\nThe 'PostURL' value in the config should be changed ASAP. \nYou will need to restart the server to reload the config.\n---");
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