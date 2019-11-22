// given an array of sock colors, how many pairs can be made

arr = ["pink", "green", "green", "red", "green", "pink"]

function sockMerchant(arr) {
    // create a set
    let socks = new Set()
    let count = 0

    for (let sock of arr) {
        if (socks.has(sock)) {
            count++
            socks.delete(sock)
        } else {
            socks.add(sock)
        }
    }
    return count


    // let len = arr.length
    // let pairs = 0
    // let colors = {}
    // for (let i = 0; i < len; i++) {
    //     if (colors[arr[i]]) {
    //         pairs++
    //         colors[arr[i]] = 0
    //     } else {
    //         colors[arr[i]] = 1
    //     }
    // }
    // return pairs


    // sorting the array first -- much slower

    // let pairs = 0
    // let len = arr.length
    // let sorted = arr.sort()
    // for (let i = 0; i < len; i++) {
    //     if (sorted[i] == sorted[i+1]) {
    //         pairs++
    //         i++
    //     }
    // }
    // return pairs
}


sockMerchant(arr)