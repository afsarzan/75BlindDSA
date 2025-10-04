/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function(nums, k) {
    let max = 0;

    if(nums.length==1) return nums[0];
    if(nums.length<k) return max;

    for( let i = 0; i< nums.length; i++) {
        const subA = nums.slice(i,k+i)
        // console.log({subA})
        // console.log(distinct(subA))
        if(subA.length>=k && distinct(subA) ){
            const sum = nums.slice(i,k+i).reduce( (a,b)=> a+b,0);
            // console.log({sum})
            max = Math.max(max,sum)
            // console.log({max})
        }
    }

    return max;
};

var distinct = (nums)=> {
    var dis = new Set();

    for( let i = 0; i<nums.length; i++){
        if(dis.has(nums[i])){
            return false
        } else {
            dis.add(nums[i])
        }
    }
    return true;
}