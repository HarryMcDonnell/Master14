let passwordCheck = "ignorethis";
if (passwordCheck.length < 8) { //0-7
console.log("Password must be 8 characters or longer");
}
else console.log(passwordCheck);


let number1 = 4;
let number2 = 9;
let numberMultiplied = number1 * number2;
let numberSum = number1 + number2;
if (numberSum % 2 == 0) {
    console.log(numberSum)
}   
else console.log(numberMultiplied);

let testString = "jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh";
for(let i=0; i<testString.length; i++) {
    if(testString[i] == "h" && testString[i+1] == "i") {
        console.log(`the word "hi" was at at index: ${i}`)
        break;
    }        
}    
for(let i=testString.length; i>0; i--) {
    if(testString[i] == "i" && testString[i-1] == "h") {
        console.log(`the word "hi" was at index: ${i-1}`)
        break;
    }
}