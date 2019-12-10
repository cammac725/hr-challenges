/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */


function insertNodeAtTail(head, data) {
    let newNode = new SinglyLinkedListNode(data)

    if (head === null) {
        return newNode
    }

    let current = head

    // iterate through til no current.next
    // now we're at the tail
    while (current && current.next) {
        current = current.next
    }

    // set tail (current.next) to new node
    current.next = newNode

    return head

}