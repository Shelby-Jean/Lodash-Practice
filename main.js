const _ = require('lodash');


let arrOfNums = [1, 3, 5, 7, 9, 11, 13, 15];

const getChunk = (arr) => {
  console.log(_.chunk(arr, 2));
}
getChunk(arrOfNums);


const getReverse = (arr) => {
  console.log(_.reverse(arr));
}
getReverse(arrOfNums);


const getWithout = (arr) => {
  console.log(_.without(arr, 5));
}
getWithout(arrOfNums);


const getShuffle = (arr) => {
  console.log(_.shuffle(arr));
}
getShuffle(arrOfNums);

const getTail = (arr) => {
  console.log(_.tail(arr));
}
getTail(arrOfNums);



//TESTS
