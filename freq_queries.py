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
# queries = [(1, 1), (2, 2), (3, 2), (1, 1), (1, 1), (2, 1), (3, 2)]
# queries = [(3, 4), (2, 1003), (1, 16), (3, 1)]
queries = [(1, 3), (2, 3), (3, 2), (1, 4), (1, 5), (1, 5), (1, 4), (3, 2), (2, 4), (3, 2)]


from collections import defaultdict

# Complete the freqQuery function below.


def freqQuery(queries):
    output = []
    val_counts = defaultdict(int)
    freq_counts = defaultdict(int)

    for i, j in queries:
        # if we see a 1 query
        if i == 1:                        # O(1)
            if j in val_counts:
                # decrement the value's old count before anything else
                if freq_counts[val_counts[j]] > 0:
                    freq_counts[val_counts[j]] -= 1
                val_counts[j] += 1
                # increment the frequency in freq_counts
                freq_counts[val_counts[j]] += 1 
            else:
                val_counts[j] = 1
                if freq_counts[val_counts[j]]:
                    freq_counts[val_counts[j]] += 1
                else:
                    freq_counts[val_counts[j]] = 1
        # if we see a 2 query
        if i == 2:                                     # O(1)
            # check that th value exists in val_counts
            if val_counts[j]:
                # decrement the old frequency count
                freq_counts[val_counts[j]] -= 1
                val_counts[j] -= 1
                # increment the frequency
                freq_counts[val_counts[j]] += 1
        # if we see a 3 query
        if i == 3:           # O(n) linear in number of key, value pairs
            # aim for O(1) runtime
            # check j in an object rather than array
            # instead of checking against the values in an object, it 
            # would be faster to check against the keys of an object
            if j in freq_counts and freq_counts[j] > 0:
                output.append(1)
            else:
                output.append(0)

    return output

print(freqQuery(queries))
