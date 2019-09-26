function truckTour(petrolpumps) {
    // counter indicating current station we're attempting
    let pump = 0;
    //init gas counter
    let tank = 0;
    // loop through every element in the pumps array
    for (let i = 0; i < petrolpumps.length; i++) {
        // we want to start at the first pump and go in order
        // to find the station with the smallest index

        // increment counter to track how much gas we have
        // if gas counter >= distance,
        //then we move on to the next station
        tank += (petrolpumps[i][0] - petrolpumps[i][1])

        if (tank < 0) {
            // else
            // reset and try next station
            // update the counter indicating  which current
            // station we're attempting to start from
            pump = i + 1
            // reset the gas counter to 0
            tank = 0
        }
    }
    // at this point, traverse over the pumps array again
    // starting at the beginning up until where we stopped
    // checking that the solution still works
    for (let i = 0; i < pump; i++) {
        tank += (petrolpumps[i][0] - petrolpumps[i][1])
        if (tank < 0) {
            // else
            // reset and try next station
            // update the counter indicating which current
            // station we're attempting to start from
            pump = i + 1
            // reset the gas counter to 0
            tank = 0
        }
    }
    return pump
}


// function truckTour(petrolpumps) {
//     // queue to keep track of pumps
//     // if we realize pump is not valid starting point
//     // wee need to add it back to the queue so that it
//     // gets considered later on when we're trying
//     // a different starting pump

//     const route = []
//     // enqueue every pump in the array
//     for (let i = 0; i < petrolpumps.length; i++) {
//         route.push(petrolpumps[i])
//     }
//     // starting pump number
//     let pump = 0
//     let tank = 0
//     // what's our ending criteria?
//     // let's keep track of the number of pumps we've passed
//     let passed = 0

//     // loop until passed  === number of pumps we have
//     while (passed < petrolpumps.length) {
//         // get first pump from the route
//         const current = route.shift()
//         // add the amount of gas to our tank
//         tank += current[0]
//         // check if we can make it to the next station
//         if (tank - current[1] >= 0) {
//             // then we can successfully count
//             // this station as "passed"
//             passed++
//             // decrement gas counter by the amount used to get
//             // to the next station
//             tank -= current[1]
//         } else {
//             // reset and consider the next pump
//             pump += passed + 1
//             tank = 0
//         }
//         // add the current pump back onto our route
//         route.push(current)
//     }
//     return pump
// }