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
    if (numbers.includes('//;\n')) {
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
    const stringToSum = numbers.split('\n')[1];
    const splitOnSemiColon = stringToSum.split(';');
    for (var i = 0; i < splitOnSemiColon.length; i++) {
        split.push(splitOnSemiColon[i]);
    }
    return split;
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
