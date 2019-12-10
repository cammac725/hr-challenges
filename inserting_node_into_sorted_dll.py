# For your reference:
#
# DoublyLinkedListNode:
#     int data
#     DoublyLinkedListNode next
#     DoublyLinkedListNode prev
#
#


def sortedInsert(head, data):

    current = head
    newNode = DoublyLinkedListNode(data)

    # check if the data element < head.data
    if data < head.data:
        # create new head with data elem
        # 1. set new node next to head
        newNode.next = head
        # 2. set head's prev to new node
        head.prev = newNode
        return newNode

    # iterate through our DLL
    while current:
        # check if the data int > current element

        # if it is, move on to the next node
        # if data int < current element
        if data < current.data:
            # insert the data elem right before the current elem

            # 1. new node's next = current
            newNode.next = current
            # 2. newNode.prev = current.prev
            newNode.prev = current.prev
            # 3. current.prev.next. = newNode
            current.prev.next = newNode
            # 4. current's prev = newNode
            current.prev = newNode
        # handle case where data elem > tail elem
        # in this case, we're adding a new tail
        elif current.next is None:

            # 1. newNode next = None
            newNode.next = None
            # 2. newNode. prev = current
            newNode.prev = current
            # 3. current.next = newNode
            current.next = newNode
            break

        current = current.next
    # return the head of the modified DLL
    return head
