# 287. Find the Duplicate Number
class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        exit = set()
        for num in nums:
            if num in exit:
                return num
            else:
                exit.add(num)