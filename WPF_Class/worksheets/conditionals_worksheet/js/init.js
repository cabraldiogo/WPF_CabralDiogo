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

