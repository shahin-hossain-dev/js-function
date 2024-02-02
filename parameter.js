/* 
Function Parameter 
*/

function square(number) {

    const borgo = number * number;
    console.log(borgo);
}

/* square(5)
console.log('..........')
square(12)
square(50) */

function addSum(num1, num2) {
    const sum = num1 + num2;
    console.log(sum)
}

addSum(20, 30);


/**
 * *******************
 * parameter 
 * *******************
 */

//function নামের পরে parentheses() এর মধ্যে ভেরিবলের মত যে নামটা দেওয়া হয় সেটি হল parameter.
// parameter এর নাম দিলে ফাংশনের মধ্যে একটা মান দিতে হবে ।
// paramter এর মান দিতে হবে ফাংশন কল করার সময়।
//parameter difine করতে হবে function (){ এর বডির এর মধ্যে}
// parameter শুধু function এর মধ্যেই available থাকবে।

function bringSingara(money) {
    console.log('taka diesn:', money)
    console.log('ai nen singara')
}

// bringSingara(250);// সরাসরি মান দেওয়া যাবে।

var taka = 250;
// bringSingara(taka); //আবার ভেরিবল ও দেওয়া যাবে।

// -------------------------------------------

function add(num1, num2) {
    console.log('going to add:', num1, num2);
}
// add(); // যদি ভ্যালু ডিফাইন না করা হয় তাহলে undefinded শো করবে।
// add(250) // যদি ২টা প্যারামিটারের জন্য একটি মান/ভ্যালু দেওয়া হয় তাহলে প্রথম প্যারামিটারের মান হিসাবে ধরে নিবে।
// add(250, 120)// ২টা প্যারা মিটারের জন্য ২টা মান দিলে ২টািই শো করবে।

// ---------------------------------------
function sum(a, b, c, d, e) { // একাধিক প্যারামিটারের মাঝখানে কমা দিতে হয়।
    console.log(a, b, c, d, e);
    var sum = a + b + c + d + e; // সব গুলো ভ্যালু না পেলে ভেরিবল কাজ করবে না
    console.log(sum);
}
// sum(12, 32, 34); // ৩টা মান দিলে প্রথম ৩টা প্যারামিটারে সেট হয়ে যাবে পরের গুলো আনডিফাইন থাকবে . আনডিফাইন এর সাথে যোগ করলে NaN হবে।
sum(1, 2, 3, 4, 5);