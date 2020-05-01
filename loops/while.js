let flag = true;
while(flag) {
	let randNum = Math.ceil(Math.random() * 6);
	let userInput = prompt("guess the rand num between 1 and 6");
	if (userInput == randNum) {
		flag = false;
	}
	console.log(`the random number was: ${randNum}` );
}
console.log('you guessed the correct number')
//. . .