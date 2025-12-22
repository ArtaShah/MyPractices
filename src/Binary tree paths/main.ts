class treeNode{
    constructor(
        public val:number=0,
        public left:treeNode|null=null,
        public right:treeNode|null=null
    ){}
}
function binaryTreePaths(root:treeNode|null):string[]{
    if (!root) return [];
    const paths: string[] = [];
    function dfs(node:treeNode|null, path: string): void {
        if (!node)
            return;
        path += node.val.toString();
        if (!node.left && !node.right)
            paths.push(path);
        else {
            path += "->";
            dfs(node.left, path);
            dfs(node.right, path);
        }
    }
    dfs(root, "");
    return paths;
}