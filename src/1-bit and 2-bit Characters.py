from typing import List
class Solution:
    def isOneBitCharacter(self, bits: List[int]) -> bool:
        index=0
        lastNum=0
        while index < len(bits) - 1:
            if bits[index] == 1:
                index += 2
                lastNum = 1
            else:
                index += 1
                lastNum = 0
        return index == len(bits) - 1