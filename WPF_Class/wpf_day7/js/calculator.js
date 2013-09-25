///**
// * Created with JetBrains WebStorm.
// * User: diogocabral
// * Date: 9/23/13
// * Time: 5:23 PM
// * To change this template use File | Settings | File Templates.
// */
//
//
//
////weight 10
//var variants = 100;
////5
//var calculations = 100;
//
////35
//var condionals = 100;
//
////10
//var validations = 100;
//
////10
//var comments = 100;
//
////10
//var github = 100;
//
////10
//
//var files = 100;
//
////5
//var completeness = 100;
//
////5
//var investment = 100;
//
//
////weight 10
//var variantsGrade = variants*0.1;
////5
//var calculationsGrade = calculations*0.05;
//
////35
//var condionalsGrade = condionals*0.35;
//
////10
//var validationsGrade = validations*0.10;
//
////10
//var commentsGrade = comments*0.10;
//
////10
//var githubGrade = github*0.10;
//
////10
//var filesGrade = files*0.10;
//
////5
//var completenessGrade = completeness*0.05;
//
////5
//var investmentGrade = investment*0.05;
//
//
//var finalGrade = (variantsGrade+calculationsGrade+condionalsGrade+validationsGrade+commentsGrade+githubGrade+filesGrade+completenessGrade+investmentGrade);
//
//
////console.log(finalGrade);
//
//
////second version
//
////parseInt(prompt("Enter student variant grade.Excelent:100 | Good: 75 | Fair: 30 | Poor: 0"));
//
//
//
////weight 10
//var variants = parseInt(prompt("Enter student variant grade. Excelent:100 | Good: 75 | Fair: 30 | Poor: 0"));
////5
//var calculations = parseInt(prompt("Enter student calculations grade. Excelent:100 | Good: 75 | Fair: 30 | Poor: 0"));
//
////35
//var condionals = parseInt(prompt("Enter student conditionals grade. Excelent:100 | Good: 75 | Fair: 30 | Poor: 0"));
//
////10
//var validations = parseInt(prompt("Enter student validation grade. Excelent:100 | Good: 75 | Fair: 30 | Poor: 0"));
//
////10
//var comments = parseInt(prompt("Enter student comments grade. Excelent:100 | Good: 75 | Fair: 30 | Poor: 0"));
//
////10
//var github = parseInt(prompt("Enter student github grade. Excelent:100 | Good: 75 | Fair: 30 | Poor: 0"));
//
////10
//
//var files = parseInt(prompt("Enter student files grade. Excelent:100 | Good: 75 | Fair: 30 | Poor: 0"));
//
////5
//var completeness = parseInt(prompt("Enter student completeness grade. Excelent:100 | Good: 75 | Fair: 30 | Poor: 0"));
//
////5
//var investment = parseInt(prompt("Enter student investment grade. Excelent:100 | Good: 75 | Fair: 30 | Poor: 0"));
//
//
////weight 10
//var variantsGrade = variants*0.1;
////weight 5
//var calculationsGrade = calculations*0.05;
//
////weight 35
//var condionalsGrade = condionals*0.35;
//
////weight 10
//var validationsGrade = validations*0.10;
//
////weight 10
//var commentsGrade = comments*0.10;
//
////weight 10
//var githubGrade = github*0.10;
//
////weight 10
//var filesGrade = files*0.10;
//
////weight 5
//var completenessGrade = completeness*0.05;
//
////weight 5
//var investmentGrade = investment*0.05;
//
//
//var finalGrade = (variantsGrade+calculationsGrade+condionalsGrade+validationsGrade+commentsGrade+githubGrade+filesGrade+completenessGrade+investmentGrade);
//
//
//
//
//var gradeLetter = "";
//
//if (finalGrade>=95){
//    gradeLetter = "A+"
//
//}else if(finalGrade>=90){
//    gradeLetter = "A"
//
//}else if(finalGrade>=85){
//    gradeLetter = "B+"
//
//}else if(finalGrade>=80){
//    gradeLetter = "B"
//
//}else if(finalGrade>=73){
//    gradeLetter = "C"
//
//}else if(finalGrade>=70){
//    gradeLetter = "D"
//
//}else{
//    gradeLetter = "F"
//}
//
//
//console.log("Your final grade is "+ finalGrade + " which represents a " + gradeLetter);





// Calculator for CMA

//weight 10
var class1 = parseInt(prompt("Class1"));
//5
var class2 = parseInt(prompt("Class2"));

//35
var class3 = parseInt(prompt("Class3"));

//10
var class4 = parseInt(prompt("Class4"));

//10
var class5 = parseInt(prompt("Class5"));

//10
var class6 = parseInt(prompt("Class6"));

//10

var aleksModule1 = parseInt(prompt("Aleks Module 1"));

//5
var aleksTest1 = parseInt(prompt("Test 1"));

//5
var scavengerHunt = parseInt(prompt("Scavenger Hunt"));


//weight 10
var class1Grade = class1*0.01;
//weight 5
var class2Grade = class2*0.01;

//weight 35
var class3Grade = class3*0.01;

//weight 10
var class4Grade = class4*0.01;

//weight 10
var class5Grade = class5*0.01;

//weight 10
var class6Grade = class6*0.01;

//weight 10
var aleksModule1Grade = aleksModule1*0.10;

//weight 5
var aleksTest1Grade = aleksTest1*0.14;

//weight 5
var scavengerHuntGrade = scavengerHunt*0.10;


var finalGrade = (class1Grade+class2Grade+class3Grade+class4Grade+class5Grade+class6Grade+aleksModule1Grade+aleksTest1Grade+scavengerHuntGrade);

console.log("Your final grade is "+ finalGrade );

