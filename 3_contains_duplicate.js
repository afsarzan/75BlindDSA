// worked but not good for time limit values

var containsDuplicate = function(nums) {
    const result = false;

    for(let i=0;i<nums.length;i++){
        if(nums.indexOf(nums[i])>-1&& i != nums.indexOf(nums[i])){
            return true;
        }
    }
    return result
};

// Create set 
const s = new Set(nums); 
return s.size !== nums.length