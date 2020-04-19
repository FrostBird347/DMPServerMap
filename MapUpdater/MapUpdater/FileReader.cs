using System;
using System.IO;
using System.Linq;
using DarkMultiPlayerServer;
using MapUpdater;

namespace MapUpdater
{
    public static class FileReader
    {


        public static string GetSavedValue(string VesselFile, string VesselValue)
        {
            string findvalue = VesselValue + " =";
            string FinalVesselValue = "nil";
            bool foundvar = false;

            if (File.Exists(VesselFile))
            {
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
            }
            
                return FinalVesselValue;
        }

        public static string GetConfigValue(string Value)
        {
            string MapConfigFile = Main.MapConfigFolder + "/MapUpdater.txt";
            return GetSavedValue(MapConfigFile, Value).Trim('"');
        }

        public static string GetPermissionValue(string VesselFile, int linevalue)
        {
            try
            {
                int newlinevalue = linevalue - 1;
                if (File.Exists(VesselFile))
                {
                    return File.ReadLines(VesselFile).Skip(newlinevalue).Take(1).First();
                }
                return "";
            }
            catch
            {
                return "";
            }
        }

    }
}