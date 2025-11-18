class Solution:
    def maxArea(self,height):
        left =0
        right = len(height)-1
        maxArea=0
        while left<right:
            h=min(height[left],height[right])
            w= right-left
            maxArea = max(maxArea,h*w)
            if height[left]<height[right]:
                left+=1
            else:
                right-=1
        return maxArea