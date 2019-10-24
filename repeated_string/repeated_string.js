function repeatedString(s, n) {
    // helper function to count the occurences of "a"
    const countA = s => s.split('a').length - 1

    let len = s.length
    // determine how many repititions needed for "n"
    let reps = Math.floor(n / len)
    // determine how much extra needed instead of full rep
    let remainder = s.slice(0, n % len)
    // add reps * a's in each rep and a's in remainder
    return reps * countA(s) + countA(remainder)
}