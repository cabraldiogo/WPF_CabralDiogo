/**
 * Created with JetBrains WebStorm.
 * User: diogocabral
 * Date: 9/25/13
 * Time: 7:13 PM
 * To change this template use File | Settings | File Templates.
 */


//    DIOGO CABRAL - FUNCTIONS ASSIGNMENT


//Input for the purchase total value
var products = parseInt(prompt("Enter the total value of your purchase"));

// Input to the customer use a discount cupom if necessary
var discountCupom = (prompt("If you have a discount cupom, enter the code here. Otherwise leave it blank"));

// This is just the title for the order details
console.log("Your order details");

// this console.log the sub-total
console.log("Sub-total $" + products);

//This conditional gives a free shipping if the order is over $50, otherwise the shipping cost is $7
if(products > 50){
        shippingCost = 0;
}else{
        shippingCost = 7;
}

//this conditionals checks if the customer entered the correct discount cupom. If so, he will get a 10% discount
if(discountCupom == "promo"){
    products = products * 0.9

}else {
    products = products*1
}

// this var calculates the grand total
var grandTotal = products + shippingCost;


console.log("Sub-total with discount $" + products);
console.log("Shipping Cost $" + shippingCost);
console.log("Your order grand total is $" + grandTotal);


