function reverseList(head) {

    // iterative
    if (!head) {
        return head
    }

    let first = head
    let current = head.next

    while (current) {
        head.next = current.next
        current.next = first
        first = current
        current = head.next
    }
    return first

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