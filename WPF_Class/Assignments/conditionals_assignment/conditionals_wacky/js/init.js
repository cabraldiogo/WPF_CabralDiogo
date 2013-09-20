/**
 * Created with JetBrains WebStorm.
 * User: diogocabral
 * Date: 9/16/13
 * Time: 9:08 PM
 * To change this template use File | Settings | File Templates.
 */

//Diogo Cabral - 9/16/2013 - Conditionals Assignment//

var tripDistance = window.prompt("Enter the mile's distance of your trip");

var fuelPerformance = window.prompt("Enter your car fuel performance (Miles per Gallon).");

var gallonCost = window.prompt("Enter an average fuel gallon cost");

var tripFuelCost = (tripDistance/fuelPerformance) * gallonCost;

console.log(tripFuelCost);





