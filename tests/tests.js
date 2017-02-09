// testing code goes here

'use strict'

var chai = require('chai');
var expect = require('expect')
var assert = chai.assert;

var findMinMax = require('../app/findMinMax.js');
var fizzBuzz = require('../app/fizzBuzz.js');
var aritGeo = require('../app/aritGeo.js');

describe('Min-Max Numbers in a List: ', function () {
  describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {
    it('should return [1,4] for [1, 2, 3 , 4]', function () {
      expect(findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
    });
    it('should return [4, 6] for [6, 4]', function () { 
        expect(findMinMax([6, 4])).toEqual([4, 6]);     
     });     
    it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
      expect(findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);     
    });  
    it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
      expect(findMinMax([4, 80, 6, 44, 7, 42, 8, 6, 2])).toEqual([2, 80]);     
    });
    it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
      expect(findMinMax([50, 22, 49, 21, 8, 45])).toEqual([8, 50]);     
    });  
    it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
      expect(findMinMax([19, 2, 0, 42, 56, 20])).toEqual([0, 56]);     
    });  
    it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
      expect(findMinMax([8, 98, 422, 1832, 23])).toEqual([8, 1832]);     
    });   
  });

  describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {
    it('should return [4] for [4, 4, 4, 4]', function () {
      expect(findMinMax([4, 4, 4, 4])).toEqual([4]);
    });
    it('should return [50] for [50, 50, 50, 50]', function () {
      expect(findMinMax([50, 50, 50, 50])).toEqual([50]);
    });
    it('should return [41] for [41, 41, 41, 41]', function () {
      expect(findMinMax([41, 41, 41, 41])).toEqual([41]);
    });
  });
});

describe("Fizz Buzz tests ", function() {  it("should return `Fizz` for number divisible by 3", function() {    expect(fizzBuzz(3)).toBe('Fizz');  });  it("should return `Buzz` for number divisible by 5", function() {    expect(fizzBuzz(5)).toBe('Buzz');  });  it("should return `FizzBuzz` for 15", function() {    expect(fizzBuzz(15)).toBe('FizzBuzz');  });  it("should return `FizzBuzz` for 45", function() {    expect(fizzBuzz(45)).toBe('FizzBuzz');  });  it("should return `FizzBuzz` for 90", function() {    expect(fizzBuzz(90)).toBe('FizzBuzz');  });  it("should return `Fizz` for 63", function() {    expect(fizzBuzz(63)).toBe('Fizz');  });  it("should return 7 since its indivisible by 3 and 5", function() {    expect(fizzBuzz(7)).toBe(7);  });  it("should return 101 since its indivisible by 3 and 5", function() {    expect(fizzBuzz(101)).toBe(101);  }); });
 describe("Determine the sequence of an array of numbers: ", function() {    describe("Case for an empty array", function() {      it("should return 0 for an empty array", function() {        expect(aritGeo([])).toEqual(0);      });    });    describe("Case for an arithmetic sequence", function() {      it("should return `Arithmetic` for [2, 4, 6, 8, 10]", function() {        expect(aritGeo([2, 4, 6, 8, 10])).toEqual('Arithmetic');      });      it("should return `Arithmetic` for [5, 11, 17, 23, 29, 35, 41]", function() {        expect(aritGeo([5, 11, 17, 23, 29, 35, 41])).toEqual('Arithmetic');      });      it("should return `Arithmetic` for [15, 10, 5, 0, -5, -10]", function() {        expect(aritGeo([15, 10, 5, 0, -5, -10])).toEqual('Arithmetic');      });    });    describe("Case for a geometric sequence", function() {      it("should return `Geometric` for [2, 6, 18, 54, 162]", function() {        expect(aritGeo([2, 6, 18, 54, 162])).toEqual('Geometric');      });      it("should return `Geometric` for [0.5, 3.5, 24.5, 171.5]", function() {        expect(aritGeo([0.5, 3.5, 24.5, 171.5])).toEqual('Geometric');      });      it("should return `Geometric` for [−128, 64, −32, 16, −8]", function() {        expect(aritGeo([-128, 64, -32, 16, -8])).toEqual('Geometric');      });    });    describe("Case for neither arithmetic nor geometric sequence", function() {      it("should return -1 for [1, 2, 3, 5, 8]", function() {        expect(aritGeo([1, 2, 3, 5, 8])).toEqual(-1);      });      it("should return -1 for [1, 3, 6, 10, 15]", function() {        expect(aritGeo([1, 3, 6, 10, 15])).toEqual(-1);      });      it("should return -1 for [1, 8, 27, 64, 125]", function() {        expect(aritGeo([1, 8, 27, 64, 125])).toEqual(-1);      });          });  });