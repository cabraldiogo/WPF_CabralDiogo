/**
 * Created with JetBrains WebStorm.
 * User: diogocabral
 * Date: 9/16/13
 * Time: 9:07 PM
 * To change this template use File | Settings | File Templates.
 */

//Diogo Cabral - 9/16/2013 - Conditionals Assignment//

//    Validation is working
var week1 = window.parseInt (prompt("How many meters did you run on week 1 ?"));
var week2 = window.parseInt (prompt("How many meters did you run on week 2 ?"));
var week3 = window.parseInt (prompt("How many meters did you run on week 3 ?"));
var week4 = window.parseInt (prompt("How many meters did you run on week 4 ?"));

var total = week1+week2+week3+week4;
var average = total/4;


if (total >8000){
   console.log("You did a great job this month!")
} else if(total > 4000){
    console.log("You achieve the minimum distance required, but you shoul improve next month")
    }  else {
    console.log("You've been lazy this month. Let' run!")
}

console.log("Your total run distance was "+ total+ " meters");
console.log("You ran an average of "+ average + " meters per week this month");



