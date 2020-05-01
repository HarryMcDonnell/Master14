let shoppingList = ["eggs", "toilet paper", "milk"];
let numberArray = [0, 1, 3];

//shoppingList.push("cheese"); //adds to the end of the array
//console.table(shoppingList); //looks nicer than .log
//console.log(shoppingList[1]);//arrays index at 0
//console.log(shoppingList.length);

//shoppingList.pop(); //can be set to a variable
//let lastItem = shoppingList.pop();
//console.table(shoppingList);

numberArray.splice(2,0,2); //starting index, items to delete, new item
console.log(numberArray);

let faveWebsites = ["reddit", "youtube", "imgur"];
faveWebsites.splice(1,0, "netflix", "facebook");
let lastItem = faveWebsites.pop();
console.log(faveWebsites); //appears between [] 
console.log(lastItem);
console.log(...faveWebsites); //appears as plain text

//console.log(faveWebsites.indexOf("youtube"));
//indexOf finds items in array and returns index, returns -1 if no match
