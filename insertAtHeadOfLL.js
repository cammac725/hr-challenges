/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

 
function insertNodeAtHead(head, data) {
    let newNode = new SinglyLinkedListNode(data)

    newNode.next = head

    return newNode
}