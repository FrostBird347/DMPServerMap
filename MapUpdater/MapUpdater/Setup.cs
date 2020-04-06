using System;
using System.IO;
using System.Text;
using DarkMultiPlayerServer;
using MapUpdater;
namespace MapUpdater
{
    public static class Setup
    {
        public static void SetUpFolders(string SharedPluginDirectory, string MapPluginFolder, string VesselPosFolder, string MapConfigFolder)
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
        }

        public static void SetUpConfig(string MapConfigFolder)
        {
            string MapConfigFile = MapConfigFolder + "/MapUpdater.txt";
            if (File.Exists(MapConfigFile))
            {
                string SendSpeedReturn = FileReader.GetConfigValue("Upload_Frequency");
                if (SendSpeedReturn != "nil")
                {
                    Main.UploadFrequency = int.Parse(SendSpeedReturn, System.Globalization.CultureInfo.InvariantCulture) * 100;
                }
                else
                {
                    Main.UploadFrequency = 3 * 100;
                    string OldConfigString = File.ReadAllText(MapConfigFile);
                    string NewConfigString = OldConfigString + "\nUpload_Frequency = 3";
                    byte[] NewConfigData = Encoding.Default.GetBytes(NewConfigString);
                    File.WriteAllBytes(MapConfigFile, NewConfigData);
                    DarkLog.Debug("[MapUpdater] Missing value 'Upload_Frequency' was created in the config");
                }
            }
            else
            {
                Main.UploadFrequency = 3 * 100;
                string NewConfigString = "Upload_Frequency = 3";
                byte[] NewConfigData = Encoding.Default.GetBytes(NewConfigString);
                File.WriteAllBytes(MapConfigFile, NewConfigData);
                DarkLog.Debug("[MapUpdater] Created Config File");
            }
            DarkLog.Debug("[MapUpdater] UploadFrequency is " + Main.UploadFrequency / 100);
        }
    }
}
