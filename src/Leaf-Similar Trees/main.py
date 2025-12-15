class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def leafSimilar(self, root1, root2):
        def getLeaves(node,leaves):
            if not node:
                return
            if not node.right and not node.left:
                leaves.append(node.val)
                return
            getLeaves(node.left,leaves)
            getLeaves(node.right,leaves)
        leaves1=[]
        leaves2=[]
        getLeaves(root1,leaves1)
        getLeaves(root2,leaves2)
        return leaves1==leaves2