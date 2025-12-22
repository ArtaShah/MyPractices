class treeNode{
    constructor(
        public val:number=0,
        public left:treeNode|null=null,
        public right:treeNode|null=null
    ){}
}
function zigzagLevelOrder(root: treeNode | null): number[][] {
    if (root===null) 
        return [];
    const result: number[][] = [];
    const queue: treeNode[] = [root];
    let leftToRight = true;
    while (queue.length > 0) {
        const levelSize = queue.length;
        const currentLevel: number[] = new Array(levelSize);
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift()!;
            const index = leftToRight ? i : (levelSize - 1 - i);
            currentLevel[index] = node.val;
            if (node.left)
                queue.push(node.left);
            if (node.right)
                queue.push(node.right);
        }
        result.push(currentLevel);
        leftToRight = !leftToRight;
    }
    return result;
}