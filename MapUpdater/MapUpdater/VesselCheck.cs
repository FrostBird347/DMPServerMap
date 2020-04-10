﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using DarkMultiPlayerServer;
using MapUpdater;
namespace MapUpdater
{
    public static class VesselCheck
    {
        public static bool VesselisPrivate(string vesselFile)
        {
            string vesselID = Path.GetFileNameWithoutExtension(vesselFile);
            string VesselPermissionsFile = Main.VesselPermissionFolder + "/" + vesselID + ".txt";
            string VesselPermissions = FileReader.GetPermissionValue(VesselPermissionsFile, 2);
            if (VesselPermissions == "PRIVATE" && Main.HidePrivateVessels)
            {
                return true;
            }
            return false;
        }
    }
}
