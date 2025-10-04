/**
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = function (nums) {

    if (nums.length <= 1) return false;

    for (let i = 0; i < nums.length; i++) {

        let slow = fast = i;
        let ifForward = nums[i] > 0;

        while (true) {
            slow = getNextPosition(nums, slow, ifForward);

            if (slow == -1) {
                break
            }

            fast = getNextPosition(nums, fast, ifForward);
            if (fast == -1) {
                break
            }


            fast = getNextPosition(nums, fast, ifForward);
            if (fast == -1) {
                break
            }
            if (slow == fast) {
                return true;
            }
        }
    }

    return false;
};

var getNextPosition = (nums, index, ifForward) => {
    let dir = nums[index] >= 0;
    if (dir != ifForward) {
        return -1;
    }

    let nextIndex = (index + nums[index]) % nums.length;
    if (nextIndex < 0) {
        nextIndex = nextIndex + nums.length
    }

    if (nextIndex == index) {
        return -1
    }

    return nextIndex;
}

