/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    

    if(nums.length === 0) return [];
    nums.sort( (a,b) => a-b);

    let res = [];

    for(let i = 0 ; i < nums.length-2; i++){

        // stop duplicates
        if(i>0 && nums[i] === nums[i-1]) continue;

        let j = i+1;
        let k = nums.length-1;

        while(j<k){
            let sum = nums[i] + nums[j] + nums[k];
            if( sum === 0) {
                res.push([nums[i] , nums[j] , nums[k]]);

                //stop duplicates
                while(nums[j]===nums[j+1]) j++;
                while(nums[k]===nums[k+1]) k--;
                j++;
                k--;
            } else if ( sum < 0) {
                j++;
            } else {
                k--;
            } 
        }
    }

    return res;
    
};


// ex: https://www.youtube.com/watch?v=2sgT3XXdWEQ