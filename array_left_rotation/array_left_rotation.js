function leftRot(a, d) {
    // init var "removed"
    // splice off d elems starting from 0 index
    let removed = a.splice(0, d)
    // concatenate those elems onto whatever is left of the array
    // and return them joined with spaces in between
    return a.concat(removed).join(' ')
}