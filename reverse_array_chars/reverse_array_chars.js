function reverse(arrChars) {

    let leftIndex = 0
    let rightIndex = arrChars.length - 1

    while (leftIndex < rightIndex) {
        let temp = arrChars[leftIndex]
        arrChars[leftIndex] = arrChars[rightIndex]
        arrChars[rightIndex] = temp

        leftIndex++
        rightIndex--
    }
}