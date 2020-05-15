//probably need space for variables
const hourlyRate = 1.5;

class Car {
    constructor (regNum, timeParked) {
        this._regNum = regNum;
        this._timeParked = timeParked;
        this._totalCharge = 0;
    }
    get regNum() {
        return this._regNum;
    }
    get timeParked() {
        return this._timeParked;
    }
    // get totalCharge() {
    //     return this._totalCharge;
    // } commented out to make it work
    //not sure why it has to be commented 
}

const pay = (reg, hr) => {
    const car = new Car(reg, hr);
    car.totalCharge = hourlyRate * Math.ceil(hr);
    return `You need to pay £${car.totalCharge} for ${car.timeParked} hours.`;
}
console.log(pay('TEST', 4));