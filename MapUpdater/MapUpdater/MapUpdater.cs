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
        public String PublicVesselsList;
        public String DebrisVesselsList;
        public String FinalSentVesselsList;
        private int ServerClockLast = 0;

        public override void OnServerStart()
        {
            DarkLog.Debug("[MapJSONUpdate] Starting!");
            foreach (string file in Directory.GetFiles(Path.Combine(Server.universeDirectory, "Vessels")))
            {
                string croppedName = Path.GetFileNameWithoutExtension(file);
                if (Guid.TryParse(croppedName, out Guid vesselID))
                {
                    byte[] vesselData = File.ReadAllBytes(file);
                    UpdateVessel(null, vesselID, vesselData);
                }
            }


        }

        public override void OnServerStop()
        {
            DarkLog.Debug("[MapJSONUpdate] Stopping!");
        }


        public override void OnUpdate()
        {
            if (updateCallCount >= 300)
            {
                PublicVesselsList = ",\"Public_Frequency\":{\"ID\":[";
                updateCallCount = 0;
                string[] FullvesselList = Directory.GetFiles(Path.Combine(Server.universeDirectory, "Vessels"));
                foreach (string vesselFile in FullvesselList)
                {
                    string vesselID = Path.GetFileNameWithoutExtension(vesselFile);
                    bool vesselIsPublicFreq = false;
                    using (StreamReader sr = new StreamReader(vesselFile))
                    {
                        string currentLine = sr.ReadLine();
                        while (currentLine != null && !vesselIsPublicFreq)
                        {
                            string trimmedLine = currentLine.Trim();
                            if (trimmedLine.Trim().StartsWith("Frequency =", StringComparison.Ordinal))
                            {
                                string VesselFrequency = trimmedLine.Substring(trimmedLine.IndexOf("=", StringComparison.Ordinal) + 2);
                                if (VesselFrequency == "20")
                                {
                                    vesselIsPublicFreq = true;
                                }
                            }
                            currentLine = sr.ReadLine();
                        }
                    }
                    if (vesselIsPublicFreq)
                    {
                        PublicVesselsList = PublicVesselsList + "[" + GetVesselValue(vesselFile, "lat") + "," + GetVesselValue(vesselFile, "lon") + "," + "\"KERBIN\"" + "," + GetVesselValue(vesselFile, "hgt") + "/" + GetVesselValue(vesselFile, "alt") + "," + "3200" + "," + GetVesselValue(vesselFile, "name") + "," + GetVesselValue(vesselFile, "type") + "],";
                    }
                }
                PublicVesselsList = PublicVesselsList.Remove(PublicVesselsList.Length - 1, 1) + "]}";
                DebrisVesselsList = "\"Debris\":{ \"ID\":[[10,10,\"KERBIN\",1000,3000],[10,20,\"MUN\",0,0]]}";
                FinalSentVesselsList = "{\"Main\":{" + DebrisVesselsList + PublicVesselsList + "}}";
                Process proc = new Process
                {
                    StartInfo = new ProcessStartInfo
                    {
                        FileName = "/opt/local/bin/curl",
                        Arguments = " -i -X \"PUT\" -d \'" + FinalSentVesselsList + "\' -H \"Content-Type: application/json\" -H \"Accept: application/json\" https://jsonblob.com/api/jsonBlob/[PLACE_ID_HERE]",
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
            }
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
            {
                return "\"" + FinalVesselValue + "\"";
            }

        }


        public override void OnMessageReceived(ClientObject client, ClientMessage messageData)
        {
            if (messageData.type == ClientMessageType.VESSEL_PROTO)
            {
                using (MessageReader mr = new MessageReader(messageData.data))
                {
                    double planetTime = mr.Read<double>();
                    bool vesselIdOK = Guid.TryParse(mr.Read<string>(), out Guid vesselID);
                    bool isDockingUpdate = mr.Read<bool>();
                    bool isFlyingUpdate = mr.Read<bool>();
                    byte[] possibleCompressedBytes = mr.Read<byte[]>();
                    byte[] vesselData = Compression.DecompressIfNeeded(possibleCompressedBytes);
                    if (vesselIdOK)
                    {
                        UpdateVessel(client, vesselID, vesselData);
                        
                    }
                }
            }
            if (messageData.type == ClientMessageType.VESSEL_REMOVE)
            {
                using (MessageReader mr = new MessageReader(messageData.data))
                {
                    double planetTime = mr.Read<double>();
                    if (Guid.TryParse(mr.Read<string>(), out Guid vesselID))
                    {
                        RemoveVessel(client, vesselID);
                    }
                }
            }
        }

        public void UpdateVessel(ClientObject client, Guid vesselID, byte[] vesselData)
        {
            Console.WriteLine("Updated vessel data: " + vesselID);
        }

        public void RemoveVessel(ClientObject client, Guid vesselID)
        {
            Console.WriteLine("Removing vessel data: " + vesselID);
        }



    }
}
