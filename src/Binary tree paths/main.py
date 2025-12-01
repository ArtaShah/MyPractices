class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def binaryTreePaths(self, root: TreeNode) -> str:
        result=[]
        def DFS(node,path):
            if not node:
                return
            newPath=path+str(node.val)
            if not node.left and not node.right:
                result.append(newPath)
                return
            newPath += "->"
            DFS(node.left,newPath)
            DFS(node.right,newPath)
        DFS(root,"")
        return result