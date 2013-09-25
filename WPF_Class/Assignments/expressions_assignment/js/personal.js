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

//*****Joe Dalton *****//
    //You should use parseInt around your prompts

var qtyTotalPeople = parseInt(window.prompt(" Please enter the total number of people that are coming to the barbecue"));

var qtyMale = parseInt(window.prompt(" How many males are coming?"));

var qtyFemale = parseInt(window.prompt(" How many females are coming?"));

var qtyUnder16 = parseInt(window.prompt(" How many people under 16 years old are coming?"));

//This array contains the quantity of beer per Male, Female and Under 16
var beerQtyRate = [4,2,0];

//This array contain the quantity of steak per Male, female and kids;
var steakQtyrate = [400,300,100];

//This variable will calculate how many beer cans the organizer needs to buy
var totalBeer = (qtyMale * beerQtyRate[0] + qtyFemale * beerQtyRate[1] + qtyUnder16 * beerQtyRate[2]);

//*****Joe Dalton *****//
// good use of arrays

//This variable will calculate how many kilos of steak the organizer needs to buy
var totalSteak = (qtyMale * steakQtyrate[0] + qtyFemale * steakQtyrate[1] + qtyUnder16 * steakQtyrate[2])/1000;

//The final result shows how many cans of beer and how many kilograms of steak the organizer needs to buy
console.log("You should buy "+ totalBeer + " bottles of beer and " + totalSteak + "Kg of steak.");













