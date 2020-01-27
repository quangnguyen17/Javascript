
// Part 2
// Print 1 to x
function printUpTo(x) {
    // your code here
    if (x > 0) {
        for (var num = 1; num < x; num++) {
            console.log(num);
        }
    }
  
    return false;
}
  
// printUpTo(1000);
// y = printUpTo(-10);
// console.log(y);

// PrintSum
function printSum(x) {
    var sum = 0;
    
    for (var index = 0; index <= x; index++) {
        console.log(index);
        sum += index;
    }

    return sum;
}
  
// y = printSum(255);
// console.log(y);

// PrintSumArray
function printSumArray(x) {
    var sum = 0;

    for (var i = 0; i < x.length; i++) {
        sum += x[i];
    }

    return sum;
}

// console.log(printSumArray([1, 2, 3]));

// Bonus: LargestElement
function largestElement(array) {
    var largest = array[0];

    for (var i = 1; i < array.length; i++) {
        if (array[i] > largest) {
            largest = array[i];
        }
    }

    return largest;
}

// console.log(largestElement([1, 30, 5, 7]));