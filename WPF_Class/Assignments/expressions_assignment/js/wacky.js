/**
 * Created with JetBrains WebStorm.
 * User: diogocabral
 * Date: 9/20/13
 * Time: 8:54 PM
 * To change this template use File | Settings | File Templates.
 */

//Diogo Cabral - Expressions Assignment

alert("This is calculator for your markup value of a product");

var cost = parseInt(window.prompt("Enter the cost of your product"));

var salesPrice = parseInt(window.prompt("Enter the sales price of your product"));

var qtySold = parseInt(window.prompt("Enter how pieces did you sell so far"));


var result = (salesPrice/cost)-1;
var result2 = Math.round(result*100);

console.log(result2);





