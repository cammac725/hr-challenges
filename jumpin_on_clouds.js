function jumpingOnClouds(c) {
    // is jumpin 2 steps better than jumping 1?
    // trying to minimize number of jumps
    // if we can jump 2, we should take that option
    // sometimes we can't jump 2 so we have to jump 1
    // sometimes we can't jump 1 so we have to jump 2

    // keep track of jumps
    // keep track of curr index (cloud)
    let jumps = 0
    let curr = 0

    // while true 
    while (true) {
        // if cloud + 2 < c.length && c[clouds + 2] === 0
        if (curr + 2 < c.length && c[curr + 2] === 0) {
            // cloud += 2
            // jumps++
            curr += 2
            jumps++

            // else if cloud + 1 < c.length
        } else if (curr + 1 < c.length) {
            // cloud += 1
            // jumps++
            curr++
            jumps++
        } else {
            break
        }
        // else break
    }
    // return jumps
    return jumps
}