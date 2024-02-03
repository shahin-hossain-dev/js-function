/**
 * Various Parameter
 */
// যদি string জোর সংখ্যা হয় তাহলে true অন্যথায় false return করবে।

function evenSizedString(str) {
    if (str.length % 2 === 0) {
        console.log('even size')
        return true
    }
    else {
        console.log('odd size');
        return false
    }
}

// evenSizedString('shahin')

// যদি একটি নাম্বার true হয় তাহলে double হবে, false হলে triple false হবে।

function doubleOrTriple(number, doDouble) {
    if (doDouble === true) {
        const result = number * 2;
        return result;
    } else {
        const result = number * 3;
        return result;
    }
}

// console.log(doubleOrTriple(5, true))
// console.log(doubleOrTriple(5, false))

// find array length with function ----------------->

function numberOfElement(numbers) {
    const len = numbers.length;
    return len;
}

// console.log(numberOfElement([20, 30, 40, 50, 60]));

// get age form an object.-------------->
function getAge(person) {
    const age = person.age;
    return age;
}

const person = { name: 'Shahin', age: 27 };

console.log(getAge(person))