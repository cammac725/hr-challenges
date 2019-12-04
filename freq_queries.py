"""
You are given q queries. Each query is of the form two integers described below:
- 1 x : Insert x in your data structure.
- 2 y : Delete one occurence of y from your data structure, if present.
- 3 z : Check if any integer is present whose frequency is exactly . If yes, print 1 else 0.

The queries are given in the form of a 2-D array queries of size q where queries[i][0] contains the operation, and queries[i][1] contains the data element. For example, you are given array 
queries = [(1, 1), (2, 2), (3, 2), (1, 1), (1, 1), (2, 1), (3, 2)].

The results of each operation are:

Operation   Array   Output
(1,1)       [1]
(2,2)       [1]
(3,2)                   0
(1,1)       [1,1]
(1,1)       [1,1,1]
(2,1)       [1,1]
(3,2)                   1
Return an array with the output: [0, 1].

Complete the freqQuery function in the editor below. It must return an array of integers where each element is a 1 if there is at least one element value with the queried number of occurrences in the current array, or 0 if there is not.

"""
queries = [(1, 1), (2, 2), (3, 2), (1, 1), (1, 1), (2, 1), (3, 2)]

from collections import defaultdict

# Complete the freqQuery function below.


def freqQuery(queries):
    output = []
    obj = defaultdict(int)

    print(queries)
    
    for i, j in queries:
        # if we see a 1 query
        if i == 1:
            # O(1)
            # if the value is in our obj
            if j in obj:
                # increment it's count
                obj[j] += 1
            # if value isn't in our obj
            else:
                # insert the value into our obj
                obj[j] = 1
        # if we see a 2 query
        if i == 2:
            # O(1)
            # check the obj for that value, query[i][1]
            if j in obj and obj[j] > 0:
                # if we find it, delete it
                obj[j] -= 1
                # if not, return
        # if we see a 3 query
        if i == 3:
            # check the obj, and see if any value == frequency query[i][1]
            if j in obj.values():
                # O(n) linear in number of key, value pairs
                # if so, append 1 to output
                output.append(1)
            # if not, append 0 to output
            else:
                output.append(0)

    return output

print(freqQuery(queries))