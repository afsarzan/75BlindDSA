/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    // return nums.sort((a,b)=> a-b)
    // let start = 0;
    // let end = nums.length - 1;
    // let mid = 0;

    // while(mid <= end){
    //     const cn = nums[mid];
    //     if(cn ===0){
    //         swap(nums,mid,start)
    //         mid++;
    //         start++;
    //     } else if ( cn ===1){
    //         mid++
    //     }else if ( cn === 2) {
    //         swap(nums,mid,end)
    //         mid++;
    //         end--
    //     }
    // }

    var low = 0;
    var mid = 0;
    var high = nums.length - 1;

    // one pass through the array swapping
    // the necessary elements in place
    while (mid <= high) {
        if (nums[mid] === 0) { swap(nums, low++, mid++); }
        else if (nums[mid] === 2) { swap(nums, mid, high--); }
        else if (nums[mid] === 1) { mid++; }
    }

    return nums;

};

var swap = function (nums, str, loc) {
    let temp = nums[loc];
    nums[loc] = nums[str];
    nums[str] = temp;
    return nums;
}