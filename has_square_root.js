// Exercise 3:
// Write a function that identifies if an integer is a power of 2.
// The function should return a boolean.Explain why your function
// will work for any integer inputs that it receives.
// Examples: is_power_two(6) → false is_power_two(16) → true



function has_square_root(n) {

    // use binary search
    // if (n == 0 || n == 1) {
    //     return true
    // }

    // let low = 0
    // let high = n

    // while (low <= high) {
    //     // cut in half and define as midpoint
    //     mid = Math.floor((high + low) / 2)

    //     if (mid**2 == n) {
    //         return true

    //     } else if (mid**2 < n) {
    //         low = mid + 1

    //     } else if (mid**2 > n) {
    //         high = mid -1 
    //     }
    // }
    // return false

    found = false

    if (n == 0 || n == 1) {
        return true
    }

    for (let i = 2; i <= n; i++) {
        if (i ** 2 == n) {
            found = true
        }
    }

    return found
}