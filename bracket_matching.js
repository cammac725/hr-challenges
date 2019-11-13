function isBalanced(s) {
    // split string into elements in array
    const arr = s.split("")
    const openers = ['{', '(', '['];
    const closers = ['}', ')', ']'];
    const stack = [];

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i]

        // if elem is an opener
        if (openers.includes(element)) {
            // add it to the stack
            stack.push(element)

        // else if it's a closer
        } else if (closers.includes(element)) {

            // if the indexes of the one in the stack matches the one from the array
            if (closers.indexOf(element) === openers.indexOf(stack[stack.length - 1])) {
                // remove it from the stack cuz it matched
                stack.pop()
            } else {
                // if the indexes don't match, we aren't balanced
                return "NO"
            }
        }
    }

    // if anything is left unmatched in the stack
    if (stack.length) {
        return "NO"
    }
    
    return "YES";
}