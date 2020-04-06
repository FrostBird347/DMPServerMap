using System;
using System.IO;
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
    }
}
