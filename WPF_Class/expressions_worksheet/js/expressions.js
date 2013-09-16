/**
 * Created with JetBrains WebStorm.
 * User: diogocabral
 * Date: 9/13/13
 * Time: 9:24 PM
 * To change this template use File | Settings | File Templates.
 */

//console.log("Hello");

//Dogs age 7 times faster than humans so a dog that is 1 year old in human years is 7 years old in “dog years.”
// Calculate how old Sparky the pit bull is in dog years based on his actual age.
//Givens:   Sparky’s age. ,  Result Varable:   Sparky’s age in dog years. Result to Print:
//“Sparky is X human years old which is X in dog years. //


var age = 3;
var ageRate = 7;

var dogsAge = age * ageRate;

console.log("Sparky's age is "+ age + " human years old which is "+ dogsAge + " in dog years");

//A bunch of students are having a party and somebody ordered pizza. Create an expression that calculates how much
// pizza each partygoer will get at the party.  (Assume all pizzas have the same number of slices and that the person
// dividing the pizza is really precise, so this can be a decimal, like 3.52 slices, etc.)


var SlicesPerPizza = 9;
var people = 14;
var pizzas = 5;

var slicesPerson = (pizzas * SlicesPerPizza) / people;

console.log("Each person ate "+ slicesPerson+ " slices of pizza at the party");

// Pizza part. 2//

var leftover = pizzas * SlicesPerPizza % people;
console.log("Spary got "+leftover+ " slices of pizza");




//You are budgeting your money for the year and must calculate your average weekly grocery shopping spending over the past five weeks.//

var weekCost = [10, 12, 20, 18, 30];
var  totalCost = weekCost[0] + weekCost[1] + weekCost[2] + weekCost[3] + weekCost[4];
var  averageCost = totalCost/5;
console.log("You have spent a total of $"+ totalCost + " on groceries over 5 weeks. That is an average of $"+ averageCost+ " per week");


//Calculate the discounted price for an item. Create an expression that will calculate the discounted price with and without sales tax.//

var regPrice = 100;
var discount = 0.20;
var productName = "iPad";
var percent = 6;
var salesTax = (percent/100);

var discPriceNoTax = regPrice - (regPrice*discount);
var discPriceWithTax = regPrice - (regPrice*discount) + (discPriceNoTax*salesTax);

console.log( "Your "+ productName+ " was originally $"+ regPrice+ ", but after a "+ percent
    + "% discount, it is now $"+ discPriceNoTax+ ", and $"+ discPriceWithTax+ " with tax.");







































