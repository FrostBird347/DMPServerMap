﻿using System;
namespace MapUpdater
{
	public static class PluginVersion
	{

		public static bool isRelease()
		{
			return false;
		}
		public static string GetVersion()
		{
			string v = "1.4.5";
			if (!isRelease())
			{
				return v + " - dev";
			}
			else
			{
				return v;
			}
		}

		public static string GetJSONVersion()
		{
			return "3";
		}
	}
}
