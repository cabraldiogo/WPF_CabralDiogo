/**
 * Created with JetBrains WebStorm.
 * User: diogocabral
 * Date: 9/20/13
 * Time: 8:54 PM
 * To change this template use File | Settings | File Templates.
 */

//Diogo Cabral - Expressions Assignment

alert("This is calculator for your markup value of a product");

//This prompt get the cost of a product
var cost = parseInt(window.prompt("Enter the cost of your product"));

//This prompt get the sales price of a product
var salesPrice = parseInt(window.prompt("Enter the sales price of your product"));

//This prompt gets the total pieces sold
var qtySold = parseInt(window.prompt("Enter how pieces did you sell so far"));

// This var calculates the markup value
var markUp = (salesPrice/cost)-1;

//This var round the result of the markUp
var markUpRound = Math.round(markUp*100);

//This var calculates the total revenue
var revenue = salesPrice * qtySold;

console.log("Your total revenue on this product was $" + revenue + " , and your markup is " + markUpRound + "%");





