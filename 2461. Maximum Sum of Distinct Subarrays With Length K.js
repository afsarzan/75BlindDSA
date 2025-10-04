// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// var maximumSubarraySum = function (nums, k) {

//     let max = 0;

//     if(nums.length==1) return nums[0];
//     if(nums.length<k) return max;

//     let first = 0;
//     let last = 0;
//     for( let i = 0; i< nums.length-k+1; i++) {
//         // console.log(nums[i])
//         let firstIndex = i;
//         let lastIndex = i+k-1;
//         // console.log({first,last})
//         let sum = 0;
//         const existsNumber = new Set()
//         let isDuplicateExist = false;
//         while( firstIndex<=lastIndex){
//         // console.log({firstIndex,lastIndex})
//             if(existsNumber.has(nums[firstIndex])){
//                 isDuplicateExist = true;
//                 break;
//             } else {
//                 existsNumber.add(nums[firstIndex]);
//             }
//             sum += nums[firstIndex]
//             firstIndex++;
//         }
//         if( isDuplicateExist) sum = 0;

//         console.log({sum})
//         max = Math.max(max,sum)
//     }

//     return max

//     // for( let i = 0; i< nums.length; i++) {
//     //     const subA = nums.slice(i,k+i)
//     //     // console.log({subA})
//     //     // console.log(distinct(subA))
//     //     if(subA.length>=k && distinct(subA) ){
//     //         const sum = nums.slice(i,k+i).reduce( (a,b)=> a+b,0);
//     //         // console.log({sum})
//     //         max = Math.max(max,sum)
//     //         // console.log({max})
//     //     }
//     // }

//     // return max;
// };

// // var distinct = (nums)=> {
// //     var dis = new Set();

// //     for( let i = 0; i<nums.length; i++){
// //         if(dis.has(nums[i])){
// //             return false
// //         } else {
// //             dis.add(nums[i])
// //         }
// //     }
// //     return true;
// // }


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function(nums, k) {
    if (nums.length < k) return 0;
    
    let maxSum = 0;
    let currentSum = 0;
    const window = new Map(); // Track frequency of elements in window
    
    // Build initial window
    for (let i = 0; i < k; i++) {
        currentSum += nums[i];
        window.set(nums[i], (window.get(nums[i]) || 0) + 1);
    }
    
    // Check if initial window has all distinct elements
    if (window.size === k) {
        maxSum = currentSum;
    }
    
    // Slide the window
    for (let i = k; i < nums.length; i++) {
        // Remove leftmost element
        const leftElement = nums[i - k];
        currentSum -= leftElement;
        window.set(leftElement, window.get(leftElement) - 1);
        if (window.get(leftElement) === 0) {
            window.delete(leftElement);
        }
        
        // Add rightmost element
        const rightElement = nums[i];
        currentSum += rightElement;
        window.set(rightElement, (window.get(rightElement) || 0) + 1);
        
        // Update max if all elements are distinct
        if (window.size === k) {
            maxSum = Math.max(maxSum, currentSum);
        }
    }
    
    return maxSum;
};