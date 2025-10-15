/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
//     let res = null;
//     for ( let i = 0; i < nums.length; i++) {
//         if( res === nums[i]) {
//             return nums[i];
//         }else {
//             res = nums[i];
//         }
//     }
//   console.log({nums})  



//  let output = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[Math.abs(nums[i]) - 1] < 0) {
            return Math.abs(nums[i]);
        } else {
            nums[Math.abs(nums[i]) - 1] = -nums[Math.abs(nums[i]) - 1]
        }
    }
    // return output

};