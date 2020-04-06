using System;
using System.IO;
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
            }
            else if (VesselValue == "alt")
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
