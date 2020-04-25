var moving = [
	{	
		name: 'bike',
		distance: 120,
		tMinuts: 240
	},

	{	
		name: 'car',
		distance: 120,
		tMinuts: 90
	},

	{	
		name: 'train',
		distance: 120,
		tMinuts: 110
	},

	{	
		name: 'plane',
		distance: 120,
		tMinuts: 15
	}
]

function calculate(minutes, distance) {
	var tHours = minutes / 60;
	var vKmh = distance /tHours;
	return vKmh;
}

function average_speed(transport) {	
	var overall_speed = 0;
	for (i=0; i < transport.length; i++){
		overall_speed += calculate(transport[i].tMinuts,transport[i].distance);
	}
	var average = overall_speed/transport.length;
	return average;
}

console.log('Average speed: ' + average_speed (moving))
 
function faster(transport) {	
	var faster_name = transport[0].name;
	var faster_speed = calculate(transport[0].tMinuts,transport[0].distance);
	for (i=1; i < transport.length; i++){
		if(faster_speed < (calculate(transport[i].tMinuts,transport[i].distance))){
		faster_speed = (calculate(transport[i].tMinuts,transport[i].distance));
		faster_name = transport[i].name;
		}
	}
	return faster_name;
}

console.log('Faster transport: ' + faster(moving))