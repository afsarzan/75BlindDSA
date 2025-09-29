/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    // console.log(nums.map(num => num*num))
    return nums.map(num => num*num).sort((a, b) => a - b)
};


 // using two pointer solution with no extra space

    let n = nums.length;
    let l = 0, r = n-1;
    let res = new Array(n);
    let pos = n-1;

    while (l<=r){
        let ls = nums[l] * nums[l];
        let rs = nums[r] * nums[r];
        if( ls > rs ){
            res[pos] = ls;
            l++;
        } else {
            res[pos] = rs;
            r--;
        }

        pos--;
        
    }
    return res;