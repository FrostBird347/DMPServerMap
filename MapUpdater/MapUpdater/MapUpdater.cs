//Originally, this plugin was just going to be used for a private server, because of that, a lot of older code has/is being changed to be usable for other people.
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

namespace MapJSONUpdate
{

    public class MapJSONUpdate : DMPPlugin
    {

        private int updateCallCount = 0;
        public String NormalVesselsList;
        public String DebrisVesselsList;
        public String FinalSentVesselsList;
        private int ServerClockLast = 0;

        public override void OnServerStart()
        {
            DarkLog.Debug("[MapUpdater] Starting!");
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
                NormalVesselsList = ",\"Vessels\":{\"ID\":[";
                DebrisVesselsList = "\"Debris\":{ \"ID\":[";
                //Modified version of DarkMultiPlayerServer.Dekessler().
                //The private server had a "public frequency", which was meant to be the only visible thing on the map, it has since been removed, but I likely will end up adding it back in a separate version for my server, so I have kept the code here: c3RyaW5nIGN1cnJlbnRMaW5lID0gc3IuUmVhZExpbmUoKTsKICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnRMaW5lICE9IG51bGwgJiYgIXZlc3NlbElzUHVibGljRnJlcSkKICAgICAgICAgICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nIHRyaW1tZWRMaW5lID0gY3VycmVudExpbmUuVHJpbSgpOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRyaW1tZWRMaW5lLlRyaW0oKS5TdGFydHNXaXRoKCJGcmVxdWVuY3kgPSIsIFN0cmluZ0NvbXBhcmlzb24uT3JkaW5hbCkpCiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nIFZlc3NlbEZyZXF1ZW5jeSA9IHRyaW1tZWRMaW5lLlN1YnN0cmluZyh0cmltbWVkTGluZS5JbmRleE9mKCI9IiwgU3RyaW5nQ29tcGFyaXNvbi5PcmRpbmFsKSArIDIpOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChWZXNzZWxGcmVxdWVuY3kgPT0gIjIwIikKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlc3NlbElzUHVibGljRnJlcSA9IHRydWU7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudExpbmUgPSBzci5SZWFkTGluZSgpOwogICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgfQ==
                string[] FullvesselList = Directory.GetFiles(Path.Combine(Server.universeDirectory, "Vessels"));
                foreach (string vesselFile in FullvesselList)
                {
                    string vesselID = Path.GetFileNameWithoutExtension(vesselFile);
                    bool VesselIsDebris = false;
                    using (StreamReader sr = new StreamReader(vesselFile))
                    {
                        string currentLine = sr.ReadLine();
                        while (currentLine != null && !VesselIsDebris)
                        {
                            string trimmedLine = currentLine.Trim();
                            if (trimmedLine.Trim().StartsWith("type =", StringComparison.Ordinal))
                            {
                                string VesselFrequency = trimmedLine.Substring(trimmedLine.IndexOf("=", StringComparison.Ordinal) + 2);
                                if (VesselFrequency == "Debris")
                                {
                                    VesselIsDebris = true;
                                }
                            }
                            currentLine = sr.ReadLine();
                        }
                    }
                    if (!VesselIsDebris)
                    {
                        NormalVesselsList = NormalVesselsList + "[" + GetVesselValue(vesselFile, "lat") + "," + GetVesselValue(vesselFile, "lon") + "," + GetVesselValue(vesselFile, "REF") + "," + GetVesselValue(vesselFile, "hgt") + "/" + GetVesselValue(vesselFile, "alt") + "," + "\"?\"" + "," + GetVesselValue(vesselFile, "name") + "," + GetVesselValue(vesselFile, "type") + "],";
                    }
                    else
                    {
                        DebrisVesselsList = DebrisVesselsList + "[" + GetVesselValue(vesselFile, "lat") + "," + GetVesselValue(vesselFile, "lon") + "," + GetVesselValue(vesselFile, "REF") + "," + GetVesselValue(vesselFile, "hgt") + "/" + GetVesselValue(vesselFile, "alt") + "," + "\"?\"" + "," + GetVesselValue(vesselFile, "name") + "," + GetVesselValue(vesselFile, "type") + "],";
                    }
                }
                //TODO: use actual JSON, instead of creating and sending a string.
                NormalVesselsList = NormalVesselsList.Remove(NormalVesselsList.Length - 1, 1) + "]}";
                DebrisVesselsList = DebrisVesselsList.Remove(DebrisVesselsList.Length - 1, 1) + "]}";
                FinalSentVesselsList = "{\"Main\":{" + DebrisVesselsList + NormalVesselsList + "}}";
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


        public string GetVesselValue(string VesselFile, string VesselValue)
        {
            string findvalue = VesselValue + " =";
            string FinalVesselValue = "nil";
            bool foundvar = false;
            using (StreamReader sr = new StreamReader(VesselFile))
            {
                string currentLine = sr.ReadLine();
                while (currentLine != null && !foundvar)
                {
                    string trimmedLine = currentLine.Trim();
                    if (trimmedLine.Trim().StartsWith(findvalue, StringComparison.Ordinal))
                    {
                        FinalVesselValue = trimmedLine.Substring(trimmedLine.IndexOf("=", StringComparison.Ordinal) + 2);
                        foundvar = true;
                    }
                    currentLine = sr.ReadLine();
                }
            } //Used to join Surface and Sea Level Altitude.
            if (VesselValue != "alt" && VesselValue != "hgt")
            {
                return "\"" + FinalVesselValue + "\"";
            } else if (VesselValue == "alt")
            {
                return FinalVesselValue + "\"";
            }
            else if (VesselValue == "hgt")
            {
                return "\"" + FinalVesselValue;
            }
            else
            { //Would not let me compile without this.
                return "\"" + FinalVesselValue + "\"";
            }

        }



    }
}
