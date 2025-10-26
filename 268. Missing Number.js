/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    // nums.sort( (a,b) => a - b);
    // for (let i = 0; i < nums.length+1; i++) {
    //     if(nums[i] !=i) {
    //         return i;
    //     }
    // }

//  let n = nums.length;
//     let totalsum = n * (n+1)/2;
//     let partialsum = 0
//     for(let i = 0;i<n;i++){
//         partialsum = partialsum + nums[i];
//     }
    
//     return totalsum-partialsum

    let n = nums.length;
    let xor1 = 0;
    let xor2 = 0;
    for (let i = 0; i < n; i++) {
        xor1 = xor1 ^ nums[i];
        xor2 = xor2 ^ (i + 1);
    }
    return xor1 ^ xor2;
    
};