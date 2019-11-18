# Exercise 1: 
# Create a function that accepts a single array as an argument.
# Given an array of integers, x, sort x and split the integers into
# three smaller arrays of equal length.If the length of x is not
# evenly divisible by three, increase the size of the smaller arrays
# by one starting from the first array.The function should return an array of arrays.

# Example: Input = [2, 1, 3, 4, 7, 5, 9, 6, 8, 13, 12, 11, 10, 0, 15, 16, 14]
# Output = [[0, 1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11], [12, 13, 14, 15, 16]]


def split_arrays(arr):
    # sort the inital array
    arr.sort()

    # use list comprehension to get number of elements in each subarray
    ranges = [(len(arr)//3) + (1 if i < len(arr) % 3 else 0) for i in range(3)]
    print(ranges)

    new_arr = []

    for j in range(len(ranges)):
        # append the elements from 0 to ranges[j] to the new_arr
        new_arr.append(arr[:ranges[j]])
        # slice off what was just appended
        arr = arr[ranges[j]:]

    return new_arr 

print(split_arrays([2, 1, 3, 5, 7, 5, 9, 6, 8, 13, 12, 11, 10, 0, 15, 16, 14]))





