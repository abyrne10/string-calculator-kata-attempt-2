'use strict';

const Calculator = require('./Calculator');
const expect = require('chai').expect;


describe('Calculator module', () => {
    describe('add', () => {
        it('should export a function', () => {
            expect(Calculator.add).to.be.a('function');
        });
        it('should return 0 when given an empty string', () => {
            expect(Calculator.add('')).to.equal(0);
        });
        it('should return 1 when given 1', () => {
            expect(Calculator.add('1')).to.equal(1);
        });
    });
});
