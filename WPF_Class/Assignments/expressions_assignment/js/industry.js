/**
 * Created with JetBrains WebStorm.
 * User: diogocabral
 * Date: 9/20/13
 * Time: 8:54 PM
 * To change this template use File | Settings | File Templates.
 */

//Diogo Cabral - Expressions Assignment

//I will create a monthly payment calculator for car financing.

//This input requires the price of the desired car
var carPrice = parseInt(window.prompt("Enter the desired car value"));

// This prompt requires the percentage of sales tax
var salesTax =  parseInt(window.prompt ("Enter the sales tax on your town"));

// This prompt ask for the number of months for the financing
var monthTerms = parseInt(window.prompt("Enter the number of months are your term"));

//This prompt asks for the annual interest rate
var aprRate = parseInt(window.prompt("Enter the annual percentage rate (APR)."));


//this prompt aks for the downpayment value or trade-in value
var downPayment = parseInt(window.prompt("Enter the downpayment value or the trade-in value"));

//This variable converts the sales tax rate into decimals
var salesTaxDecimal = (salesTax/100);


// This var returns the value of the sales tax to pay
var salesTaxValue = (carPrice * salesTaxDecimal);

//This var returns the monthly interest rate based on the annual rate
var monthlyInterest = (aprRate/12);

//this var calculates the total amount of interest that the buyer will pay
var totalInterest = (monthlyInterest*monthTerms)/100 * (carPrice - downPayment);

//This var calculate the total value to pay, including the interest and sales tax
var totalValue = (carPrice - downPayment) + totalInterest + salesTaxValue;

//This var calculates the approximately monthly payment
var monthlyPayment = Math.round(totalValue/monthTerms);

console.log("Your estimated monthly payment will be $" + monthlyPayment);









