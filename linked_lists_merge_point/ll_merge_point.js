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
    // how do we know where they merge
    // without knowing whether they're
    // the same node

    // can we use the data values on each
    // list node to determine if the node 
    // is the merge point

    // iterate throught the lists
    // on each iteration, === check if the
    // node are the same instance until
    // we find two nodes that aren't

    // O(n^2)
    // nested loops
    // outside loop iterates through headA
    // inner loop iterates through headB
    // check each node in list A against 
    // each node in list B until we find a match

    // O(n + m)     runtime
    // O(n)         space
    // run thru the first list in its entirety
    // run thru the second list until we see
    // the first node that is in the visited set

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

    // can we use a while loop to traverse the 
    // first list, add each node to a visited set
    // loop thru the second list, check if the
    // current node is in the visited set
    // the first node from the 2nd list that is in 
    // the visited set is the one we're looking for

    // while currA !== currB
    // if currA.next === null
    // currA = headB
    // if currB.next === null
    // currB === headA
}