class treeNode{
    constructor(
        public val:number=0,
        public right:treeNode|null=null,
        public left:treeNode|null=null
    ){}
}
function buildTree(preorder:number[],inorder:number[]):treeNode[]|null{
    const indexMap=new Map<number,number>()
    inorder.forEach((value,i)=>indexMap.set(value,i))
    let preIndex=0
    function build(left:number,right:number):treeNode|null{
        if(left>right)
            return null;
        
    }
}