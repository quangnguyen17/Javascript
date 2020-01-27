
// 1. Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].
function biggieSize(array) {
    var newArray = [];

    for (var index = 0; index < array.length; index++) {
        newArray.push(array[index] > 0 ? "big" : array[index]);
    }

    return newArray;
}

// console.log(biggieSize([-1, 3, 5, -5]));

// 2. Print Low, Return High - Create a function that takes in an array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.
function printLowReturnHigh(array) {
    var low = array[1];
    var high = array[1];

    for (var index = 1; index < array.length; index++) {
        if (array[index] > high) {
            high = array[index];
        }

        if (array[index] < low) {
            low = array[index];
        }
    }

    console.log(low);
    return high;
}

// 3. Print One, Return Another - Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array, and return the first odd value in the array.
function printOneReturnAnother(array) {
    for (var index = 0; index < array.length; index++) {
        if (array[index] % 2 == !0) {
            console.log(array[array.length - 2]);
            return array[index];
        }
    }
}

// 4. Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.
function doubleVision(array) {
    var doubledArray = [];

    for (var index = 0; index < array.length; index++) {
        doubledArray.push(array[index] * 2);
    }

    return doubledArray;
}

// console.log(doubleVision([1, 2, 3]));

// 5. Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.
function countPositives(array) {
    var numberOfPositives = 0;

    for (var index = 0; index < array.length; index++) {
        numberOfPositives += (array[index] > 0) ? 1 : 0;
    }

    array[array.length - 1] = numberOfPositives;
    return array;
}

// console.log(countPositives([-1, 1, 1, 1]));

// 6. Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".
function evensAndOdds(array) {
    var status = "even";
    var count = 0;

    for (var index = 0; index < array.length; index++) {
        if (array[index] % 2 == 0) {
            if (status === "odd") {
                count = 0;
            } else if (status === "even") {
                if (count == 3) {
                    console.log("Even more so!");
                }
            }

            status = "even";
        } else {
            if (status === "even") {
                count = 0;
            } else if (status === "odd") {
                if (count == 3) {
                    console.log("That's odd!");
                }
            }

            status = "odd";
        }

        count++;
    }
}

// evensAndOdds([2, 2, 2, 2, 2, 1, 1, 3, 5, 4]);

// 7. Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.
function incrementTheSeconds(array) {
    for (var index = 0; index < array.length; index++) {
        array[index] += (array[index] % 2 == !0) ? 1 : 0;
    }

    return array;
}

// 8. Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?
function previousLengths(array) {
    for (var index = array.length - 1; index > -1; index--) {
        if (index > 0) {
            var previousLength = array[index - 1].length;
            array[index] = previousLength;
        }
    }

    return array;
}

// console.log(previousLengths(["hello", "dojo", "awesome", "more"]));

// 9. Add Seven - Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.
function addSeven(array) {
    var newArray = [];

    for (var index = 0; index < array.length; index++) {
        newArray.push(array[index] + 7);
    }

    return newArray;
}

// console.log(addSeven([1, 2, 3]));

// 10. Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).
function reverseArray(array) {
    var middle = (array.length - 1) / 2;

    for (var index = 0; index < array.length; index++) {
        if (index < middle) {
            var first = array[index];
            var last = array[array.length - 1 - index];

            array[index] = last;
            array[array.length - 1 - index] = first;
        }
    }

    return array;
}

// console.log(reverseArray([3, 1, 6, 4, 2]));

// 11. Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].
function outlookNegative(array) {
    var newArray = [];

    for (var index = 0; index < array.length; index++) {
        newArray.push(array[index] > 0 ? (array[index] * -1) : array[index]);
    }

    return newArray;
}

// console.log(outlookNegative([1, -3, -5]));

// 12. Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array values are "food", then print "I'm hungry" once.
function alwaysHungry(array) {
    var noFoodCount = 0;
    for (var index = 0; index < array.length; index++) {
        if (array[index] === "food") {
            console.log("yummy");
        } else {
            noFoodCount++;
        }
    }

    if (noFoodCount == 0) {
        console.log("Im hungry");
    }
}

// 13. Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.
function swapTowardTheCenter(array) {
    for (var index = 0; index < array.length; index++) {
        if (index == 0 || index == 2) { // First & Third
            var first = array[index];
            var last = array[array.length - 1 - index];

            array[index] = last;
            array[array.length - 1 - index] = first;
        }
    }

    // Uncomment to test
    // console.log(array);
}

// swapTowardTheCenter([true, 42, "Ada", 2, "pizza"]);
// swapTowardTheCenter([1, 2, 3, 4, 5, 6]);

// 14. Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].
function scaleTheArray(arr, num) {
    for (var index = 0; index < arr.length; index++) {
        arr.push(arr[index] * num);
    }

    return arr;
}

console.log(scaleTheArray([1, 2, 3]));
