const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arrayOfArrays = []
  let arr = n.toString().split('')
  let res = []

  arr.forEach((item,i,array) => {
    let temp = [...array]
    temp.splice(temp.indexOf(arr[i]),1)
    arrayOfArrays.push(temp)
  })
 
  arrayOfArrays.forEach(item => {
    res.push(+item.join(''))
})
  return Math.max(...res)
}

module.exports = {
  deleteDigit
};
