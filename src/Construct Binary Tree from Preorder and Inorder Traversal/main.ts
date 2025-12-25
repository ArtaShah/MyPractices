class treeNode{
    constructor(
        public val:number=0,
        public right:treeNode|null=null,
        public left:treeNode|null=null
    ){}
}
function buildTree(preorder:number[],inorder:number[]):treeNode|null{
    const indexMap=new Map<number,number>()
    inorder.forEach((value, index) => indexMap.set(value, index));
    let preIndex=0
    function build(left:number,right:number):treeNode|null{
        if(left>right)
            return null;
        const rootVal=preorder[preIndex];
        preIndex++;
        const root=new treeNode(rootVal);
        const mid=indexMap.get(rootVal)!;
        root.left=build(left,mid-1);
        root.right=build(mid+1,right);
        return root;
    }
    return build(0,inorder.length-1);
}