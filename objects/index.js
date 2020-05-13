let laptopObj = {
    screenSize: 19,
    color: 'silver',
    ram: 16,
    gpu: true,
    ssd: true
}

let carArray = [4, 'grey', true];
let carObject = {
	color: ['grey', 'red'],
	doors: {
		material: 'carbon fiber',
		windows: {
			tinted: true,
			typeOfGlass: 'regular'
		}
	},
	color: 'grey',
    convertible: true,
    drive () {
        //function inside an object
        console.log('vroom vroom');
    }
}


console.table(laptopObj);
console.log(laptopObj['ssd']);
carObject.drive();