class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def countNodes(self, root: TreeNode) -> int:
        if not root:
            return 0
        count=0
        stack=[root]
        while stack:
            node=stack.pop()
            count+=1
            if node.left:
                stack.append(node.left)
            if node.right:
                stack.append(node.right)
        return count