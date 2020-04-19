using System;
using System.Net.Http;
using System.Net.Http.Headers;

namespace MapUpdater
{
	public static class SendJSON
	{
		public static void SendJSONData(string SendJSON, string URL)
		{
			using (var httpClient = new HttpClient())
			{
				using (var request = new HttpRequestMessage(new HttpMethod("PUT"), URL))
				{
					request.Headers.TryAddWithoutValidation("Accept", "application/json");
					request.Content = new StringContent(SendJSON);
					httpClient.Timeout = TimeSpan.FromSeconds(Main.SendTimeout);
					request.Content.Headers.ContentType = MediaTypeHeaderValue.Parse("application/json");
					System.Threading.Tasks.Task<System.Net.Http.HttpResponseMessage> response = httpClient.SendAsync(request);
					//Wait until data is sent
					while (!response.IsCompleted)
					{
						System.Threading.Thread.Sleep(100);
					}
				}
			}
		}
	}
}