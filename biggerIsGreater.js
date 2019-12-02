function biggerIsGreater(w) {
    // find non-increasing suffix
    let word = w.split('')
    let i, j, k
    i = j = k = word.length - 1

    while (i > 0 && word[i - 1] >= word[i]) {
        i--
    }
    if (i <= 0) {
        return "no answer"
    }

    // find successor to pivot
    while (word[j] <= word[i - 1]) {
        j--
    }
    [word[i - 1], word[j]] = [word[j], word[i - 1]]

    // reverse suffix
    while (i < k) {
        [word[i], word[k]] = [word[k], word[i]]
        i++
        k--
    }

    return word.join('')
}