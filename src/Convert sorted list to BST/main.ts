class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val ?? 0;
        this.next = next ?? null;
    }
}
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
function sortedListToBST(head: ListNode | null): TreeNode | null {
    if(!head)
        return null;
    if(!head.next)
        return new TreeNode(head.val);
    let prev:ListNode|null=null;
    let slow:ListNode|null=head;
    let fast:ListNode|null=head;
    while(fast&&fast.next){
        prev=slow;
        slow=slow!.next;
        fast=fast.next.next;
    }
    prev!.next=null;
    const root=new TreeNode(slow!.val);
    root.left=sortedListToBST(head);
    root.right=sortedListToBST(slow!.next);
    return root;
};