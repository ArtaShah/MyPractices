class Solution:
    def smallestRepunitDivByK(self, k: int) -> int:
        if k%2==0 or k%5==0:
            return -1
        x=0
        for len in range(1,k+1):
            x=(x*10+1)%k
            if x==0:
                return len
        return -1