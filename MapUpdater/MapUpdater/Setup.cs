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
            if (!File.Exists(MapConfigFolder + "/MapUpdater.txt"))
            {
                byte[] NewConfigData = Encoding.Default.GetBytes("MapUpdater Config:\n\\\\Upload_Frequency: JSON data is uploaded every --- seconds.\n\\\\PostURL: Url that the JSON is posted to. CHANGE IT FROM THE DEFAULT VALUE ASAP!");
                File.WriteAllBytes(MapConfigFolder + "/MapUpdater.txt", NewConfigData);
            }
            Main.UploadFrequency = SetupConfigVarInt(MapConfigFolder, "Upload_Frequency", 3);
            Main.PostURL = SetupConfigVarString(MapConfigFolder, "PostURL", "https://jsonblob.com/api/jsonBlob/e7be982b-7620-11ea-84c8-85d74a3e24e7");
            Main.SetupFinished = true;
        }

        public static Int32 SetupConfigVarInt(string MapConfigFolder, string ConfigValue, Int32 DefaultValue)
        {
            string MapConfigFile = MapConfigFolder + "/MapUpdater.txt";
            Int32 FinalInt = 1;
            if (File.Exists(MapConfigFile))
            {
                string ConfigReturn = FileReader.GetConfigValue(ConfigValue);
                if (ConfigReturn != "nil")
                {
                    FinalInt = int.Parse(ConfigReturn, System.Globalization.CultureInfo.InvariantCulture);
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
