from typing import Optional
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def findTilt(self, root: Optional[TreeNode]) -> int:
        self.total=0
        def dfs(node):
            if not node:
                return 0
            leftSum=dfs(node.left)
            rightsum=dfs(node.right)
            self.total+=abs(leftSum-rightsum)
            return node.val+leftSum+rightsum
        dfs(root)
        return self.total