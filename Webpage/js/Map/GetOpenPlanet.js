function GetOpenPlanet() {
	var FinalPlanet = "Kerbin",
	PlanetURL = document.getElementsByClassName("leaflet-control-celestialbodies-toggle")[0].style.backgroundImage
	
	switch (PlanetURL) {
		case 'url("img/planets/body-eeloo.png")':
			FinalPlanet = 'Eeloo';
			break;
		case 'url("img/planets/body-kerbin.png")':
			FinalPlanet = 'Kerbin';
			break;
		case 'url("img/planets/body-duna.png")':
			FinalPlanet = 'Duna';
			break;
		case 'url("img/planets/body-kerbol.png")':
			FinalPlanet = 'Kerbol';
			break;
		case 'url("img/planets/body-moho.png")':
			FinalPlanet = 'Moho';
			break;
		case 'url("img/planets/body-bop.png")':
			FinalPlanet = 'Bop';
			break;
		case 'url("img/planets/body-dres.png")':
			FinalPlanet = 'Dres';
			break;
		case 'url("img/planets/body-duna.png")':
			FinalPlanet = 'Duna';
			break;
		case 'url("img/planets/body-eve.png")':
			FinalPlanet = 'Eve';
			break;
		case 'url("img/planets/body-gilly.png")':
			FinalPlanet = 'Gilly';
			break;
		case 'url("img/planets/body-ike.png")':
			FinalPlanet = 'Ike';
			break;
		case 'url("img/planets/body-jool.png")':
			FinalPlanet = 'Jool';
			break;
		case 'url("img/planets/body-laythe.png")':
			FinalPlanet = 'Laythe';
			break;
		case 'url("img/planets/body-minmus.png")':
			FinalPlanet = 'Minmus';
			break;
		case 'url("img/planets/body-moho.png")':
			FinalPlanet = 'Moho';
			break;
		case 'url("img/planets/body-mun.png")':
			FinalPlanet = 'Mun';
			break;
		case 'url("img/planets/body-pol.png")':
			FinalPlanet = 'Pol';
			break;
		case 'url("img/planets/body-tylo.png")':
			FinalPlanet = 'Tylo';
			break;
		case 'url("img/planets/body-vall.png")':
			FinalPlanet = 'Vall';
			break;
	}
	
	SetOpenPlanet(FinalPlanet);
}