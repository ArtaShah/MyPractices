class Solution:
    def getIntersectionNode(self, headA, headB):
        if not headA or not headB:
            return None
        pa=headA
        pb=headB
        while pa != pb:
            pa =pa.next if pa else headB
            pb=pb.next if pb else headA
        return pa