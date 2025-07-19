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