class Solution:
    def convertToTitle(self, columnNumber: int) -> str:
        if columnNumber>2147483647 or columnNumber<1:
            return 0
        result=[]
        while columnNumber>=1:
            columnNumber-=1
            temp = columnNumber%26
            result.append(chr(ord('A')+temp))
            columnNumber//=26
        return "".join(result[::-1])