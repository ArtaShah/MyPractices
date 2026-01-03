class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
function deleteDuplicates(head: ListNode | null): ListNode | null {
    const dummy=new ListNode(0);
    dummy.next=head;
    let prev:ListNode=dummy;
    let current=head;
    while(current){
        if(current.next&&current.val===current.next.val){
            const dupVal=current.val;
            while(current&&current.val===dupVal)
                current=current.next;
            prev.next=current;
        }
        else{
            prev=current;
            current=current.next;
        }
    }
    return dummy.next;
};