function ClickPlanet(PlanetN) {
	if (localStorage.getItem("LoadSavedPlanet") != "false") {
		switch (PlanetN) {
			case 'Eeloo':
				document.getElementsByClassName("leaflet-control-celestialbodies-list")[0].children[7].firstElementChild.click();
				break;
			case 'Kerbin':
				document.getElementsByClassName("leaflet-control-celestialbodies-list")[0].children[3].firstElementChild.click();
				break;
			case 'Duna':
				document.getElementsByClassName("leaflet-control-celestialbodies-list")[0].children[4].firstElementChild.click();
				break;
			case 'Kerbol':
				document.getElementsByClassName("leaflet-control-celestialbodies-list")[0].children[0].firstElementChild.click();
				break;
			case 'Moho':
				document.getElementsByClassName("leaflet-control-celestialbodies-list")[0].children[1].firstElementChild.click();
				break;
			case 'Bop':
				document.getElementsByClassName("leaflet-control-celestialbodies-list")[0].children[6].children[1].children[3].firstElementChild.click()
				break;
			case 'Dres':
				document.getElementsByClassName("leaflet-control-celestialbodies-list")[0].children[5].firstElementChild.click();
				break;
			case 'Eve':
				document.getElementsByClassName("leaflet-control-celestialbodies-list")[0].children[2].firstElementChild.click();
				break;
			case 'Gilly':
				document.getElementsByClassName("leaflet-control-celestialbodies-list")[0].children[2].children[1].firstElementChild.firstElementChild.click()
				break;
			case 'Ike':
				document.getElementsByClassName("leaflet-control-celestialbodies-list")[0].children[4].children[1].firstElementChild.firstElementChild.click()
				break;
			case 'Jool':
				document.getElementsByClassName("leaflet-control-celestialbodies-list")[0].children[6].firstElementChild.click();
				break;
			case 'Laythe':
				document.getElementsByClassName("leaflet-control-celestialbodies-list")[0].children[6].children[1].firstElementChild.firstElementChild.click()
				break;
			case 'Minmus':
				document.getElementsByClassName("leaflet-control-celestialbodies-list")[0].children[3].children[1].children[1].firstElementChild.click()
				break;
			case 'Mun':
				document.getElementsByClassName("leaflet-control-celestialbodies-list")[0].children[3].children[1].firstElementChild.firstElementChild.click()
				break;
			case 'Pol':
				document.getElementsByClassName("leaflet-control-celestialbodies-list")[0].children[6].children[1].children[4].firstElementChild.click()
				break;
			case 'Tylo':
				document.getElementsByClassName("leaflet-control-celestialbodies-list")[0].children[6].children[1].children[2].firstElementChild.click()
				break;
			case 'Vall':
				document.getElementsByClassName("leaflet-control-celestialbodies-list")[0].children[6].children[1].children[1].firstElementChild.click()
				break;
		}
		
		SetOpenPlanet(OpenPlanet);
	}
}