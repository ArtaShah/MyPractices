class Solution:
    def reverse(self, x: int) -> int:
        Int_Min, Int_Max = (-2)**31, (2**31) - 1
        sign = -1 if x<0 else 1
        x = abs(x)
        reversed_str = str(x)[::-1]
        reversed_num = sign * int(reversed_str)
        if reversed_num < Int_Min or reversed_num > Int_Max:
            return 0
        return reversed_num
