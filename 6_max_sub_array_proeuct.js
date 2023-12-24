/**
 ** @param {number[]} nums
* @return {number}
*/
var maxProduct = function(nums) {
   let n = nums.length;
   let max = nums[0];
   let left = 1;
   let right  = 1;

   for ( let i=0; i< n; i++){
       left = left === 0 ? 1 : left;
       right = right === 0 ? 1 : right;

       left *= nums[i]
       right *= nums[n-1-i]

       max = Math.max(max,Math.max(left,right))
   }

   return max;
};


// explanation https://www.youtube.com/watch?v=Y6B-7ZctiW8