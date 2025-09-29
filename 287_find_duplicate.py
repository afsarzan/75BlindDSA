# 287. Find the Duplicate Number
class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        exit = set()
        for num in nums:
            if num in exit:
                return num
            else:
                exit.add(num)


# Best solution:
class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        n = len(nums)
        arr = [0]*n
        for i in nums:
            if(arr[i]==-1):
                return i
            arr[i] = -1

            /**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {

    // // using set but it takes extra space 
    // let dup = new Set();
    // let dn = 0;
    // for( let i = 0; i<nums.length; i++){
    //     if(dup.has(nums[i])){
    //         dn = nums[i];
    //         break;
    //     } else {
    //         dup.add(nums[i]);
    //     }
    // }
    // return dn

    let slow = nums[0];
    let fast = nums[0];
    
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow !== fast);

    console.log(slow)
    console.log(fast)
    
    slow = nums[0];
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }
    
    return slow;
    
};