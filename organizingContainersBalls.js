/*
David has several containers, each with a number of balls in it. He has just enough containers to sort each type of ball he has into its own container. David wants to sort the balls using his sort method.

As an example, David has n = 2 containers and 2 different types of balls, both of which are numbered from 0 to n - 1 = 1. The distribution of ball types per container are described by an n x n matrix of integers, M[container][type]. For example, M = [[1,4], [2, 3]]

In a single operation, David can swap two balls located in different containers.

David wants to perform some number of swap operations such that:
--Each container contains only balls of the same type.
--No two balls of the same type are located in different containers.

*/


function organizingContainers(container) {
    // make array of capacity of each container
    let capacityEach = [];
    // make array of total of each type
    let typeEach = [];
    // Capacity of each Continer 
    for (let i = 0; i < container.length; i++) {
        let total = 0;
        let type = 0;
        for (let j = 0; j < container[i].length; j++) {
            total = total + container[i][j];  // capacity;
            type = type + container[j][i];    // type;
        }
        capacityEach.push(total);
        typeEach.push(type)
    }
    // sort the arrays
    let sorted1 = capacityEach.sort((a, b) => a - b);
    let sorted2 = typeEach.sort((a, b) => a - b);

    // if they aren't the same, we can't swap evenly
    for (let i = 0; i < sorted1.length; i++) {
        if (sorted1[i] != sorted2[i]) {
            return 'Impossible';
        }
    }
    return 'Possible';
}