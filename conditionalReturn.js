/**
 * ***************************
 *  Conditional return 
 * ***************************
 */

function isEven(num) {
    if (num % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

// console.log(isEven(5))

function isOdd(n) {
    if (n % 2 === 0) {
        return true;
    }
    return false;
}

// Short Cut
/* function isOdd(n) {
    return n % 2 === 1 ? true : false;
} */

console.log(isOdd(5))
console.log(isOdd(10))