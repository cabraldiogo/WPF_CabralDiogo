/**
 * Created with JetBrains WebStorm.
 * User: diogocabral
 * Date: 9/25/13
 * Time: 7:13 PM
 * To change this template use File | Settings | File Templates.
 */


//    DIOGO CABRAL - FUNCTIONS ASSIGNMENT


var lastName = prompt("Enter you last name");

var firsttName = prompt("Enter you first name");

var degree = prompt("Enter the number that correspond to your degree program: Web Design : 1  | Film : 2  | Recording Arts: 3");

var launchBox = ["2000","2500","3000"];

var programs = [];
    programs[0] = "Web Design";
    programs[1] = "Film";
    programs[2] = "Recording Arts";


function studentInfo(lastName,firstName){

    return firstName + lastName

}

console.log(studentInfo(lastName,firsttName));


if  (degree < 1 || degree >3)
{alert("You should enter the options 1, 2 or 3, according to the desired program");

}else if (degree == 1){
    console.log("The cost of the " + programs[0] + " launchbox is $" + launchBox[0]);
} else if (degree == 2){
    console.log("The cost of the " + programs[1] + " launchbox is $" + launchBox[1]);
} else {
    console.log("The cost of the " + programs[2] + " launchbox is $" + launchBox[2]);
}



