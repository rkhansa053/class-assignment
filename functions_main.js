// params => aPple, glass, bREad
// return => APPLE, GLASS, BREAD
// utility function OR method
// UPPER CASE
function convertToUpperCase(data) {
    var stringInUpperCase = data.toUpperCase();
    return stringInUpperCase;
}
var upperCaseData = ("glass");
console.log(convertToUpperCase("aPple"));
console.log(convertToUpperCase("glass"));
console.log(convertToUpperCase("BREAD"));
// LOWER CASE
// ** 1: convert to upper case
// ** 2: console the data
// ** 3: convert to lower case
// ** 4: console the data
function convertToLowerCase(data) {
    var stringInLowerCase = data.toLowerCase();
    return stringInLowerCase;
}
var lowerCaseData = convertToLowerCase(upperCaseData);
console.log(lowerCaseData);
//  create a function that takes amount as an arguement and return any item name
var items = {
    1500: "2kg rice",
    2000: "4kg wheat",
    1000: "1kg sugar"
};
function buyItem(amount) {
    var itemName = items[amount];
    return itemName;
}
var item = buyItem(2000);
console.log(item);
function makeObject(firstName, lastName, email, phoneNumber) {
    return {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber
    };
}
var obj = makeObject("Khansa", "Rahman", "khansa@example.com", "01234");
var obj2 = makeObject("Khansa", "Rahman", "khansa@example.com");
console.log(obj);
console.log(obj2);
