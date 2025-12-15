from typing import Optional
class treeNode:
    def __init__(self,val=0,right=None,left=None):
        self.val=val
        self.right=right
        self.left=left

class Solution:
    def isBalanced(self,root: Optional[treeNode]) -> bool:
        def dfs(node):
            if not node:
                return 0
            leftHeight=dfs(node.left)
            if leftHeight ==-1:
                return -1
            rightHeight = dfs(node.right)
            if rightHeight == -1:
                return -1
            if abs(rightHeight-leftHeight)>1:
                return -1
            return max(rightHeight,leftHeight)+1
        return dfs(root) !=-1