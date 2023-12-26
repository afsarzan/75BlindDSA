 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0,end = nums.length-1;        

    while( start<=end){
            let mid = Math.floor((start+end)/2);
            if(target === nums[mid]) return mid;
            
            if ( nums[mid] >= nums[start] ) {
                // start-mid
                if( target >= nums[start] && target < nums[mid]) {
                    end = mid -1;
                } else {
                    start = mid + 1;
                }
            } else {
                // mid - start
                if( target > nums[mid] && target<=nums[end]){
                    start = mid+1;
                } else {
                    end = mid-1;
                }

            }

            // if(nums[mid]>target){
            //     left = mid + 1;
            // } else {
            //     right = mid - 1;
            // }
    }
    return -1;
};



//explanation https://www.youtube.com/watch?v=pj02A23IyBw