/**
 * Created with JetBrains WebStorm.
 * User: diogocabral
 * Date: 9/16/13
 * Time: 12:41 PM
 * To change this template use File | Settings | File Templates.
 */



//Casting section of the Lecture
//Please ask questions if it is not clear.


var numberVariable = 10+'';
var stringVariable='happy';
var otherNumberVariable=15;
var concatVariable = numberVariable*1 + otherNumberVariable;
console.log(concatVariable);




//conditionals example
   var hitPoints=3;
   var result ='';
if(hitPoints<=0){
   result = 'You are super dead.';
   }
else{
    result='You are alive.'
}
console.log(result);
//
//var newArray = [];
//newArray[0]='apple';
//newArray[1]='pear';
//newArray[2]='orange';
//
////
////    ,'pear','orange'
// console.log(newArray[0]);
//newArray.push('bat');
//console.log(newArray[3]);
//
//newArray.pop();
//console.log(newArray[3]);
//console.log(newArray.indexOf('pear'));
//newArray.shift(); //remove items from the left
//console.log(newArray[0]);
//newArray.sort();
//console.log(newArray[0]);






//var newArray = [];
//newArray[0]=['pear', 'apple','grape'];
//newArray[1]=['bat','cat','rat','frog'];
//newArray[2]=['Joe','Sae','Apollo','Starbuck','Malik'];
//
//console.log(newArray[0][2]);
//newArray[3]=[];
//newArray[3][0]='Monkey';
//
//console.log(newArray[3][0]);
//

//
//var loopingArray =[];
//
//for(i=0;  //initialize variable and value
//    i<=10;  //number of times to do the loop
//    i++)   //what to do to the initial value after the loop is done
//{
// //Stuff to be done
//    console.log(i);
//    loopingArray[i]=[];
//    loopingArray[i][0]='pos ' + i;
//
//
//    console.log(loopingArray [i][0]);
//}


// var promptValue = parseInt(prompt('How many loops'));
//for(i=promptValue;i>0;i--){
//    console.log(i);
//}

//console.log(Math.random());

// jamaican 35%, japanize 35%, burgers 10%, duck 20%


//var foodType;
//var randomValue = Math.random();
//var jamaican=.35;
//var japan =.7;
//var burger=.8;
//var duck = 1;
//
//if(randomValue <jamaican){foodType ='Jamaican'}
//else if (randomValue<japan){foodType = 'Japan'}
//else if (randomValue<burger){foodType = 'Burger'}
//else {foodType='Duck'}
//
//console.log(foodType);
//console.log(randomValue);