/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    // console.log(nums.map(num => num*num))
    return nums.map(num => num*num).sort((a, b) => a - b)
};