function GetOpenPlanet() {
	var FinalPlanet = "Kerbin",
	PlanetURL = document.getElementsByClassName("leaflet-control-celestialbodies-toggle")[0].style.backgroundImage
	
	switch (true) {
		case PlanetURL.includes('body-eeloo.png'):
			FinalPlanet = 'Eeloo';
			break;
		case PlanetURL.includes('body-kerbin.png'):
			FinalPlanet = 'Kerbin';
			break;
		case PlanetURL.includes('body-duna.png'):
			FinalPlanet = 'Duna';
			break;
		case PlanetURL.includes('body-kerbol.png'):
			FinalPlanet = 'Kerbol';
			break;
		case PlanetURL.includes('body-moho.png'):
			FinalPlanet = 'Moho';
			break;
		case PlanetURL.includes('body-bop.png'):
			FinalPlanet = 'Bop';
			break;
		case PlanetURL.includes('body-dres.png'):
			FinalPlanet = 'Dres';
			break;
		case PlanetURL.includes('body-duna.png'):
			FinalPlanet = 'Duna';
			break;
		case PlanetURL.includes('body-eve.png'):
			FinalPlanet = 'Eve';
			break;
		case PlanetURL.includes('body-gilly.png'):
			FinalPlanet = 'Gilly';
			break;
		case PlanetURL.includes('body-ike.png'):
			FinalPlanet = 'Ike';
			break;
		case PlanetURL.includes('body-jool.png'):
			FinalPlanet = 'Jool';
			break;
		case PlanetURL.includes('body-laythe.png'):
			FinalPlanet = 'Laythe';
			break;
		case PlanetURL.includes('body-minmus.png'):
			FinalPlanet = 'Minmus';
			break;
		case PlanetURL.includes('body-moho.png'):
			FinalPlanet = 'Moho';
			break;
		case PlanetURL.includes('body-mun.png'):
			FinalPlanet = 'Mun';
			break;
		case PlanetURL.includes('body-pol.png'):
			FinalPlanet = 'Pol';
			break;
		case PlanetURL.includes('body-tylo.png'):
			FinalPlanet = 'Tylo';
			break;
		case PlanetURL.includes('body-vall.png'):
			FinalPlanet = 'Vall';
			break;
	}
	
	SetOpenPlanet(FinalPlanet);
}