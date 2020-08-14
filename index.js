'use strict';
const _ = require('lodash');
const assert = require('assert');
const readline = require('readline');
const { chunk } = require('lodash');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let arrOfNums = [1, 3, 5, 7, 9, 11, 13, 15];


const getChunk = (arr, num) => {
  console.log(_.chunk(arr, num));
  return _.chunk(arr, num);
}
getChunk(arrOfNums, 2);

const getReverse = (arr) => {
  console.log(_.reverse(arr));
  return _.reverse(arr);
}
getReverse(arrOfNums);


const getWithout = (arr, val) => {
  console.log(_.without(arr, val));
  return _.without(arr, val);
}
getWithout(arrOfNums, 5);


const getShuffle = (arr) => {
  console.log(_.shuffle(arr));
  return _.shuffle(arr);
}
getShuffle(arrOfNums);


const getTail = (arr) => {
  console.log(_.tail(arr));
  return _.tail(arr);
}
getTail(arrOfNums);



//TESTS

if (typeof describe === 'function'){
  describe('getChunk', function() {
    it('should split the array into multiple arrays of two items each using _.chunk', function() {
      let testArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
      let chunkArray = getChunk(testArray, 2);
      assert.equal(chunkArray[0][0], 'a');
      assert.equal(chunkArray[1][0], 'c');
    });
  });

  describe('getReverse', function() {
    it('should reverse the order of the values in the array using _.reverse', function() {
      let testArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
      let reverseArray = getReverse(testArray);
      assert.equal(reverseArray[7], 'a');
      assert.equal(testArray[0], 'h');
    });
  });

  describe('getWithout', function() {
    it('should get the array without a specified value using _.without', function() {
      let testArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
      let withoutArray = getWithout(testArray, 'c');
      assert.equal(testArray[2], 'c');
      assert.equal(withoutArray[2], 'd');
    });
  });

  describe('getShuffle', function() {
    it('should shuffle the values inside the array using _.shuffle', function() {
      let testArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
      let shuffleArray = getShuffle(testArray);
      let string1 = testArray.toString();
      let string2 = shuffleArray.toString();
      assert.equal(shuffleArray.length, 8);
      assert.notEqual(string1, string2);
    });
  });

  describe('getTail', function() {
    it('should get all but the first index of the array using _.tail', function() {
      let testArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
      let tailArray = getTail(testArray);
      assert.equal(tailArray[0], 'b');
      assert.equal(tailArray[6], 'h');
    });
  });
}
