/**
 * Created with JetBrains WebStorm.
 * User: diogocabral
 * Date: 9/25/13
 * Time: 7:13 PM
 * To change this template use File | Settings | File Templates.
 */


//    DIOGO CABRAL - FUNCTIONS ASSIGNMENT

//Input for last name
var lastName = prompt("Enter you last name");

//input for first name
var firsttName = prompt("Enter you first name");

//input with options for the degreem program
var degree = prompt("Enter the number that correspond to your degree program: Web Design : 1  | Film : 2  | Recording Arts: 3");

//array with the launchbox costs
var launchBox = ["2000","2500","3000"];

//array that contain the programs name
var programs = [];
    programs[0] = "Web Design";
    programs[1] = "Film";
    programs[2] = "Recording Arts";

//function that call last name and first name and print it as First Name + Last Name
function studentInfo(lastName,firstName){
    return firstName + lastName
}
console.log(studentInfo(lastName,firsttName));

//If conditionals to check the degree chosen by the user. Depending on each program will print a different launch box cost and it
//will also call the program name array
if  (degree < 1 || degree >3)
{alert("You should enter the options 1, 2 or 3, according to the desired program. Refresh you page and try again");

}if (degree == 1){
    console.log("The cost of the " + programs[0] + " launchbox is $" + launchBox[0]);
} else if (degree == 2){
    console.log("The cost of the " + programs[1] + " launchbox is $" + launchBox[1]);
} else if (degree == 3){
    console.log("The cost of the " + programs[2] + " launchbox is $" + launchBox[2]);
} else {

}



