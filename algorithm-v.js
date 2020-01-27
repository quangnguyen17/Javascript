
// Name: Quang Nguyen
// 1. Return the given array, after setting any negative values to zero.  For example resetNegatives( [1,2,-1, -3]) should return [1,2,0,0].
function resetNegatives(array) {
    var newArray = [];

    for (var index = 0; index < array.length; index++) {
        newArray.push(array[index] > 0 ? array[index] : 0);
    }

    return newArray;
}

console.log(resetNegatives([1, 2, -1, -3])); q

// 2. Given an array, move all values forward by one index, dropping the first and leaving a ‘0’ value at the end.  For example moveForward( [1,2,3]) should return [2,3,0].
function moveForward(array) {
    var newArray = [];

    for (var index = 1; index < array.length; index++) {
        newArray.push(array[index]);
    }

    newArray.push(0);
    return newArray;
}

console.log(moveForward([1, 2, 3]));

// 3. Given an array, return an array with values in a reversed order.  For example, returnReversed([1,2,3]) should return [3,2,1].
function returnReversed(array) {
    var reversedArray = [];

    for (var index = array.length - 1; index > -1; index--) {
        reversedArray.push(array[index]);
    }

    return reversedArray;
}

console.log(returnReversed([1, 2, 3]));

// 4. Create a function that changes a given array to list each original element twice, retaining original order.  Have the function return the new array.  For example repeatTwice( [4,”Ulysses”, 42, false] ) should return [4,4, “Ulysses”, “Ulysses”, 42, 42, false, false].
function repeatTwice(array) {
    var newArray = [];

    for (var index = 0; index < array.length; index++) {
        newArray.push(array[index]);
        newArray.push(array[index]);
    }

    return newArray;
}

console.log(repeatTwice([4, "Ulysses", 42, false]));