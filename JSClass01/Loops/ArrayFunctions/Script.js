/*
Coding Challenge: Supermarket Inventory Management System

Objective:
Write a program to manage a supermarket's inventory. You must handle adding products, selling items, auto-refilling empty stock, and calculating total revenue using built-in array methods.

Tasks:

Initial Setup: Create an array of product objects. Each object must have: id, name, price, and stockQuantity.

Add New Stock (push): Add a newly arrived product to the inventory list.

Process a Sale (find & map): Write a function to sell a product by its id.

Find the exact product.

Decrease its stockQuantity by 1.

Auto-Refill (filter & forEach): Find all products where stockQuantity drops to 0. Automatically update their stock back to 50 items.

Calculate Total Value (reduce): Find the total expected revenue if you sell every item currently in stock (Price × Quantity).

Remove Discontinued Item (splice or filter): Remove a specific product completely from the system because it is no longer sold.

Sort by Price (sort): Arrange the inventory list from the cheapest to the most expensive item.
*/

let products = {
    id: [1,2,3],
    name: ["Soap","Shampoo","Milk"],
    price: [25,15,35],
    quantity:[5,3,7]
}

console.log("Before Adding items: \n\n",products);

const nopa = 2; //No.Of Products going to add

// //Adding Item
// for(i = 0; i < nopa; i++){
//     for(let keys in products){
//         products[`${keys}`].push(prompt(`Enter product's ${keys}: `))
//     }
// }

console.log("After Adding items: \n\n",products);


//If a stock is purchased the quatity should be decreased
const cart = {
    pname : ["Soap","Milk"],
    quantity : [3,2]
}

products.quantity = products.quantity.map((value,index) => {
    for(let val in cart.quantity){
       const idx = products.name.indexOf(cart['pname'][val])
        if( index == idx ){
            value -= cart.quantity[val];
        }
    }
    return value;
})
 
console.log("After Purchased: ",products)
//Removing Last 2 Itemd
const nopr = 2; //No.Of Products going to remove
for(i = 0; i < nopa; i++){
    for(let keys in products){
       products[`${keys}`].pop()
    }
}

console.log("After Removing last 2 items: \n\n",products);

//removing particular Item
const rid = 1; //Remove by product id
const idx = products["id"].indexOf(rid);
for(let keys in products){
   var removedProducts =  products[`${keys}`].filter((Value, index) => index != idx )
}



console.log("After removing Particular items: \n",removedProducts);



