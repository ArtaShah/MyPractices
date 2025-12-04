class Solution:
    def threeSumClosest(self, nums, target):
        nums.sort()
        n=len(nums)
        closest=nums[0]+nums[1]+nums[2]
        for i in range(n-1):
            right=n-1
            left=i+1
            while left<right:
                s=nums[i]+nums[right]+nums[left]
                if abs(s-target)<abs(closest-target):
                    closest=s
                if s<target:
                    left+=1
                elif s>target:
                    right-=1
                else:
                    return s
        return closest