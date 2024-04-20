// params => aPple, glass, bREad
// return => APPLE, GLASS, BREAD
// utility function OR method

// UPPER CASE
function convertToUpperCase(data: string): string {
    const stringInUpperCase = data.toUpperCase();
    return stringInUpperCase;
}
let upperCaseData = ("glass");
console.log(convertToUpperCase("aPple"));
console.log(convertToUpperCase("glass"));
console.log(convertToUpperCase("BREAD"));


// LOWER CASE

// ** 1: convert to upper case
// ** 2: console the data
// ** 3: convert to lower case
// ** 4: console the data

function convertToLowerCase(data: string): string {
    const stringInLowerCase = data.toLowerCase();
    return stringInLowerCase;
}

let lowerCaseData = convertToLowerCase(upperCaseData)
console.log(lowerCaseData);

//  create a function that takes amount as an arguement and return any item name

const items = {
    1500: "2kg rice",
    2000: "4kg wheat",
    1000: "1kg sugar"
}

function buyItem(amount: number): string {
    const itemName = items[amount];
    return itemName;
}
const item = buyItem(2000);
console.log(item);

//  Function will take firstName, lastName, email and phone number (otional)
// return object

interface user {
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber?: string
}

function makeObject(firstName: string, lastName: string, email: string, phoneNumber?: string): user{
    return {
        firstName,
        lastName,
        email,
        phoneNumber
    }
}

const obj = makeObject("Khansa","Rahman","khansa@example.com","01234")

const obj2 = makeObject("Khansa","Rahman","khansa@example.com")

console.log(obj);
console.log(obj2);