from typing import Optional
class treeNode:
    def __init__(self,val=0,left=None,right=None):
        self.val=val
        self.right=right
        self.left=left
class Solution:
    def minDepth(self,root:Optional[treeNode])->int:
        if not root:
            return 0
        if not root.left:
            return 1+self.minDepth(root.right)
        if not root.right:
            return 1+self.minDepth(root.left)
        return 1+min(self.minDepth(root.left),self.minDepth(root.right))