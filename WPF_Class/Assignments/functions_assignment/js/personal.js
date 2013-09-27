/**
 * Created with JetBrains WebStorm.
 * User: diogocabral
 * Date: 9/25/13
 * Time: 7:13 PM
 * To change this template use File | Settings | File Templates.
 */


//    DIOGO CABRAL - FUNCTIONS ASSIGNMENT

//input for this month total sales
var thisMonth = parseInt(prompt("Enter this month total sales"));

// input for the same monht last year sales total
var lastYearMonht = parseInt(prompt("Enter the total sales of the same monht last year"));

//this var calculates the percentage as a decimal
var result = (thisMonth/lastYearMonht)-1;

//console.log(result);

//this function get the decimal result, turns it into whole number a add a percentage sign
function percent(result){

   return Math.round(result*100) + "%";
}


//This ternary check if the user has a increase or decrease on sales compared the last year
(result > 0) ?
    console.log(("This month you increased your sales on " ) + percent(result)):
    console.log(("This month you decreased your sales on " ) + percent(result));
















