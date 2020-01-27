
// 1. Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
function sum() {
    var sum = 0;

    for (var num = 1; num <= 255; num++) {
        sum += num;
    }

    return sum;
}

// console.log(sum());

// 2. Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.
function getEven() {
    var evenArray = [];

    for (var num = 1; num <= 1000; num++) {
        if (num % 2 == 0) {
            evenArray.push(num);
        }
    }

    return evenArray;
}

// console.log(getEven());

// 3. Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).
function sumOdd() {
    var sum = 0;

    for (var num = 1; num < 5000; num++) {
        if (num % 2 == 0) {
            sum += num;
        }
    }

    return sum;
}

// console.log(sumOdd());

// 4. Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
function sumOf(array) {
    var sum = 0;

    for (var index = 0; index < array.length; index++) {
        sum += array[index];
    }

    return sum;
}

// console.log(sumOf([1, 2, 5]));
// console.log(sumOf([-5, 2, 5, 12]));


// 5. Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
function findMax(array) {
    var max = array[0];

    for (var index = 1; index < array.length; index++) {
        if (array[index] > max) {
            max = array[index];
        }
    }

    return max;
}

// console.log(findMax([-3, 3, 5, 7]));

// 6. Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
function findAverage(array) {
    var sum = 0;
    var count = 0;

    for (var index = 0; index < array.length; index++) {
        sum += array[index];
        count++;
    }

    return sum / count;
}

// console.log(findAverage([1, 3, 5, 7, 20]));

// 7. Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
function findArrayOdd() {
    var oddArray = [];

    for (var num = 1; num <= 50; num++) {
        if (num % 2 == !0) {
            oddArray.push(num);
        }
    }

    return oddArray;
}

// console.log(findArrayOdd());

// 8. Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).
function greaterThanY(array, y) {
    var count = 0;

    for (var index = 0; index < array.length; index++) {
        if (array[index] > y) {
            count++;
        }
    }

    return count;
}

// console.log(greaterThanY([1, 3, 5, 7], 3));

// 9. Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])
function square(array) {
    var squaredArray = [];

    for (var index = 0; index < array.length; index++) {
        squaredArray.push(array[index] * array[index]);
    }

    return squaredArray;
}

// console.log(square([1, 5, 10, -2]));

// 10. Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
function replaceNegatives(array) {
    var newArray = [];

    for (var index = 0; index < array.length; index++) {
        newArray.push(array[index] > 0 ? array[index] : 0);
    }

    return newArray;
}

// console.log(replaceNegatives([1, 5, 10, -2]));

// 11. Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])
function maxMinAvg(array) {
    var max = array[0];
    var min = array[0];
    var average = 0;

    var sum = array[0];
    var count = 1;

    for (var index = 1; index < array.length; index++) {
        if (array[index] > max) {
            max = array[index];
        }

        if (array[index] < min) {
            min = array[index];
        }

        sum += array[index];
        count++;
    }

    average = sum / count;
    return [max, min, average];
}

// console.log(maxMinAvg([1, 5, 10, -2]));

// 12. Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
function swapValues(array) {
    var last = array[array.length - 1];
    array.pop();
    array.push(array[0]);
    array[0] = last;
    return array;
}

// console.log(swapValues([1, 5, 10, -2]));

// 13. Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
function numberToString(array) {
    var newArray = [];

    for (var index = 0; index < array.length; index++) {
        newArray.push(array[index] > 0 ? array[index] : "Dojo");
    }

    return newArray;
}

console.log(numberToString([-1, -3, 2]));