let accNum = [1111];
let accPin = [1111];
let accBalance = 1000;
let pinAttempts = 3;
let loggedIn = false;
let quit = false;
do {
const acceptAcc = (account) => {
    if (account == accNum[0]) {
        AccCorrect = true;
    }
    else {
        AccCorrect = false;
    }
    return AccCorrect;
}
const acceptPin = (pin) => {
    if (pin == accPin[0]) {
        PinCorrect = true;
    }
    else {
        PinCorrect = false;
    }
    return PinCorrect;
}
const withdraw = (amountRaw) => {
let totalWithdrawn = 0;
let amountInt = parseInt(amountRaw,10);
if (isNaN(amountInt)) { 
    console.log("Please enter amount as a whole number.");
    return 0
}
    if (amountInt > 250 || totalWithdrawn > 250) {
        console.log("Maximum withdrawal of 250 GBP per day.")
    }
    else if (amountInt > accBalance) {
        console.log("Insufficient funds.");
    }
    else {
        accBalance -= amountInt;
        totalWithdrawn += amountInt;
        console.log("withdrawing: " + amount);
    }
}
const deposit = (amountRaw) => {
    let amountInt = parseInt(amountRaw,10);
    if (isNaN(amountInt)) {
        console.log("Please enter a whole number amount.");
        return 0
    }
    else if (amountInt > 250) {
        console.log("Maximum deposit of 250 GBP.");
    }
    else {
        accBalance += amountInt;
        console.log(`${amountInt} GBP deposited.`);
    }
}
const transLog = (day) => {
    day = prompt("Please enter day of week you want to check:");
    switch(day) {
        case "MONDAY":
            console.log("Interest added: £30.49");
            break;
        case "TUESDAY":
            console.log("Account debited: £102.99")
        case "WEDNESDAY":
        case "THURSDAY":
            console.log
        case "FRIDAY":
            console.log
        case "SATURDAY":
            console.log
        case "SUNDAY":
            console.log
        default:
            console.log("Please enter a day of the week.");
            break;
    }
}
acceptAcc(prompt("Enter your account number:"));
if (AccCorrect == true) {
    while (pinAttempts > 0) {
        acceptPin(prompt("Enter your pin:"));
        if (PinCorrect == true) {
            console.log("Access Granted.");
            loggedIn = true;
            break;
        }
        else {
            pinAttempts--;
            console.log(`Incorrect PIN. ${pinAttempts} attempts remaining.`);
        }
    }
    if (pinAttempts == 0) {
        console.log("Pin incorrect 3 times. Logging out.");
        quit = true;
    }
}
else {
    console.log("Account number not recognised.");
}

if (loggedIn == true) {
    do {
    let choice = parseInt(prompt("Please type selection: 1.) Check Balance.  2.)Withdraw. 3.)Deposit. 4.)Change Pin."))
    switch(choice) {
        case 1:
            console.log(`Your available balance is ${accBalance} GBP.`);
            break;
        case 2: 
            withdraw(prompt("How much would you like to withdraw?."));
            break;
        case 3:
            deposit(prompt("How much will you deposit?"));
            break;
        case 4:
            changePin(prompt("Please enter current pin:"));
            break;
        default:
            console.log("Input not recognised");
            break;
    }
    } while (loggedIn == true); 
}
} while (quit == false);
/*if (pinAttempts > 0) {
    acceptAcc(1111);
    acceptPin(1111);
    if (AccCorrect == true) {
        if (PinCorrect == true) {
            console.log("Access Granted.")
        }
        else {
            pinAttempts--;
            console.log("Pin Incorrect.");
            console.log(pinAttempts + " attempts remaining.")
            }
    }
    else {
        console.log("Account Number not recognised.");
    }
}
else {
console.log("Pin entered incorrectly too many times. Account locked.")
} 
*/