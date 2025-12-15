class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def minDiffInBST(self, root):
        self.prev = None
        self.min=float('inf')
        def inorder(node):
            if not node:
                return
            inorder(node.left)
            if self.prev is not None:
                self.min=min(self.min,node.val-self.prev)
            self.prev=node.val
            inorder(node.right)
        inorder(root)
        return self.min