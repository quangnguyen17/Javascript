
// 1
function greaterThan(array, y) {
    var count = 0;

    for (var index = 0; index < array.length; index++) {
        if (array[index] > y) {
            console.log(array[index]);
            count++;
        }
    }

    return count;
}

// 2
function minMaxAverage(array) {
    var min = array[0];
    var max = array[0];
    var average = 0;

    var sum = 0;
    var count = 0;

    for (var index = 0; index < array.length; index++) {
        if (min < array[index]) {
            min = array[index];
        }

        if (max > array[index]) {
            max = array[index];
        }

        sum += array[index];
        count++;
    }

    average = sum / count;

    // return min;
    // return max;
    return average;
}

// 3
function replaceNegative(array) {
    var newArray = [];

    for (var index = 0; index < array.length; index++) {
        newArray.push(array[index] > 0 ? array[i] : "Negative");
    }

    return newArray;
}

// 4
function removeVals(array, start, end) {
    var newArray = [];

    for (var index = 0; index < newArray.length; index++) {
        if (array[i] != start || array[i] != end) {
            newArray.push(array[i]);
        }
    }

    return newArray;
}