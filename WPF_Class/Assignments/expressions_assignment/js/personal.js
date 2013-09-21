/**
 * Created with JetBrains WebStorm.
 * User: diogocabral
 * Date: 9/20/13
 * Time: 8:55 PM
 * To change this template use File | Settings | File Templates.
 */

//Diogo Cabral - Expressions Assignment

//This a calculator to help organizing a barbecue.
// It will gives the quantity of beer and  steak that the organizer should buy


var qtyTotalPeople = window.prompt(" Please enter the total number of people that are coming to the barbecue");

var qtyMale = window.prompt(" How many males are coming?");

var qtyFemale = window.prompt(" How many females are coming?");

var qtyUnder16 = window.prompt(" How many people under 16 years old are coming?");

//This array contains the quantity of beer per Male, Female and Under 16
var beerQtyRate = [4,2,0];

//This array contain the quantity of steak per Male, female and kids;
var steakQtyrate = [400,300,100];

//This variable will calculate how many beer cans the organizer needs to buy
var totalBeer = (qtyMale * beerQtyRate[0] + qtyFemale * beerQtyRate[1] + qtyUnder16 * beerQtyRate[2]);

//This variable will calculate how many kilos of steak the organizer needs to buy
var totalSteak = (qtyMale * steakQtyrate[0] + qtyFemale * steakQtyrate[1] + qtyUnder16 * steakQtyrate[2])/1000;

console.log("You should buy "+ totalBeer + " bottles of beer and " + totalSteak + "Kg of steak.");













