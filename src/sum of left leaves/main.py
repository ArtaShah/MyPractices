class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def sumOfLeftLeaves(self, root: TreeNode) -> int:
        if not root:
            return 0
        def dfs(node):
            if not node:
                return 0
            total=0
            if node.left and not node.left.left and not node.left.right:
                total+=node.left.val
            return total+dfs(node.right)+dfs(node.left)
        return dfs(root)