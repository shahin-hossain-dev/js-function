/* 
Task-1
Take four parameters. Multiply the four numbers and then return the result
*/

function multiply(n1, n2, n3, n4, n5) {
    const result = n1 * n2 * n3 * n4 * n5;
    return result;
}

// console.log(multiply(2, 4, 5, 6, 7)) //1680

// ----------------------------------------------------------->

/* 
Task-2
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
*/

function evenOrOdd(n) {
    if (n % 2 === 1) {
        const result = n * 2;
        return result;
    }
    else {
        const result = n / 2;
        return result;
    }
}

// console.log(evenOrOdd(21));

// ----------------------------------------------------------->

/* 
Task-3
Write a function called make_avg() 
which will take an array of integers and the size of that array 
and return the average of those values.
*/

function make_avg(numbers) {
    let sum = 0;
    for (const number of numbers) {
        sum += number;
    }
    const avg = sum / numbers.length;

    return avg;
}

const numbers = [10, 20, 30, 40, 50];
const average = make_avg(numbers);

// console.log(average)


// ----------------------------------------------------------->
/* 
Task-4
Write a function called count_zero() 
which will take a binary string 
(Binary string is a string which is consist of only 0 and 1) as parameter 
and count how many 0’s are there in that string.
*/

const str = '1011001011101011010010011001';

function count_Zero(str) {
    // const convert = str.split('');
    let count = 0;
    for (const n of str) {
        if (n === '0') {
            count += 1;
        }
    }
    return count;
}
// console.log(count_Zero(str)) //13

/* 
Task-5
Write a function called odd_even() which takes an integer value 
and tells whether this value is even or odd. 
If even return Even. If odd return Odd
*/

function odd_even(n) {
    if (n % 2 === 0) {
        return 'Even'
    }
    else {
        if (n % 2 === 1) {
            return 'Odd'
        }

    }
}

// console.log(odd_even(10))

/* void (function iife() {
    console.log('Life is executed');
})(); */

function getMenu() {
    console.log("Burger, Pizza, Pasta");
}

console.log(getMenu())


const numbers2 = [20, 30, 40, 50];

const result2 = numbers2.sort(function (a, b) { return b - a });
// console.log(result2)

