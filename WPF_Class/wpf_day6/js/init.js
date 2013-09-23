/**
 * Created with JetBrains WebStorm.
 * User: diogocabral
 * Date: 9/22/13
 * Time: 5:30 PM
 * To change this template use File | Settings | File Templates.
 */

//Diogo Cabral - Class Activity

// Declare 3 variables
var a = 3;
var b = 2;
var c = -2;

//Block 1
var result1 = (a * b) + c;

// I console log this to test the first block of code. Is working fine.
//console.log(result1);



//Block 2
// Still don' know if c must subtract from the result1 or do the structure of block one but instead of adding c we subtract c
if (c<0){
    result1 = (a * b) - c;
}
//console.log(result1);



//Block 2 - Second option
// I think what Joe asked for the second block is what I did above, but just in case I wrote another option
if (c<0){
    result1 = result1 - c;
}
//console.log(result1);


// Block 3

var result3 = [];
for (i=0; i<10; i++){
    a = a+2;
    b = b+3;
    c = c+1;
    result3[i] = a * b - c;

}

console.log(result3);






