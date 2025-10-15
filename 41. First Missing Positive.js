/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    // for( let i=1; i <= nums.length; i++) {
    //     console.log({nums: nums.indexOf(i), index: i})
    //     if( nums.indexOf(i)<0){
    //         return i;
    //     }
    // }
    // return nums.length+1


    let n = nums.length;
    let i = 0;

    while (i < n) {
        const correctIndex = nums[i] - 1;
        if (nums[i] > 0 && nums[i] <= n && nums[i] !== nums[correctIndex]) {
            swap(nums, i, correctIndex)
        } else {
            i++
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if( i+1 != nums[i]) {
            return i+1;
        }
    }

    return n+1;
};

function swap(nums, i, ci) {
    const temp = nums[i];
    nums[i] = nums[ci];
    nums[ci] = temp
}