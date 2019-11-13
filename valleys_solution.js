
function countingValleys(n, s) {
    // init a valley count
    let val = 0
    // init a var to indicate what level we're on
    let lvl = 0
    for (let i = 0; i <= n; i++) {
        // if char is a U, incr the level
        if (s.charAt(i) == "U") lvl++
        // if char is a D, decr the level
        if (s.charAt(i) == "D") lvl--
        // if the level is 0 (sea level) and the char is U
        // that means we just came up out of a valley to sea level
        if (lvl == 0 && s.charAt(i) == "U") ++val
    }
    return val
}