class treeNode{
    constructor(
        public val:number=0,
        public left:treeNode|null=null,
        public right:treeNode|null=null
    ){}
}
function inorderTraversal(root:treeNode|null):number[]{
    const result:number[]=[];
    const stack:treeNode[]=[];
    let curr=root;
    while(curr||stack.length>0){
        while(curr){
            stack.push(curr);
            curr=curr.left;
        }
        curr=stack.pop()!;
        result.push(curr.val);
        curr=curr.right;
    }
    return result;
}