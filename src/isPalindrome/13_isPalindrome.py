class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0:
            return False
        if x %10 == 0 and x != 0:
            return False
        Reversed = 0
        save=x
        while x//10>0:
            Reversed = (Reversed*10) + (x%10)
            x=x//10
        Reversed= (Reversed*10)+x
        if save == Reversed:
            return True
        else:
            return False
