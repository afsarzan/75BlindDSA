/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left=0, right= height.length-1,maxArea =0;

    while(left<right){
        const area = Math.min(height[left],height[right]) * (right-left);
        maxArea = Math.max(area,maxArea);
        if(height[left]<height[right]){
            left++;
        } else {
            right--;
        }
    }
    return maxArea;
};

// Explanation https://www.youtube.com/watch?v=w7ftYsZtIbs