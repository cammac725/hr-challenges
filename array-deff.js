function array_diff(a, b) {
    let set = new Set(b)
    return a.filter(item => !set.has(item))
}