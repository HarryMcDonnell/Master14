let multiples3 = [];
let multiples5 = [];
let sum3 = 0;
let sum5 = 0;
for(let i=0; i < 1001; i++ ) {
    if(i % 3 == 0) {
        multiples3.push(i)
        break;
    }
    if(i % 5 == 0) {
        multiples5.push(i)
        break;
    }
}
for(let i=0; i < multiples3.length; i++) {
    let sum3 = (sum3 + multiples3[i]);
}
for(let i=0; i < multiples5.length; i++) {
    let sum5 = (sum5 + multiples5[i]);
}
console.log("The sum of all the multiples of 3 and 5 below 1000 is: " + (Sum3 +sum5))
