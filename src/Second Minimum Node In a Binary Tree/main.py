class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def findSecondMinimumValue(self, root: TreeNode) -> int:
        smallest=root.val
        self.answer=float('inf')
        def dfs(node):
            if not node:
                return
            if smallest<node.val<self.answer:
                self.answer=node.val
            dfs(node.left)
            dfs(node.right)
        dfs(root)
        return self.answer if self.answer<float('inf') else -1