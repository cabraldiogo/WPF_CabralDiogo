/**
 * Created with JetBrains WebStorm.
 * User: diogocabral
 * Date: 9/16/13
 * Time: 9:08 PM
 * To change this template use File | Settings | File Templates.
 */

//Diogo Cabral - 9/16/2013 - Conditionals Assignment - Wacky//

var tripBudget = parseInt(window.prompt("Enter your total budget for the trip"));       //Input for the total budget

var tripDistance = window.prompt("Enter the mile's distance of your trip");     //Input that asks the trip distance

var fuelPerformance = window.prompt("Enter your car fuel performance (Miles per Gallon)."); //Input that asks the car fuel performance (MPG)

var gallonCost = window.prompt("Enter an average fuel gallon cost"); //Input that asks a estimate fuel gallon cost

var tripFuelCost = (tripDistance/fuelPerformance) * gallonCost;  //This var calculate the total fuel cost for the trip

console.log ("Your total fuel cost for this trip is $" + tripFuelCost+ " dollars."); // This logs that concatenates a text string and the total fuel cost

var fuelPercent = (tripFuelCost/tripBudget)*100;// this calculate the percentage of the fuel cost of the total budget

//this ternary check if the fuel cost is over 50% of the budget and returns a message to the user
(fuelPercent >50) ? console.log("Your total fuel cost is over 50% of your total budget. You should rethink your trip"):
    console.log("Have a nice trip!" );









