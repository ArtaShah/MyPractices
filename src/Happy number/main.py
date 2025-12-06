class Solution:
    def isHappy(self, n: int) -> bool:
        def sum(x):
            total=0
            while x>0:
                num=x%10
                total+=num*num
                x=x//10
            return total
        seen=set()
        while n!=1:
            if n in seen:
                return False
            seen.add(n)
            n=sum(n)
        return True