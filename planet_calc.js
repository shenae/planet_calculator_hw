function planetWeightCalculator(planet, weight) {
	let newWeight = Math.floor(planet * weight); 
	switch(planet) {
		case: 'Mercury'
		console.log('You weigh ' + newWeight + ' on ' + Mercury);
		break;
		case: 'Venus'
		console.log('You weigh ' + newWeight + ' on ' + Venus);
		break;
		case: 'Earth'
		console.log('You weigh ' + newWeight + ' on ' + Earth);
		break;
		case: 'Mars'
		console.log('You weigh ' + newWeight + ' on ' + Mars);
		break;
		case: 'Jupiter'
		console.log('You weigh ' + newWeight + ' on ' + Jupiter);
		break;
		case: 'Saturn'
		console.log('You weigh ' + newWeight + ' on ' + Saturn);
		break;
		case: 'Uranus'
		console.log('You weigh ' + newWeight + ' on ' + Uranus);
		break;
		case: 'Neptune'
		console.log('You weigh ' + newWeight + ' on ' + Neptune);
		break;
		case: 'Pluto'
		console.log('You weigh ' + newWeight + ' on ' + Pluto);
		break;
	}
}
