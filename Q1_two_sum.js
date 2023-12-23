// mySolution

var twoSum = function(nums, target) {
    for(let i =0; i < nums.length; i++) {
        const cn = nums[i];
        const re = target-cn;
        const leftAry = nums;
        leftAry.splice(i,1)
        existIndex = leftAry.indexOf(re);
        if(existIndex>-1){
            return [i,existIndex+i+1]
        }
    }
};


// abover solutoin is faling for some scenerios better to do another approach using Mapvar twoSum = function(nums, target) {
    var twoSum = function(nums, target) {
        let map = new Map()
    for(let i =0; i < nums.length; i++) {
       const cn = nums[i];
       const re = target-cn;
       if(map.has(re)){
           return [i,map.get(re)]
       }

       map.set(cn,i);
       
    }
};

