using System;
using System.IO;
using DarkMultiPlayerServer;
namespace MapUpdater
{
	public static class VesselStealth
	{
		public static float[] Config = new float[17];
		public static string StealthSpeed;

		public static void SetupConfig(string RawConfigString)
		{
			string[] RawConfigArray = RawConfigString.TrimStart('[').TrimEnd(']').Split(',');
			for (int i = 0; i <= 16; i++)
			{
				Config[i] = float.Parse(RawConfigArray[i]);
			}
		}

		public static bool IsInisible(string vesselFile)
		{
			string PlanetRef = FileReader.GetSavedValue(vesselFile, "REF").Trim('"');
			if (Config[int.Parse(PlanetRef)] < 0.5)
			{
				return true;
			}
			else if (Config[int.Parse(PlanetRef)] > 0.5)
			{
				return false;
			}
			else
			{
				string vesselID = Path.GetFileNameWithoutExtension(vesselFile);
				string VesselPosFile = Main.VesselPosFolder + "/" + vesselID + ".txt";
				string VesselVelString = FileReader.GetSavedValue(VesselPosFile, "vel");
				if (float.Parse(VesselVelString) < float.Parse(StealthSpeed))
				{
					return true;
				}
				return false;
			}
		}
	}
}
