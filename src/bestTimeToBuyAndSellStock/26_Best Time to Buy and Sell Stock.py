from typing import List
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        minPrice= float('inf')
        maxPrice =0
        for i in prices:
            if i<minPrice:
                minPrice= i
            elif i-minPrice>maxPrice:
                maxPrice=i - minPrice
        return maxPrice