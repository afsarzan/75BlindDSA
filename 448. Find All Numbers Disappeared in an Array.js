/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    // nums.sort((a,b) => a - b)
    // const res = [];
    // for(let i = 1; i <= nums.length; i++) {
    //     if( nums[i-1] != i) res.push(i)        
    // }   

    // return res;

     const res = [];
    for(let i = 0; i < nums.length; i++) {
           const idx = Math.abs(nums[i]) - 1;
           if( nums[idx]<0) continue;
           nums[idx] *= -1;
    }   
    // console.log({nums})
    for ( let i  =0; i< nums.length; i++) {
        if(nums[i]>0){
            res.push(i+1)
        }
    }
    return res;
};