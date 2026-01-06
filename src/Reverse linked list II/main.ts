class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val ?? 0;
        this.next = next ?? null;
    }
}
function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    if(!head||left===right)
        return head;
    const dummy=new ListNode(0,head);
    let prev:ListNode|null=dummy;
    for(let i=1;i<left;i++)
        prev=prev!.next;
    let current=prev!.next;
    for(let i=0;i<right-left;i++){
        const nextNode=current!.next;
        current!.next=nextNode!.next;
        nextNode!.next=prev!.next;
        prev!.next=nextNode;
    }
    return dummy.next;
};