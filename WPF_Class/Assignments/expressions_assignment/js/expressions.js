/**
 * Created with JetBrains WebStorm.
 * User: diogocabral
 * Date: 9/12/13
 * Time: 9:35 PM
 * To change this template use File | Settings | File Templates.
 */

//    Diogo Cabral - Expressions Screencast

//screencast - basic expressions//
var a = 3;
var b;
b = a + 5;

console.log(b);

//screencast - example expressions//
var yearBorn = 1974;
var age = 2013 - yearBorn;

console.log(age);

//screencast - arithmetic operators//
var grade1 = 8;
var grade2 = 7;

var average = (grade1 + grade2)/2;

console.log(average);

//screencast - using modulo//

var remaider = (grade1 + grade2) % 2;

console.log(remaider);

//screencast - order of operations//

var width = 9;
var heigh = 8;

var perimeter = (width*2) + (heigh*2);

console.log("Perimeter" + " "+ perimeter);

//screencast - using arrays//

var grades = [10, 12, 20, 18, 30];
var finalGrade = grades[0] + grades[1] + grades[2] + grades[3] + grades[4];

console.log(finalGrade);

//screencast - concatenating srtings//

var firsName = "Diogo";
var lastName = "Cabral";


var studentDegree = "Web Design";

var studentInfo = firsName + " " + lastName + " - " + studentDegree;
console.log (studentInfo);

