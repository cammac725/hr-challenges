function readAndSumHourglass(arr, x, y) {
    // params: coordinates in the matrix of top left corner of hourglass
    // plus the matrix itself
    // x is row coordinate, y is column coordinate
    // how do we read in the other hourglass values
    // hourlgass shape doesn't change
    let runningTotal = arr[x][y];
    // top center: x, y+1
    runningTotal += arr[x][y + 1];
    // top right: x, y+2
    runningTotal += arr[x][y + 2];
    // mid center: x+1, y+1
    runningTotal += arr[x + 1][y + 1];
    // bottom left: x+2, y
    runningTotal += arr[x + 2][y];
    // bottom center: x+2, y+1
    runningTotal += arr[x + 2][y + 1];
    // bottom right: x+2, y+2
    runningTotal += arr[x + 2][y + 2]
    // we'll sum up all of the matrix elements at these coordinates
    // return total sum
    return runningTotal;
}

// Complete the hourglassSum function below:
function hourglassSum(arr) {
    // WHAT ARE WE DOING TO SOLVE THE PROBLEM
    let currentMaxSum = -Infinity;

    // how do we iterate through a matrix?
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = 0; j < arr[0].length - 2; j++) {

            // we'll start at the top left corner
            // consider the current matrix element as the top left
            // corner of the current hourglass we're accessing
            // read in the hourglass values and sum them up
            // hourglassSum var contains the sum of the current hourglass
            const hourglassSum = readAndSumHourglass(arr, i, j);
            // compare hourglass sum against our currentMaxSum
            // if hourglass Sum > currentMaxSum
            if (hourglassSum > currentMaxSum) {
                currentMaxSum = hourglassSum;
            }
        }
    }

    return currentMaxSum


    // do we need to take the sums of each hourglass and
    // add them to their own array?
    // can we have a curr_max_sum var to keep track of max sum we've seen

    // simplify: how do we just get max integer from an an array of integers?

    // once we;ve iterated alon the entire matrix, we'll have the largest sum
    // return that sum

    // how do we access every value in an hourglass?
}