"use strict";
let number1;
let name1;
let stringExample;
let boolExample;
let numberExample;
let unionStringNumber;
// Best practice is to declare the type - inference can be used but declarations leave breadcrumbs for devs coming after you!
stringExample = 'Hello';
let springWeather; // don't use this! bad practice
//Type Inference
let number2 = 5;
// number2 = "4"; - Typescript will tell you "No" when the variable doesn't match the type
let restaurant = {
    name: 'McDonalds',
    dineIn: false,
    foodItems: ['hamburgers', 'fries', 'apple pie'],
};
restaurant.foodItems.forEach((item) => {
    console.log(item.toUpperCase);
});
const buySellStock = (stockName, qty, action) => {
    let total = Number(qty) * 15;
    let status = action === 'sell-stock' ? 'sold' : 'bought';
    return `You ${status} ${qty} shares of ${stockName} Stock for a total of $${total}`;
};
buySellStock('Bank Of America', '15', 'sell-stock');
let weather = {
    temp: 75,
    cloudConditions: 'sunny',
};
console.log(`The current temperature is ${weather.temp} and the sky is currently ${weather.cloudConditions}`);
// let weather = {
//   temp: 78,
//   cloudConditions: 'overcast',
//   next5dayTemp: [81,74,79,81,81],
// }
//# sourceMappingURL=learning-ts.js.map