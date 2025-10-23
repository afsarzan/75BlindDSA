/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    // const ans = [];

    // nums1.forEach( num => {
    //     const idx = nums2.indexOf(num);
    //     let mx = num;
    //     for( let j = idx+1; j < nums2.length; j++){
    //         if(nums2[j]>mx){
    //             mx = nums2[j];
    //             break;
    //         }
    //     }
    //     if(mx > num){
    //         ans.push(mx);
    //     } else {
    //         ans.push(-1)
    //     }
    // })
    // return ans

    const map = new Map();
    const stack = [];
    const ans = []; 
    for( let i = 0; i < nums2.length; i++){
        while( stack.length && stack[stack.length - 1] < nums2[i]){
            map.set(stack.pop(), nums2[i]);
        }
        stack.push(nums2[i]);
    }

    for( let i = 0; i < nums1.length; i++){
        if( map.has(nums1[i])){
            ans.push(map.get(nums1[i]));
        } else {
            ans.push(-1);
        }
    }
    return ans;
    
};