/**
 * Created with JetBrains WebStorm.
 * User: diogocabral
 * Date: 9/18/13
 * Time: 10:11 AM
 * To change this template use File | Settings | File Templates.
 */

// Last Chance for Gas - Exercise
//A driver has to determine if they can make it across the desert with their current fuel.
//They are about to past the last gas station for the next 200 miles and
// they need to determine whether they should stop now for gas or not.

var milesPerGallon = 30;
var percentTank = 0.7;

//Tank capacity in gallons
var tankCapacity = 10;
// How many tanks left
var actualGallons = (tankCapacity*percentTank);

if (percentTank >=0.7){
    console.log("Yes, you can make it without stopping for gas!")

}else{
    console.log("You only have "+ actualGallons +  " gallons of gas in your tank, better get gas now while you can!")
}


//Group 2 exercise - Grade Letter Calculator

//A student earns a number grade at the conclusion of a course at Full Sail
//Determine the appropriate letter grade for that number using conditional statements.

var studentGrade = 95;

var gradeLetter = "";

if (studentGrade>=95){
    gradeLetter = "A+"

}else if(studentGrade>=90){
    gradeLetter = "A"

}else if(studentGrade>=85){
    gradeLetter = "B+"

}else if(studentGrade>=80){
    gradeLetter = "B"

}else if(studentGrade>=73){
    gradeLetter = "C"

}else if(studentGrade>=70){
    gradeLetter = "D"

}else{
    gradeLetter = "F"
}

console.log("You have a " + studentGrade + "%, which means you have earned a(n) "+ gradeLetter + " in the class");