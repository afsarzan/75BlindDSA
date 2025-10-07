/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
    let left = 0;
    let right = 0;
    let zeroCount = 0;
    let maxSize = 0;

    for (right = 0; right < nums.length; right++) {
        if (nums[right] == 0) {
            zeroCount++;
        }

        while (zeroCount > k) {
            if (nums[left] == 0) {
                zeroCount--;
            }
            left++;
        }
        maxSize = Math.max(maxSize,right-left+1)
    }

    return maxSize;
};