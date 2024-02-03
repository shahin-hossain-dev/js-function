/**
 * 
 * create a function that will return only the even numbers
 * return the sum of even numbers
 * 
 */

function evenNumbersOnly(numbers) {
    let evenNumber = [];
    for (const number of numbers) {
        if (number % 2 === 0) {
            evenNumber.push(number);
        }
    }
    return evenNumber;
}

const numbers = [10, 20, 30, 11, 21, 31];

const result = evenNumbersOnly(numbers);
// console.log(result)

function sumOfEvenNumbers(numbers) {
    let sum = 0;
    for (const number of numbers) {
        if (number % 2 === 0) {
            sum += number;
        }
    }
    return sum
}

const sum = sumOfEvenNumbers(numbers);
console.log(sum)