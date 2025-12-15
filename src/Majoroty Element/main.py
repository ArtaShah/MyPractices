class Solution:
    def majorityElement(self, nums: list) -> int:
        cond=0
        count=0
        for n in nums:
            if count==0:
                cond=n
            if n==cond:
                count+=1
            else:
                count-=1
        return cond