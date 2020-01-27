
// Part 1
// 1. Sigma - Implement function sigma(num) that, given a number, returns the sum of all positive integers up to the given number (inclusive).  Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).
function sigma(num) {
    var sum = 0;

    for (var indexNum = 1; indexNum <= num; indexNum++) {
        sum += indexNum;
    }

    return sum;
}

// console.log(sigma(3));
// console.log(sigma(5));

// 2. Factorial - Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to the given number (inclusive).  For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).
function factorial(num) {
    var factorialValue = 1;

    for (var indexNum = 1; indexNum <= num; indexNum++) {
        factorialValue *= indexNum;
    }

    return factorialValue;
}

// console.log(factorial(3));
// console.log(factorial(5));

// 3. Fibonacci - Create a function to generate Fibonacci numbers.  In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1.  Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc).  Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8).  Do this without using recursion first.  If you don't know what a recursion is yet, don't worry as we'll be introducing this concept in Part 2 of this assignment.
function fibonacci(num) {
    var fib = [0, 1];

    for (var i = 2; i <= num; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib[num];
}

// console.log(fibonacci(0));
// console.log(fibonacci(1));
// console.log(fibonacci(3));
// console.log(fibonacci(4));
// console.log(fibonacci(5));

// 4. Array: Second-to-Last: Return the second-to-last element of an array. Given [42, true, 4, "Liam", 7], return "Liam".  If array is too short, return null.
function secondToLast(array) {
    if (array.length < 2) {
        return null;
    }

    return array[array.length - 2];
}

// console.log(secondToLast([42, true, 4, "Liam", 7]));

// 5. Array: Nth-to-Last: Return the element that is N-from-array's-end.  Given ([5,2,3,6,4,9,7],3), return 4.  If the array is too short, return null.
function nthToLast(array, num) {
    if (array.length < 4) {
        return null;
    }

    return array[array.length - num];
}

// console.log(nthToLast([5, 2, 3, 6, 4, 9, 7], 3));

// 6. Array: Second-Largest: Return the second-largest element of an array. Given [42, 1, 4, 3.14, 7], return 7.  If the array is too short, return null.
function secondLargest(array) {
    var largest = 0;
    var secondLargest = 0;

    for (var index = 0; index < array.length; index++) {
        if (array[index] > largest) {
            largest = array[index];
        } else {
            if (array[index] > secondLargest) {
                secondLargest = array[index];
            }
        }
    }

    return secondLargest;
}

// console.log(secondLargest([42, 1, 4, 3.14, 7]));

// 7. Double Trouble: Create a function that changes a given array to list each existing element twice, retaining original order.  Convert [4, "Ulysses", 42, false] to [4,4, "Ulysses", "Ulysses", 42, 42, false, false].
function doubleTrouble(array) {
    for (var index = array.length - 1; index > -1; index--) {
        var left = array.slice(0, index);
        var right = array.slice(left.length, array.length);

        left.push(array[index]);
        array = left.concat(right);
    }

    return array;
}

// console.log(doubleTrouble([4, "Ulysses", 42, false]));

// Part 2
// 1. Create a function Fib(n) where it returns the nth Fibonacci number.  Use recursion for this.
function fibOf(num) {
    return (num >= 0 && num <= 1) ? num : fibOf(num - 1) + fibOf(num - 2);
}

console.log(fibOf(0));
console.log(fibOf(1));
console.log(fibOf(2));
console.log(fibOf(3));
console.log(fibOf(4));
console.log(fibOf(5));
console.log(fibonacci(100));



