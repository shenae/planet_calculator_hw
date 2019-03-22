function planetWeightCalculator(planet, weight) {
	// let mercuryWeight = Math.floor(0.38 * weight); 
	let venusWeight = Math.floor(0.91 * weight); 
	let earthWeight = Math.floor(1.00 * weight); 
	let marsWeight = Math.floor(0.38 * weight); 
	let jupiterWeight = Math.floor(2.34 * weight); 
	let saturnWeight = Math.floor(1.06 * weight); 
	let uranusWeight = Math.floor(0.92 * weight); 
	let neptuneWeight = Math.floor(1.19 * weight); 
	let plutoWeight = Math.floor(0.06 * weight); 
	switch(planet) {
		case 'Mercury':
		console.log('You weigh ' + mercuryWeight + ' on ' + Mercury);
		break;
		case 'Venus':
		console.log('You weigh ' + venusWeight + ' on ' + Venus);
		break;
		case 'Earth':
		console.log('You weigh ' + earthWeight + ' on ' + Earth);
		break;
		case 'Mars':
		console.log('You weigh ' + marsWeight + ' on ' + Mars);
		break;
		case 'Jupiter':
		console.log('You weigh ' + jupiterWeight + ' on ' + Jupiter);
		break;
		case 'Saturn':
		console.log('You weigh ' + saturnWeight + ' on ' + Saturn);
		break;
		case 'Uranus':
		console.log('You weigh ' + uranusWeight + ' on ' + Uranus);
		break;
		case 'Neptune':
		console.log('You weigh ' + neptuneWeight + ' on ' + Neptune);
		break;
		case 'Pluto':
		console.log('You weigh ' + plutoWeight + ' on ' + Pluto);
		break;
		default:
		console.log('Ummm, what planet are you from again?');
	}
}
planetWeightCalculator(Mercury, 18);
