class Solution:
    def myAtoi(self, s: str) -> int:
        s = s.lstrip()
        if not s:
            return 0
        sign =1
        i=0
        if s[0] == "-":
            sign= -1
            i=1
        elif s[0] == "+":
            i=1
        num=0
        while i< len(s) and s[i].isdigit():
            value=ord(s[i])-ord('0')
            num= num*10 + value
            i+=1
        num*=sign
        int_min= -2147483648
        int_max = 2147483647
        if num<int_min:
            return int_min
        if num>int_max:
            return int_max
        return num