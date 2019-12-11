# For your reference:
#
# SinglyLinkedListNode:
#     int data
#     SinglyLinkedListNode next
#
#


# def findMergeNode(head1, head2):
#     s = set()

#     currA = head1
#     currB = head2

#     while currA:
#         s.add(currA)
#         currA = currA.next

#     while currB:
#         if currB in s:
#             return currB.data
#         currB = currB.next


##### OR


def findMergeNode(head1, head2):
    currA = head1
    currB = head2

    while currA:
        currA.visited = True
        currA = currA.next

    while currB:
        if hasattr(currB, 'visited'):
            return currB.data
        currB = currB.next
