/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let j = 1;
    count = 1

    for (let i = 1; i < nums.length; i++) {
        if(nums[i] === nums[i-1]) {
            count += 1;
        }else {
            count = 1;
        }
        if( count <= 2) {
            nums[j] = nums[i];
            j +=1;
        }    
        
    }
    return j;
};