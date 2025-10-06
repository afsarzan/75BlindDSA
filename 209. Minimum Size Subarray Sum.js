/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    
    // let min = Number.MAX_SAFE_INTEGER;
    //     const initSum = nums.reduce( (a,b) => a+b,0);
    //     // console.log({initSum})
    //    if( initSum <target) return 0; 
    // for( let i= 0; i< nums.length; i++){
    //     const first = nums[i];
    //     let part = nums.slice(i,nums.length);
    //     let sum = part.reduce( (a,s) => a+s,0);
    //     if(sum>=target){
    //         min = Math.min(min,part.length)
    //     // console.log({part,sum,len:part.length,min})
    //     }
    // }
    //     return min;


    // optimal solution
    
    let low = 0;
    let high = 0;
    let min = Number.MAX_SAFE_INTEGER;
    let currentSum = 0;

    while ( high< nums.length) {

        currentSum += nums[high];
        high++;

        while(currentSum >= target){
            let currentWindowSize = high - low;
            min = Math.min(min,currentWindowSize);
            currentSum -= nums[low]
            low++;
        }
    }

    return min === Number.MAX_SAFE_INTEGER ? 0 : min;


    // more beautiful solution
     let sum = 0;
        let left = 0;
        let ans = Infinity;


        for (let right = 0; right < nums.length; right++) {
            sum += nums[right];

            while (sum >= target) {
                ans = Math.min(ans, right - left + 1);
                sum -= nums[left];
                left++;
            }
        }

        return ans === Infinity ? 0 : ans;
};

