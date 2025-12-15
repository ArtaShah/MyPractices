class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def findMode(self, root: TreeNode) -> int:
        self.prev=None
        self.count=0
        self.maxCount=0
        self.modes=[]
        def inOreder(node):
            if not node:
                return
            inOreder(node.left)
            if node.val==self.prev:
                self.count+=1
            else:
                self.prev=node.val
                self.count=1
            if self.count>self.maxCount:
                self.maxCount=self.count
                self.modes=[node.val]
            elif self.count==self.maxCount:
                self.modes.append(node.val)
            inOreder(node.right)
        inOreder(root)
        return self.modes