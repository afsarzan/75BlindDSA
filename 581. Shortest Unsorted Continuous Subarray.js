/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {

    // let startIndex = -1;
    // let endIndex = -1;
    // let count = 0;
    // for (let i = 0; i < nums.length; i++) {
    //         console.log('Index value is ' + i + ' and value is: ' + nums[i] + ' and next value is ' + nums[i + 1])
    //     // console.log('nums[i]:' + nums[i] + ' nums[i-1] value is ' + nums[i + 1])
    //     if (nums[i] > nums[i + 1] && (startIndex === -1 || endIndex === -1 || i< nums.length)) {
    //         if (startIndex === -1) {
    //             startIndex = i;
    //         } else {

    //         endIndex = i + 1;
    //         }
    //         // if() {
    //         // }
    //         console.log({ startIndex, endIndex })
    //         // count++
    //     } else {
    //          endIndex = endIndex-i;
    //     }

    // }
    // console.log({ startIndex, endIndex })

    // if (startIndex > -1 && endIndex == -1) {
    //     return nums.length
    // }
    // if (startIndex > -1 && endIndex > -1) {

    //     for (let ci = startIndex; ci <= endIndex; ci++) {
    //         count++
    //     }
    // }
    // // console.log({startIndex,endIndex})
    // return count



    let n = nums.length;
    let start = -1;
    let end = -2;
    let min = nums[n - 1];
    let max = nums[0];
    for (let i = 1; i < n; i++) {
        let j = n - i - 1
        max = Math.max(max, nums[i]);
        if (nums[i] < max)
            end = i;
        min = Math.min(min, nums[j]);
        if (nums[j] > min)
            start = j;
    }
    return end - start + 1;

};