/*
Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.

To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.

*/

change = [25, 20, 5, 0]
amountDue = 4.25

function changeEnough(change, amountDue) {
    let changeArr = [
        change[0] * 0.25,
        change[1] * 0.10,
        change[2] * 0.05,
        change[3] * 0.01
    ]
    return changeArr.reduce((a, b) => a + b) >= amountDue
}

// OR

function changeEnough(change, amountDue) {
    let quarters = change[0] * 0.25
    let dimes = change[1] * 0.10
    let nickels = change[2] * 0.05
    let pennies = change[3] * 0.01
    return quarters + nickels + dimes + pennies >= amountDue
}


// OR


const sum = change => change.reduce((total, num) => total + num, 0)

const values = [0.25, 0.10, 0.05, 0.01]

const changeEnough = (change, amountDue) => sum(change.map((amount, i) => 
    amount * values[i])) >= amountDue

