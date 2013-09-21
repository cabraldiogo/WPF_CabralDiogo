/**
 * Created with JetBrains WebStorm.
 * User: diogocabral
 * Date: 9/20/13
 * Time: 8:54 PM
 * To change this template use File | Settings | File Templates.
 */

//Diogo Cabral - Expressions Assignment

//I will create a monthly payment calculator for car financing.

var carPrice = parseInt(window.prompt("Enter the desired car value"));

var salesTax =  parseInt(window.prompt ("Enter the sales tax on your town"));

var monthTerms = parseInt(window.prompt("Enter the number of months are your term"));

var aprRate = parseInt(window.prompt("Enter the annual percentage rate (APR)."));

var downPayment = parseInt(window.prompt("Enter the downpayment value or the trade-in value"));

var salesTaxDecimal = (salesTax/100);



var salesTaxValue = (carPrice * salesTaxDecimal);
var monthlyInterest = (aprRate/12);
var totalInterest = (monthlyInterest*monthTerms)/100 * (carPrice - downPayment);
var totalValue = (carPrice - downPayment) + totalInterest + salesTaxValue;
var monthlyPayment = Math.round(totalValue/monthTerms);








