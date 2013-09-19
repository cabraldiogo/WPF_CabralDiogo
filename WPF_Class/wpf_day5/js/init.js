/**
 * Created with JetBrains WebStorm.
 * User: diogocabral
 * Date: 9/18/13
 * Time: 5:33 PM
 * To change this template use File | Settings | File Templates.
 */



//Casting section of the Lecture
//Please ask questions if it is not clear.


//var numberVariable= 10+'';
//var stringVariable='happy';
//var otherNumberVariable=15;
//var concatVariable = numberVariable*1 + otherNumberVariable;
//console.log(concatVariable);


//conditionals example
//   var hitPoints=0;
//   var result ='';
//if(hitPoints<=0){
//   result = 'You are super dead.';
//   }
//else{
//    result='You are alive.'
//}
//console.log(result);
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

// Day 4

//Review of the Day 3 class


//
//var xyzArray = [];
//
//xyzArray[0] = 'happy';
//xyzArray[1] = 'Full Sail';
//xyzArray[2] = 7;
//xyzArray[3] = 'bat';
//
//for(i=0;i<xyzArray.length;i=i+1){
//    console.log(i);
//}


//Start of the Functions Section and Examples
//
//function myFirstFunction (number1, number2)
//    {
//     var productOfNum1AndNum2;
//     productOfNum1AndNum2 = parseInt(number1) * parseInt(number2);
//     return productOfNum1AndNum2;
//    }
//
//
//   console.log(myFirstFunction(5,7));
//
//
//function mySecondFunction (number1, number2)
//{
//    return parseInt(number1) + parseInt(number2);
//}
//console.log(mySecondFunction(5,7));
//




// WRITE A FUNCTION THAT TAKES IN A VALUE AND CUBES THAT VALUE AND RETURNS THE RESULT

//
//function cubeValues(int1){
//    var cube = int1 *int1*int1;
//
//    var returnValue =  int1+
//                        '*'+
//                        int1+
//                        '*'+
//                        int1 +
//                        '= '
//                        + cube;
//
//    return returnValue;
//}
//
//  for(i=0;i<10;i++){
//
//      console.log(cubeValues(i));
//
//
//  }


//Random land type Generator


function landSelection(){
    var initValue= Math.random()*10;
    // console.log(initValue);
    var percentChange = Math.floor(initValue);
    // console.log(percentChange);

    var woods=0;
    var jungle=1;
    var swamp=2;
    var desert=3;
    var mountains=4;
    var dungeons=5;
    var hills=6;
    var tundra=7;
    var wasteland=8;
    var city=9;
    var returnLandType;

    if(percentChange ==woods)
    {returnLandType= 'woods \t'}
    else if(percentChange == jungle)
    {returnLandType= 'jungle\t'}
    else if (percentChange==swamp){
        returnLandType= 'swamp\t'}
    else if (percentChange==desert){
        returnLandType= 'desert\t'}
    else if (percentChange==mountains){
        returnLandType= 'mountains'}
    else if (percentChange==dungeons){
        returnLandType= 'dungeons'}
    else if (percentChange==hills){
        returnLandType= 'hills\t'}
    else if (percentChange==tundra){
        returnLandType= 'tundra\t'}
    else if (percentChange==wasteland){
        returnLandType= 'wasteland'}
    else if (percentChange==city){
        returnLandType= 'city\t'}
    return returnLandType;
}


//console.log(landSelection());

var world = [];

for(j=0;j<10;j++){
// remove the rowOfLand variable and replace it with an Array
//    var rowOfLand='';

    world[j]=[];
    for(i=0;i<10;i++){
        world[j][i]=landSelection();
//        console.log(world[j][i]);
    }

// console.log(world[j]);

}

var worldPresentationString ='';
for (outer=0;outer<10;outer++){
    worldPresentationString ='';
        for(inner=0;inner<10;inner++){
            worldPresentationString+=world[outer][inner];
            if(world[outer][inner].length>7){
                worldPresentationString +='\t'
            }   else if(world[outer][inner].length>3){
                worldPresentationString +='\t\t'
            }   else if(world[outer][inner].length<=3){
                worldPresentationString +='\t\t\t'
            }

 }

    console.log(worldPresentationString);

}








