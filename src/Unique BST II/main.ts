class treeNode{
    constructor(
        public val:number=0,
        public left:treeNode|null=null,
        public right:treeNode|null=null
    ){}
}
function generateTrees(n: number): Array<treeNode | null> {
    if (n===0)
        return [];
    function build(start:number,end:number):Array<treeNode | null> {
        const result:Array<treeNode|null>=[];
        if(start>end){
            result.push(null);
            return result;
        }
        for(let rootVal=start;rootVal<=end;rootVal++){
            const leftTrees=build(start,rootVal-1);
            const rightTrees=build(rootVal+1,end);
            for(const left of leftTrees){
                for(const right of rightTrees){
                    const root=new treeNode(rootVal);
                    root.left=left;
                    root.right=right;
                    result.push(root);
                }
            }
        }
        return result;
    }
    return build(1,n);
};