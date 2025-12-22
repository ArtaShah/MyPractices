class treeNode{
    constructor(
        public val:number=0,
        public left:treeNode|null=null,
        public right:treeNode|null=null
    ){}
}
function findTilt(root:treeNode|null):number{
    let total=0;
    function dfs(node:treeNode|null):number{
        if(node===null)
            return 0;
        const leftSum=dfs(node.left);
        const rightSum=dfs(node.right);
        total+=Math.abs(leftSum-rightSum);
        return leftSum+rightSum+node.val;
    }
    dfs(root);
    return total;
}