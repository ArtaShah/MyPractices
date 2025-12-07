class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def increasingBST(self, root: TreeNode) -> TreeNode:
        stack=[]
        dummy=TreeNode(0)
        tail=dummy
        curr=root
        while curr or stack:
            while curr:
                stack.append(curr)
                curr=curr.left
            node=stack.pop()
            node.left=None
            tail.right=node
            tail=node
            curr=node.right
        return dummy.right
