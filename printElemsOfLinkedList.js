/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

 function printLinkedList(head) {
     while (head) {
         console.log(head.data)
         head = head.next
     }
 }

 // OR

function printLinkedList(head) {
    if (head === null) {
        return
    }

    console.log(head.data)
    return printLinkedList(head.next)
}

// OR 

function printLinkedList(head) {
    for (var i = head; i != undefined; i = i.next) {
        console.log(i.data);
    }
}