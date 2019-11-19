function reverseList(head) {

    // iterative
    let current = head

    if (!current) {
        return current
    }

    let currNext = head.next
    current.next = null

    while (currNext) {
        let temp = currNext.next
        currNext.next = current
        current = currNext
        currNext = temp
    }
    return current

    // recursive
    if (!head) {
        return head
    }

    let pre = head.next
    head.next = null

    function func(curr, pre) {
        if (pre == null) {
            return curr
        }
        let temp = pre.next
        pre.next = curr
        return func(pre, temp)
    }
}