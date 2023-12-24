/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const result = [];
    for( let i =0 ; i<nums.length; i++) {
        const cloneAry = [...nums];
        cloneAry.splice(i,1);        
        result.push(cloneAry.reduce((prev,item) => item*prev,1));
    }
    return result;
};



//  above solution works but not for huge data
// explanation below
// https://www.youtube.com/watch?v=vtgG0XFNUNM 
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let res = [];
    let start = 1;

    for( let i = 0; i<nums.length; i++){
        res.push(start)
        start = start*nums[i];
    }

    let start2 =1;

    for( let i = nums.length-1; i>=0; i--){
        res[i] = start2*res[i];
        start2 = start2*nums[i];
    }

    return res;
};