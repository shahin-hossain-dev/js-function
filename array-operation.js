/**
 * Objective: write a function to give me the sum of all number in an array.
 * step 1: declare a function
 * step-2: call check weather the function called properly.
 * ste-3: set a parameter(s)
 * step-4: pass the parameter(2), checks weather is passed in proper formate
 * step-5: do the function task (step by step);
 * 
 */


function sumOfNumbers(numbers) {
    // console.log(numbers)
    let sum = 0;
    for (const number of numbers) {
        sum += number;
    }
    return sum;

}

const sum = sumOfNumbers([10, 20, 30, 40]);
console.log(sum);