const findMin = (nums) => {
    let l = 0;
    let r = nums.length - 1;
    while (l < r) {
      const m = ~~((l + r) / 2);
      if (nums[m] > nums[r]) l = m + 1;
      else r = m;
    }
    return nums[l];
  };

  var findMin2 = function(nums) {
    // let min=nums[0]
    // nums.forEach(item=> {
    //     min = Math.min(min,item)
    // })

    // return min;

    // return Math.min(...nums)

    let left =0, right = nums.length-1;
    while(left<right ) {
        let midPoint = Math.floor((left+right)/2);
        if(nums[midPoint] > nums[right]) {
            left = midPoint+1;
        } else {
            right = midPoint
        }
    }
    return nums[left]
};

// explanation  = https://www.youtube.com/watch?v=dJC4uHyy2nc