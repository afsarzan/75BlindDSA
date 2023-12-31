
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let missingCount = 0, total = 0;

    for ( let i = 0; i < nums.length+1; i++ ) {
        total += i;

        if(nums[i]) {
            missingCount += nums[i];
        }
    }


    return total - missingCount;
};


// oneline  return -nums.reduce((acc,num,i)=> acc+num-i-1,0);

// explanation https://www.youtube.com/watch?v=iCrQG_kbuP0