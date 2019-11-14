function containsCycle(firstNode) {

    // start both pointers at the beginning
    let pointerA = firstNode

    let pointerB = firstNode

    // until we hit the end of the list
    while (pointerA && pointerA.next) {

        pointerB = pointerB.next

        pointerA = pointerA.next.next

        // if pointerA laps pointerB
        if (pointerA === pointerB) {

            return true

        }
    }

    // if pointerA has no next, we hit the end without a cycle

    return false

}