/**
 * Created with JetBrains WebStorm.
 * User: diogocabral
 * Date: 9/16/13
 * Time: 9:08 PM
 * To change this template use File | Settings | File Templates.
 */

//Diogo Cabral - 9/16/2013 - Conditionals Assignment - Personal//



alert("This calculator is gonna tell if the property your are looking to buy has a reasonable asking price based on the square footage");
//This prompt will get the square footage
var sqFootage = window.prompt("Enter the house square footage. ");
//this prompt will get the asking price
var askPrice = window.prompt("Enter the asking price. Use only numbers ");

//This variable will result the price per squere meter
var pricePerSqFeet = askPrice/sqFootage;

//This variable will show the final result on the console log, according the the conditional bellow
var result = "";

//This conditonal will compare the asking price entered by the user and will show if the price is low, high or fair
if (pricePerSqFeet>100){
    result ="The property is overpriced";
}else if(pricePerSqFeet>80){
    result ="The property is priced within the actual market prices";
}else {result = "The property is underpriced" };

console.log(result);








