// Davis has a number of staircases in his house and he likes
// to climb each staircase, 1, 2 or 3 steps at a time.
// Being a very precocious child, he wonders how many ways
// there are to reach the top of the staircase.

// Given the respective heights for each of the "n" staircases in
// his house, find and print the number of ways he can climb each staircase


// given n = 0, return 1
// given n = 1, return 1
// given n = 2, return 2
// given n = 3, return 4

function stepPerms(n) {
    // init cache
    const cache = {}
    // cache is empty
    // check the cache to see if the answer for n
    // is saved in the cache
    if (cache[n]) {
        // return the saved answer
        return cache[n]
    } else {
        // we don't have the answer in the cache
        // let's fall back on our naive solution
        // to figure out the answer
        const answer = stepPermsNaive(n, cache)
        // save the answer
        cache[n] = answer
        return cache[n]
    }

}

function stepPermsNaive(n, cache) {
   
    // base case(s) are given

    // we need one more base case to have our
    // helper function check the cache
    if (cache[n]) {
        return cache[n]
    }
    if (n === 0) {
        return 1;
    }
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 2
    }
    if (n === 3) {
        return 4;
    } else {
        
        // if n > 3, how do we move from n value
        // to one of the base cases?
        // (n - 1) + (n - 2) + (n - 3)
        // we can take 1 step, 2 steps, or 3 steps

        cache[n] = stepPermsNaive(n-1, cache) + stepPermsNaive(n-2, cache) + stepPermsNaive(n-3, cache) 
        return cache[n]
    }
}

// n = 6
// stepPerms(6-1) => represents taking a jump of 1
// now we need to figure out how many ways there are 
// to jump 5 steps
// stepPerms(6-2) => represents taking a jump of 2
// figure out how many ways to jump 4 steps
// stepPerms(6-3) => represents taking a jump of 3
// figure out how many ways to jump 3 steps => 4

// then we do stepPerms(5-1) etc