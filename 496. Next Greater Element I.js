/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const ans = [];

    nums1.forEach( num => {
        const idx = nums2.indexOf(num);
        let mx = num;
        for( let j = idx+1; j < nums2.length; j++){
            if(nums2[j]>mx){
                mx = nums2[j];
                break;
            }
        }
        if(mx > num){
            ans.push(mx);
        } else {
            ans.push(-1)
        }
    })
    return ans
    
};