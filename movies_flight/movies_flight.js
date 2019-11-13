function canTwoMoviesFillFlight(movieLengths, flightLength) {

    // initialize set to hold movie lengths visited
    let times = new Set()


    for (let i = 0; i < movieLengths.length; i++) {

        // movie lengths we've seen so far
        let firstMovieLength = movieLengths[i]

        // second movie that would match first for flight time
        let matchingMovieLength = flightLength - firstMovieLength

        // if our set has a matching time, we're donw
        if (times.has(matchingMovieLength)) {

            return true

        }

        // if a match wasn't in our set, add our first movie time to it
        // and go back and loop again
        times.add(firstMovieLength)

    }

    return false;
}