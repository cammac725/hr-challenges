/*
    Find merge point of two linked lists
    Note that the head may be 'null' for the empty list.
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

function findMergeNode(headA, headB) {
   

    let nextA = headA
    let nextB = headB

    // runthru the first list in its entirety
    while (nextA) {
        // instead of adding each node to a set
        // simply mark it:
        // node.visited = true
        nextA.visited = true
        nextA = nextA.next
    }
    
    // iterate thru the second list,
    // checking for the first node that is 
    // marked as visited
    while (!nextB.visited) {
        nextB = nextB.next
    }

    return nextB.data

    
}