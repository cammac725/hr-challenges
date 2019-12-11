# For your reference:
#
# SinglyLinkedListNode:
#     int data
#     SinglyLinkedListNode next
#
#

def findMergeNode(head1, head2):

    # traverse the first list and use a set to store
    # those values
    # check the second list for a value already in the store
    s = set()

    currA = head1
    currB = head2

    while currA:
        s.add(currA)
        currA = currA.next

    while currB:
        if currB in s:
            return currB.data
        currB = currB.next
