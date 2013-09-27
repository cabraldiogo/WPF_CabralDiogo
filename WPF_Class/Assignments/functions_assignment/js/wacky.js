/**
 * Created with JetBrains WebStorm.
 * User: diogocabral
 * Date: 9/25/13
 * Time: 7:13 PM
 * To change this template use File | Settings | File Templates.
 */


//    DIOGO CABRAL - FUNCTIONS ASSIGNMENT


var products = parseInt(prompt("Enter the total value of your purchase"));
var discountCupom = (prompt("If you have a discount cupom, enter the code here. Otherwise leave it blank"));

console.log("Your order details");
console.log("Sub-total $" + products);

if(products > 50){
        shippingCost = 0;
}else{
        shippingCost = 7;
}

if(discountCupom == "promo"){
    products = products * 0.9

}else {
    products = products*1
}


var grandTotal = products + shippingCost;


console.log("Sub-total with discount $" + products);
console.log("Shipping Cost $" + shippingCost);
console.log("Your order grand total is $" + grandTotal);


