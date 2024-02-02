/**
 * *****************
 * ARGUMENTS
 * *******************
 */
function doubleIt(number) { //function েএর মধ্যে যে arguments আসে বা function এর parentheses() এর মধ্যে যে variable থাকে তাকে বলে parameter
    const doubled = number * 2;
    console.log(number, doubled)
}

console.log('i will call the function');

// doubleIt(10) // যে মানটা দিয়ে কল করা হয় তাকে বলে arguments.

const num = 55;

// doubleIt(num);

function difference(num1, num2) {
    const diff = num1 - num2;
    console.log(diff)
}

const fatherAge = 60;
const myAge = 27;
difference(fatherAge, myAge) // variable মানটাকে পাঠানো হয়েছে।