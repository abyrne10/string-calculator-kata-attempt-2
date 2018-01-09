'use strict';

function add(numbers) {
    if (numbers === '') {
        return 0;
    }
    if (numbers.length > 2) {
        const sum = getSumOfDigits(numbers);
        return sum;
    }
    return parseInt(numbers);
}

function getSumOfDigits(numbers) {
    const split = numbers.split(',');
    const int1 = parseInt(split[0]);
    const int2 = parseInt(split[1]);
    const sum = int1 + int2;
    return sum;
}

module.exports = {
    add,
};
