var maxSubArray = function(nums) {
    let sum = nums[0]
    let max = nums[0]
    for(let i = 1; i< nums.length; i++){
        if(sum+nums[i]>nums[i]){
            sum += nums[i];
        } else {
            sum = nums[i];
        }
        max = Math.max(sum,max);
    }

    return max;
};

// explanation https://www.youtube.com/watch?v=KkKFaDlU6Vs