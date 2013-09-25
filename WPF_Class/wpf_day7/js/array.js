/**
 * Created with JetBrains WebStorm.
 * User: diogocabral
 * Date: 9/23/13
 * Time: 6:09 PM
 * To change this template use File | Settings | File Templates.
 */

//
//var fruitArray = ["Apple", "Orange", "Lemon", "Tangerine", "Grape", "Strawberry"];
//
////console.log(fruitArray);
//
//var fruitArray = [];
//fruitArray[0] = "Apple";
//fruitArray[1] = "Orange";
//fruitArray[2] = "Lemon";
//fruitArray[3] = "Tangerine";
//fruitArray[4] = "Grape";
//fruitArray[5] = "Strawberry";

var newArray = [];
for(i=0;i<6;i++){
    newArray[i] = [];
    for(j=0;j<6;j++){
    newArray[i][j] = j*i;
    }

}

//newArray[5][5] = 6;
console.log(newArray);



