# We define super digit of an integer x using the following rules:

# Given an integer, we need to find the super digit of the integer.

## If x has only 1 digit, then its super digit is x.
## Otherwise, the super digit of x is equal to the super digit of the sum of the digits of x.
## For example, the super digit of 9875 will be calculated as:

### superDigit(9875)       9 + 8 + 7 + 5 = 29
### superDigit(29)         2 + 9 = 11
### superDigit(11)         1 + 1 = 2
### superDigit(2)          = 2

## You are given two numbers n and k. The number p is created by concatenating the string n k times. Continuing the above example where n = 9875, assume your value k = 4. Your initial p = 9875987598759875.

### superDigit(p) = superDigit(9875987598759875)
                    9+8+7+5+9+8+7+5+9+8+7+5+9+8+7+5 = 116
### superDigit(p) = superDigit(116)
                    1+1+6 = 8
### superDigit(p) = superDigit(8) = 8