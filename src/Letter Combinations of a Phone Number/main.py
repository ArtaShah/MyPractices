class Solution:
    def letterCombinations(self, digits: str):
        nums={
            "2": "abc", "3": "def",
            "4": "ghi", "5": "jkl",
            "6": "mno", "7": "pqrs",
            "8": "tuv", "9": "wxyz"
        }
        result = []
        def backtracking(index,path):
            if index==len(digits):
                result.append(path)
                return
            for ch in nums[digits[index]]:
                backtracking(index+1,path+ch)
        backtracking(0,"")
        return result