class Solution:
    def isPalindrome(self,s:str):
        filter=''.join(ch.lower() for ch in s if ch.isalnum())
        return filter == filter[::-1]