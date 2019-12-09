function insertNodeAtPosition(head, data, position) {
    let newNode = new SinglyLinkedListNode()
    newNode.data = data

    if (!head) {
        head = newNode
    } else {
        let prev = head
        let current = head.next

        for (let i = 0; i !== position - 1; i++) {
            prev = prev.next
            current = current.next
        }

        prev.next = newNode
        newNode.next = current
    }
    return head
}

// OR

function insertNodeAtPosition(head, data, position) {
    let newNode = new SinglyLinkedListNode()
    newNode.data = data

    if (position === 0) {
        newNode.next = head
        return newNode
    }

    const getNode = (head, position) => {
        if (position === 0) return head
        return getNode(head.next, position - 1)
    }

    newNode.next = getNode(head, position)

    getNode(head, position - 1).next = newNode

    return head
}


// OR

function insertNodeAtPosition(head, data, position) {
    let newNode = new SinglyLinkedListNode(data);
    let pre = null;
    let current = head;
    let index = 0;
    while (true) {
        if (index === position) {
            let temp = current;
            pre.next = newNode;
            newNode.next = temp;
            break;
        }
        pre = current;
        current = current.next;
        index++;
    }

    return head;
}

 // OR

