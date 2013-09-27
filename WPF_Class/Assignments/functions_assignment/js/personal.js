/**
 * Created with JetBrains WebStorm.
 * User: diogocabral
 * Date: 9/25/13
 * Time: 7:13 PM
 * To change this template use File | Settings | File Templates.
 */


//    DIOGO CABRAL - FUNCTIONS ASSIGNMENT


var thisMonth = parseInt(prompt("Enter this month total sales"));
var lastYearMonht = parseInt(prompt("Enter the total sales of the same monht last year"));


var result = (thisMonth/lastYearMonht)-1;

//console.log(result);


function percent(result){

   return Math.round(result*100) + "%";
}

//console.log("Check below your percentage of this month sales compared with the same month last year");

(result > 0) ?
    console.log(("This month you increased your sales on " ) + percent(result)):
    console.log(("This month you decreased your sales on " ) + percent(result));
















