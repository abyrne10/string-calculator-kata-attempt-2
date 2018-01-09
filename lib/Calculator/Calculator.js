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
    const split = getSplit(numbers);
    const ints = getIntegers(split);
    const sum = getSumOfInts(ints);
    return sum;
}

function getSplit(numbers) {
    let split;
    if (numbers.includes('\n')) {
        split = numbers.split('\n');
    } else {
        split = numbers.split(',');
    }
    return split;
}

function getIntegers(split) {
    const ints = [];
    for (var i = 0; i < split.length; i++) {
        const int = parseInt(split[i]);
        ints.push(int);
    }
    return ints;
}

function getSumOfInts(ints) {
    let sum = 0;
    for (var i = 0; i < ints.length; i++) {
        sum += ints[i];
    }
    return sum;
}

module.exports = {
    add,
};
