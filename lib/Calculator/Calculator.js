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
    if (numbers.includes('//')) {
        split = getCustomSplit(numbers);
    } else if (numbers.includes(',') && numbers.includes('\n')) {
        split = getMixedSplit(numbers);
    } else if (numbers.includes(',') && !numbers.includes('\n')) {
        split = numbers.split(',');
    } else if (!numbers.includes(',') && numbers.includes('\n')) {
        split = numbers.split('\n');
    }
    return split;
}

function getCustomSplit(numbers) {
    const split = [];
    const delimiter = getDelimiter(numbers);
    const stringToSum = getStringToSum(numbers, delimiter);
    const splitOnDelimiter = stringToSum.split(delimiter);
    for (var i = 0; i < splitOnDelimiter.length; i++) {
        split.push(splitOnDelimiter[i]);
    }
    return split;
}

function getStringToSum(numbers, delimiter) {
    let string;
    if (delimiter === '\n') {
        string = numbers.slice(4, numbers.length);
    } else {
        const splitOnNewline = numbers.split('\n');
        string = splitOnNewline[1];
    }
    return string;
}

function getDelimiter(numbers) {
    let delimiter;
    const splitOnSlashes = numbers.split('//');
    const stringToExamine = splitOnSlashes[1];
    if (stringToExamine[0] === '\n') {
        delimiter = '\n';
    } else {
        const splitOnNewline = splitOnSlashes[1].split('\n');
        delimiter = splitOnNewline[0];
    }
    return delimiter;
}

function getMixedSplit(numbers) {
    const split = [];
    const splitOnCommas = numbers.split(',');
    for (var i = 0; i < splitOnCommas.length; i++) {
        if (splitOnCommas[i].includes('\n')) {
            const splitOnNewline = splitOnCommas[i].split('\n');
            for (var j = 0; j < splitOnNewline.length; j++) {
                split.push(splitOnNewline[j]);
            }
        } else {
            split.push(splitOnCommas[i]);
        }
    }
    return split;
}

function getIntegers(split) {
    const ints = [];
    for (var i = 0; i < split.length; i++) {
        const int = parseInt(split[i]);
        if (int === NaN) {
            throw new Error(`Couldn't parse ${split[i]} to an int`);
        }
        if (int < 0) {
            throw new Error(`Numbers passed to add must not be negative; ${int} given`);
        }
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
