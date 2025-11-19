class Solution:
    def countOperations(self, num1: int, num2: int) -> int:
        operation=0
        while num1 !=0 and num2 != 0:
            if num2>num1:
                num2-=num1
                operation+=1
            else:
                num1-=num2
                operation +=1
        return operation