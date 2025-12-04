class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        sLetters = []
        tLetters = []
        for letter in s:
            sLetters.append(letter)
        sLetters.sort()

        for letter in t:
            tLetters.append(letter)
        tLetters.sort()

        return sLetters == tLetters
