/* function add(price1, price2) {
    const total = price1 + price2;
    return total;
} */

// উপরের function টায় direct addition টা কে return করা যায়। variable এ রাখার দরকার হয় না।
function add(price1, price2) {
    return price1 + price2;
}


const bill = add(500, 600);


// console.log(bill)

function doMath(num1, num2) {
    const sum = num1 + num2;
    const diff = num1 - num2;
    const mult = sum * diff;
    const result = mult / 2;

    return result;
}

const result = doMath(10, 5);

// console.log(result)



/**
 * *****************************
 * Variable
 * *****************************
 */
/*
variable value
primitive
1. string
2. number
3. boolean
4. undefined
5. null
non-primitive
1. object
2. array
JavaScript a array ও এক ধরনের object.

var---------->
-> let কে reassign করা যাবে । and modify ও করা যাবে।
-> redeclare করা যায়।
-> hoist হয়।
-> global variable।

const---------->
-> const কে reassign করা যাবে না। কিন্তু modify করা যাবে।
-> redeclare করা যাবে না।
-> hoist হয় না।
-> block scope variable 

let ----------->
-> let কে reassign করা যাবে । and modify ও করা যাবে।
-> redeclare করা যাবে না।
-> hoist হয় না।
-> block scope variable 
*/

/*
 var, let, const

 var
*/
/* 
. Array Method
-> sort
-> includes
-> slice
-> join
-> push
-> pop
-> shift
-> unshift

*/

/* 
---------Loop-----------

-> for of
-> for
-> while
-> for in 
-> break
-> continue
*/

/* 
--------------object-------------

-> সব ধরনের ভ্যালু object এর মধ্যে থাকতে পারে।
-> dot notation
-> bracket notation 

-> 3 ভাবে property ভ্যালু পাওয়া যায় object থেকে।
1. object.propertyName
2. object['propertyName']
3. object[variableName which is contain property name]

*/

/* 
--------------------function---------------

-> how to declare
-> কখন return করতে হয় -> যখন function থেকে একটা পাওয়ার দরকার। তখন return করতে হয়।
-> 
*/

/* 


*/