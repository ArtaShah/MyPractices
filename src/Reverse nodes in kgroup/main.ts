class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    const dummy = new ListNode(0);
    dummy.next = head;
    let groupPrev: ListNode | null = dummy;
    while (true) {
        let kth = groupPrev;
        for (let i = 0; i < k && kth; i++) {
          kth = kth.next;
        }
        if (!kth) break;
        const groupNext = kth.next;
        let prev = groupNext;
        let curr = groupPrev!.next;
        while (curr !== groupNext) {
            const tmp = curr!.next;
            curr!.next = prev;
            prev = curr!;
            curr = tmp;
        }
        const tmp: ListNode | null = groupPrev!.next;
        groupPrev!.next = kth;
        groupPrev = tmp;
    }
    return dummy.next;
};