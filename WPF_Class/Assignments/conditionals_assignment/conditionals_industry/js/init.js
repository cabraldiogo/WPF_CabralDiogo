/**
 * Created with JetBrains WebStorm.
 * User: diogocabral
 * Date: 9/16/13
 * Time: 9:07 PM
 * To change this template use File | Settings | File Templates.
 */

//Diogo Cabral - 9/16/2013 - Conditionals Assignment//


var week1 = window.parseInt (prompt("How many meters did you run on week 1 ?"));
//This validation is not working. I even tried to run a IF but it is not working
//while (week1<=0){
//    window.prompt("You should enter a value greater than 0 ")
//}
//This is a prompt window to input a numeric value
var week2 = window.parseInt (prompt("How many meters did you run on week 2 ?"));

////This is a prompt window to input a numeric value
var week3 = window.parseInt (prompt("How many meters did you run on week 3 ?"));

////This is a prompt window to input a numeric value
var week4 = window.parseInt (prompt("How many meters did you run on week 4 ?"));

//This variable get the sum of all four values entered by the user
var total = week1+week2+week3+week4;

//This variable get average of the 4 weeks
var average = total/4;

//This conditional states the performance of the runner based on how much he/she ran
if (total >8000){
   console.log("You did a great job this month!")
} else if(total > 4000){
    console.log("You achieve the minimum distance required, but you should improve next month")
    }  else {
    console.log("You've been lazy this month. Let' run!")
}
//This console.log print out the total month performance and the week average
console.log("Your total run distance was "+ total+ " meters");
console.log("This month you ran an average of "+ average + " meters per week");



