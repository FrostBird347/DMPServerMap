using System;
using System.IO;
using DarkMultiPlayerServer;
using MapUpdater;
using System.Security.Cryptography;
using System.Text;

namespace MapUpdater
{
	public static class EscapeDetect
	{
		public static bool HasEscaped(string vesselFile)
		{
			string vesselID = Path.GetFileNameWithoutExtension(vesselFile);
			string VesselPosFile = Main.VesselPosFolder + "/" + vesselID + ".txt";
			string VesselPosString = FileReader.GetSavedValue(VesselPosFile, "pos");
			string[] VesselPosArray = VesselPosString.Trim('"', '[', ']', '"').Split(',');
			string PlanetRef = FileReader.GetSavedValue(vesselFile, "REF").Trim('"');
			string VesselHeight = VesselPosArray[2].ToString().Trim(' ');
			if (OutsideSOI(Convert.ToInt32(PlanetRef), Convert.ToDouble(VesselHeight)))
			{
				string VesselHashFile = Main.EscapeVesselHash + "/" + vesselID + ".txt";
				string NewVesselHash = CalculateMD5(vesselFile);
				if (File.Exists(VesselHashFile))
				{
					if (NewVesselHash != File.ReadAllText(VesselHashFile))
					{
						byte[] NewVesselHashByte = Encoding.Default.GetBytes(NewVesselHash);
						File.WriteAllBytes(VesselHashFile, NewVesselHashByte);
						DarkLog.Error("[MapUpdater] " + vesselID + " was updated, but it is outside of the planet's SOI.");
					}
				}
				else
				{
					DarkLog.Debug("[MapUpdater] " + vesselID + "'s marker has been removed.");
					byte[] NewVesselHashByte = Encoding.Default.GetBytes(NewVesselHash);
					File.WriteAllBytes(VesselHashFile, NewVesselHashByte);
				}
				return true;
			}
			else
			{
				string VesselHashFile = Main.EscapeVesselHash + "/" + vesselID + ".txt";
				if (File.Exists(VesselHashFile))
				{
					string NewVesselHash = CalculateMD5(vesselFile);
					if (NewVesselHash != File.ReadAllText(VesselHashFile))
					{
						File.Delete(VesselHashFile);
						DarkLog.Debug("[MapUpdater] " + vesselID + "'s marker has been transferred to another planet.");
						return false;
					}
					else
					{
						return true;
					}
				}
				else
				{
					return false;
				}
			}
		}

		private static bool OutsideSOI(Int32 PlanetID, Double Height)
		{
			//Kerbol
			if (PlanetID == 0)
			{
				return false;
			}
			//Kerbin
			else if (PlanetID == 1)
			{
				return (Height > (83559286 + Main.SOIAdd));
			}
			//Mun
			else if (PlanetID == 2)
			{
				return (Height > (2229559.1 + Main.SOIAdd));
			}
			//Minmus
			else if (PlanetID == 3)
			{
				return (Height > (2187428.4 + Main.SOIAdd));
			}
			//Moho
			else if (PlanetID == 4)
			{
				return (Height > (9396663 + Main.SOIAdd));
			}
			//Eve
			else if (PlanetID == 5)
			{
				return (Height > (84409365 + Main.SOIAdd));
			}
			//Duna
			else if (PlanetID == 6)
			{
				return (Height > (47601949 + Main.SOIAdd));
			}
			//Ike
			else if (PlanetID == 7)
			{
				return (Height > (919598.9 + Main.SOIAdd));
			}
			//Jool
			else if (PlanetID == 8)
			{
				//There are no maps for Jool
				return false;
			}
			//Laythe
			else if (PlanetID == 9)
			{
				return (Height > (3223645.8 + Main.SOIAdd));
			}
			//Vall
			else if (PlanetID == 10)
			{
				return (Height > (2106401.4 + Main.SOIAdd));
			}
			//Bop
			else if (PlanetID == 11)
			{
				return (Height > (1156060.9 + Main.SOIAdd));
			}
			//Tylo
			else if (PlanetID == 12)
			{
				return (Height > (10256518 + Main.SOIAdd));
			}
			//Gilly
			else if (PlanetID == 13)
			{
				return (Height > (113123.27 + Main.SOIAdd));
			}
			//Pol
			else if (PlanetID == 14)
			{
				return (Height > (998138.9 + Main.SOIAdd));
			}
			//Dres
			else if (PlanetID == 15)
			{
				return (Height > (32694840 + Main.SOIAdd));
			}
			//Eeloo
			else if (PlanetID == 16)
			{
				return (Height > (118872940 + Main.SOIAdd));
			}
			//???
			else
			{
				return false;
			}
		}

		static string CalculateMD5(string filename)
		{
			using (var md5 = MD5.Create())
			{
				using (var stream = File.OpenRead(filename))
				{
					var hash = md5.ComputeHash(stream);
					return BitConverter.ToString(hash).Replace("-", "").ToLowerInvariant();
				}
			}
		}


	}
}