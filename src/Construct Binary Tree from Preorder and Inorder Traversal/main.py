from typing import Optional,List
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
        index_map={value:i for i,value in enumerate(inorder)}
        self.pre_indx=0
        def build(left,right):
            if left>right:
                return None
            root_val=preorder[self.pre_indx]
            self.pre_indx+=1
            root=TreeNode(root_val)
            mid=index_map[root_val]
            root.left=build(left,mid-1)
            root.right=build(mid+1,right)
            return root
        return build(0,len(inorder)-1)