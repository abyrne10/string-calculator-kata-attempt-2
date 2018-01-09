'use strict';

function add(numbers) {
    if (numbers === '') {
        return 0;
    }
    if (numbers.length > 2) {
        const split = numbers.split(',');
        const int1 = parseInt(split[0]);
        const int2 = parseInt(split[1]);
        const sum = int1 + int2;
        return sum;
    }
    return parseInt(numbers);
}

module.exports = {
    add,
};
