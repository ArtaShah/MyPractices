class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val ?? 0;
        this.left = left ?? null;
        this.right = right ?? null;
    }
}
function levelOrderBottom(root: TreeNode | null): number[][] {
    if(!root)
        return [];
    const result:number[][]=[];
    const queu:TreeNode[]=[root];
    while(queu.length>0){
        const levelSize=queu.length;
        const level:number[]=[];
        for(let i=0;i<levelSize;i++){
            const node=queu.shift()!;
            level.push(node.val);
            if(node.left)
                queu.push(node.left);
            if(node.right)
                queu.push(node.right);
        }
        result.push(level)
    }
    return result.reverse();
};