class treeNode{
    constructor(
        public val:number=0,
        public left:treeNode|null=null,
        public right:treeNode|null=null
    ){}
}
function averageOfLevels(root:treeNode|null):number[]{
    if(root===null){
        return [];
    }
    const queue:treeNode[]=[root];
    const result:number[]=[];
    while(queue.length>0){
        const levelSize=queue.length;
        let levelSum=0;
        for(let i=0;i<levelSize;i++){
            const node=queue.shift()!;
            levelSum+=node.val;
            if(node.left)
                queue.push(node.left);
            if(node.right)
                queue.push(node.right);
        }
        result.push(levelSum/levelSize);
    }
    return result;
}