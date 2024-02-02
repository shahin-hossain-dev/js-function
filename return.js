/**
 * ****************
 * Return
 * ****************
 */

function tenTimes(number) {
    const result = number * 10;
    return result;
}

const result = tenTimes(10); // return value কে আমরা কাজে লাগানোর জন্য একটা variable এর মধ্যে রাখতে পারি।

console.log(result);


// return এর মধ্যে যা লেখা থাকবে সেটার মান (value) রিটার্ন হিসাবে পাওয়া যাবে।
function add(number1, number2) {
    // console.log(number1, number2) //  কি কি আগ্রুমেন্ট পাস করা হয়েছে তা দেখার জন্য
    var sum = number1 + number2;
    // return sum;
    // console.log(sum);
}

// console.log(add(15, 21));

// --------------------------------------
function add(number1, number2) {
    var sum = number1 + number2;
    // return sum; // যদি রির্টান না করা হয় তাহলে ফাংশন কল করলে আনডিফাইন আসবে।
    return sum;
    return 15; // রির্টান এর পরে যদি কিছু লেখা হয় তাহলে সেগুলো কোন কাজ করবে না
    return 'hello world'
}

var total = add(30, 20);
// console.log('total is :', total)

// ============================ 

function buySingara(money) {
    var singaraPrice = 10;
    var singaraQuantity = money / singaraPrice;
    return singaraQuantity;
}
var myTaka = 150;
// var singaras = buySingara(200);
var singaras = buySingara(myTaka);
console.log('will get Singara :', singaras)