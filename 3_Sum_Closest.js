/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    let closest =  Number.MAX_SAFE_INTEGER;
    let closestSum = 0; 
    nums.sort((a, b) => a - b);
    for ( let i = 0; i < nums.length; i++) {
        let start = i+1;
        let end = nums.length - 1;

        while (start < end) {
            let sum = nums[i] + nums[start] + nums[end];

            if(sum === target){
                return target;
            } else if ( sum < target){
                start++;
            } else if ( sum > target) {
                end --
            }
            let diff = Math.abs(sum-target);
             if (diff < closest) {
                    closest = diff;
                    closestSum = sum; // Store the sum that produced this difference
                }
        }
    }

    return closestSum;

};