const details = ["Name", "Age", "city"];
const obj = {}; // Initializes the empty object

// Loop 1: for..of loop to collect user input and populate the object
for (let value of details) {
    obj[value] = prompt(`Enter ${value}:`);
}

console.log("--- Collected Data ---");

// Loop 2: for..in loop to iterate through the object keys and print them
for (let key in obj) {
    console.log(key + ": " + obj[key]);
}