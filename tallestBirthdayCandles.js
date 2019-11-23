


function birthdayCakeCandles(ar) {
    // finds largest of all elememts in array
    let tallest = Math.max(...ar)

    // filters out all the nums that equal that largest element
    // and returns the length of that new array
    const filteredArr = ar.filter(num => num === tallest).length
    return filteredArr

    console.log(filteredArr)

}