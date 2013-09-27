/**
 * Created with JetBrains WebStorm.
 * User: diogocabral
 * Date: 9/27/13
 * Time: 5:23 PM
 * To change this template use File | Settings | File Templates.
 */

function average(salesMonth1,salesMonth2,salesMonth3){

    return (salesMonth1 + salesMonth2 + salesMonth3) / 3

}

function salesAverage(avg){

    return (avg[0]+avg[1]+avg[2])/3

}


function salesIncreaseFunction(avg, salesIncrease){

    return ((avg[0]+avg[1]+avg[2])/3) + (avg[0]+avg[1]+avg[2])/3 *salesIncrease;

}



var salesMonth1 = 200;
var salesMonth2 = 375;
var salesMonth3 = 320;

var sales = [];
    sales[0] = 200;
    sales[1] = 200;
    sales[2] = 200;

var increaseSales = 0.15;
var current = 150;
var average1 = salesMonth1 + salesMonth2 + salesMonth3 / 3;




console.log(average(salesMonth1,salesMonth2,salesMonth3));

console.log(salesIncreaseFunction(sales,increaseSales));

console.log(salesAverage(sales));

function performanceFunction(performance, aver){

        return performance / aver



}

console.log(performanceFunction(current,average1));




