
// Part 2
// All the test statements are commented, uncomment to test

function printAverage(x) {
    sum = 0;
    // your code here

    var count = 0;
    for (var i = 0; i < x.length; i++) {
        sum += x[i];
        count++;
    }

    return sum / count;
 }
//  y = printAverage([1,2,3]);
//  console.log(y); // should log 2
   
//  y = printAverage([2,5,8]);
//  console.log(y); // should log 5

 function returnOddArray() {
    // your code here
    var oddArray = [];

    for (var num = 1; num <= 255; num++) {
        if (num % 2 ==! 0) {
            oddArray.push(num);
        }
    }

    return oddArray;
 }

//  y = returnOddArray();
//  console.log(y); // should log [1,3,5,...,253,255]

function squareValue(x) {
    // your code here
    for (var index = 0; index < x.length; index++) {
        x[index] *= x[index];
    }

    return x;
 }
//  y = squareValue([1,2,3]);
//  console.log(y); // should log [1,4,9]
   
//  y = squareValue([2,5,8]);
//  console.log(y); // should log [4,25,64]