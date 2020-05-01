let numberArray = [0,1,2,3];
let shoppingList = ["egg", "toilet paper", "milk"];
for(let i = 0; i < numberArray.length; i++) {
    console.log(numberArray[i]);
}
console.table(shoppingList);
for(let i = 0; i < shoppingList.length; i++) {
    //modifying elements in array
    shoppingList[i] +="s";
    //printing in a table
    }
    console.table(shoppingList);