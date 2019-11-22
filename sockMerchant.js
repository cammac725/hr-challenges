// given an array of sock colors, how many pairs can be made

arr = ["pink", "green", "green", "red", "green", "pink"]

function sockMerchant(arr) {
    // create a set
    let socks = new Set()
    // init counter
    let count = 0

    // loop through socks
    for (let sock of arr) {
        // if created set already has sock
        if (socks.has(sock)) {
            //incr counter
            count++
            // remove it from the set, it has a pair
            socks.delete(sock)
        } else {
            // add it to the set, it's a single at this point
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