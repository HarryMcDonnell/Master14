let something = 3; //global variable called something
let randNum = Math.random();
const myFunc = (something) => {
    console.log(something); //local variable seperate from global
}

myFunc(randNum) //variable randomNum gets sent to myFunc as "something"

console.log(something) //uses global "something" not function "something"

const options = (darkMode=true, fontSize='18pt', highContrast=false, fontWeight='standard') => {
    //. . . 
}

options(undefined, '22pt', undefined, 'bold');


