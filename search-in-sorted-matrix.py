
def search_in_sorted_matrix(matrix, target):
    # init row and col
    row = 0
    col = len(matrix[0]) - 1

    # we'll traverse as long as the row index < len(matrix)
    # and col index >= 0
    while row < len(matrix) and col >= 0:
        # check if value at these coorinates > target
        # if so, we eliminate the column, decr col
        if matrix[row][col] > target:
            col -= 1
        # if value here < target
        # eliminate this row
        elif matrix[row][col] < target:
            row += 1
        # otherwise, the value == target
        else:
            return [row, col]

    # we've traversed throught the matrix and didn't
    # find what we're looking for
    return [-1, -1]
    
    # r = num rows, c = num columns
    # loop through each of the rows, starting with last row  O(r)
        # check if first row element is greater than the target
            # if it is, skip to next iteration
        # if first row element < target
            #  perform a binary search  O(log c)
    # if we reach the end of the loop, that means we 
    # searched through every row in the matrix and
    # didn't find what we were looking for, return [-1, -1]


matrix = [
    [1, 4, 7, 12, 15, 997, 999],
    [2, 5, 19, 31, 32, 35, 1001, 1007],
    [4, 8, 24, 34, 36, 1008, 1015],
    [40, 41, 42, 44, 45, 1018, 1020],
    [98, 99, 101, 104, 190, 1021, 1025]
]

target = 1008

print(search_in_sorted_matrix(matrix, target))
    
