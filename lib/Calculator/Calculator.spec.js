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
        it('should return 2 when given 2', () => {
            expect(Calculator.add('2')).to.equal(2);
        });
        it('should return 3 when given "1,2"', () => {
            expect(Calculator.add('1,2')).to.equal(3);
        });
        it('should return 7 when given "3,4"', () => {
            expect(Calculator.add('3,4')).to.equal(7);
        });
        it('should return 10 when given "1,2,3,4"', () => {
            expect(Calculator.add('1,2,3,4')).to.equal(10);
        });
        it('should return 210 when given "10,20,30,40,50,60"', () => {
            expect(Calculator.add('10,20,30,40,50,60')).to.equal(210);
        });
        it('should return 10 when given "1\\n2\\n3\\n4"', () => {
            expect(Calculator.add('1\n2\n3\n4')).to.equal(10);
        });
        it('should return 6 when given "1\\n2,3"', () => {
            expect(Calculator.add('1\n2,3')).to.equal(6);
        });
        it('should return 6 when given "10,20\\n30,40\\n50\\n60"', () => {
            expect(Calculator.add('10,20\n30,40\n50\n60')).to.equal(210);
        });
        it('should return 3 when given "//;\\n1;2"', () => {
            expect(Calculator.add('//;\n1;2')).to.equal(3);
        });
        it('should return 4 when given "//*\\n2*2"', () => {
            expect(Calculator.add('//*\n2*2')).to.equal(4);
        });
        it('should return 6 when given "//asdf\\n5asdf1"', () => {
            expect(Calculator.add('//asdf\n5asdf1')).to.equal(6);
        });
        it('should return 8 when given "//\\n\\n6\\n2"', () => {
            expect(Calculator.add('//\n\n6\n2')).to.equal(8);
        });
        it('should throw an exception when given "1,-2,3"', () => {
            expect(() => { Calculator.add('1,-2,3'); }).to.throw(Error);
        });
    });
});
