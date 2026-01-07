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
function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    const indexMap=new Map<number,number>();
    for(let i=0;i<inorder.length;i++)
        indexMap.set(inorder[i],i);
    let postIndex=postorder.length-1;
    function build(left:number,right:number):TreeNode|null{
        if(left>right)
            return null;
        const rootVal=postorder[postIndex--];
        const root=new TreeNode(rootVal);
        const mid=indexMap.get(rootVal)!;
        root.right=build(mid+1,right);
        root.left=build(left,mid-1);
        return root;
    }
    return build(0,inorder.length-1);
};