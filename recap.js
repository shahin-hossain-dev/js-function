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

