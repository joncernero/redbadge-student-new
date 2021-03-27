var number1;
var name1;
var stringExample;
var boolExample;
var numberExample;
// Best practice is to declare the type - inference can be used but declarations leave breadcrumbs for devs coming after you!
stringExample = 'Hello';
//Type Inference
var number2 = 5;
// number2 = "4"; - Typescript will tell you "No" when the variable doesn't match the type
var restaurant = {
    name: 'McDonalds',
    dineIn: false,
    foodItems: ['hamburgers', 'fries', 'apple pie']
};
restaurant.foodItems.forEach(function (item) {
    console.log(item.toUpperCase);
});
