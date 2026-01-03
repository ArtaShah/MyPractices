class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
function partition(head: ListNode | null, x: number): ListNode | null {
    const beforeDummy = new ListNode(0);
    const afterDummy = new ListNode(0);
    let before = beforeDummy;
    let after = afterDummy;
    let current = head;
    while (current) {
        if (current.val < x) {
          before.next = current;
          before = before.next;
        } else {
          after.next = current;
          after = after.next;
        }
        current = current.next;
    }
    after.next = null;
    before.next = afterDummy.next;
    return beforeDummy.next;
};