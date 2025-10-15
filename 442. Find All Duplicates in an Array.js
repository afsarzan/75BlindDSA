/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
    // let res = [];
    // let map = new Map();
    // for(let i = 0; i < nums.length; i++) {
    //     map.set(nums[i]+'t',(map.get(nums[i]+'t')||0)+1);
    //     if(map.get(nums[i]+'t')>1) {
    //         res.push(nums[i])
    //     }
    // }   
    // // console.log({res})
    // return res;


 let output = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[Math.abs(nums[i]) - 1] < 0) {
            output.push(Math.abs(nums[i]))
        } else {
            nums[Math.abs(nums[i]) - 1] = -nums[Math.abs(nums[i]) - 1]
        }
    }
    return output
};