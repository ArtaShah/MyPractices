from collections import deque
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def zigzagLevelOrder(self, root: TreeNode) -> list[list[int]]:
        if not root:
            return []
        result=[]
        queue=deque([root])
        ltr=True
        while queue:
            levelSize=len(queue)
            level=[]
            for _ in range(levelSize):
                node=queue.popleft()
                level.append(node.val)
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
            if not ltr:
                level.reverse()
            result.append(level)
            ltr=not ltr
        return result