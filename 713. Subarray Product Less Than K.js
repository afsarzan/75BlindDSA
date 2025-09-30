/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {


 let output = 0 // Initialize output variable to count subarrays with product less than k

    // Iterate through the array nums using pointer i
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i] // Current number at index i
        let product = num // Initialize product with current number

        // Start inner loop with pointer j starting from i to the end of the array
        for (let j = i; j < nums.length; j++) {
            if (i !== j) {
                // If i is not equal to j, update product by multiplying it with the current number
                const otherNum = nums[j]
                product *= otherNum
            }

            // Check if product exceeds or equals k, if so, break out of the inner loop
            if (product >= k) break

            // Increment output for each subarray with product less than k
            output++
        }
    }

    // Return the count of subarrays with product less than k
    return output

    // let totalSub = 0;
    // let tl = nums.length;

    // while( tl >0) {
        
    //      const pnums = getParts(nums,tl)
    //     let prod = pnums.forEach( numAry => {
    //        const prod =  numAry.reduce( (prev,num) => prev * num,1);
    //         if(prod < k){
    //             totalSub++;
    //         }
    //     })

    //     tl--;
    // }

    // return totalSub;
};

// var getParts = function ( arr, len){
//    var chunks = [],
//       i = 0,
//       n = arr.length;

//   while (i < n) {
//     chunks.push(arr.slice(i, i += len));
//   }

//   return chunks;
// }