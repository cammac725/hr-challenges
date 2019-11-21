""" Write a function that takes up to four digits of a phone number as a string, and returns a list of all of the words that can be written on the phone with that number.The permuted words should maintain the same order as the input digits. (You should return all permutations, not only English words.)

You're provided with a digits-to-letters mapping:
digits_to_letters = {
    0: '0',
    1: '1',
    2: 'ABC',
    3: 'DEF',
    4: 'GHI',
    5: 'JKL',
    6: 'MNO',
    7: 'PQRS',
    8: 'TUV',
    9: 'WXYZ'
}

For example, with the number 27, our function should return a list of all permutations that can be generated using the digits_to_letters mapping:

['AP', 'AQ', 'AR', 'AS', 'BP', 'BQ', 'BR', 'BS', 'CP', 'CQ', 'CR', 'CS']

"""

digits_to_letters = {
    0: '0',
    1: '1',
    2: 'ABC',
    3: 'DEF',
    4: 'GHI',
    5: 'JKL',
    6: 'MNO',
    7: 'PQRS',
    8: 'TUV',
    9: 'WXYZ'
}

def telephone_words(digits):
    # permutations means recursion might be best bet

    perms = []

    # check the length of digits
    # if it's 1, return the permutations corresponding to the outer loop
    if len(digits) == 1:
        perms.append(l)
    elif len(digits) == 2:
        # look at the letters at the first digit of the number, digits[0]
        for l in digits_to_letters[int(digits[0])]:
            # loop over the string that is the value at that key, digits[0].charAt(i)
            # for each of those chars
            for m in digits_to_letters[int(digits[1])]:
                # concat that char with each of the chars from the
                # string/value at the key that is the second "number" digit
                perms.append(l + m)
                # recurse, increment the char position in the 2nd string
    elif len(digits) == 3:
        for l in digits_to_letters[int(digits[0])]:
            for m in digits_to_letters[int(digits[1])]:
                for n in digits_to_letters[int(digits[2])]:
                    perms.append(l + m + n)
    elif len(digits) == 4:
        for l in digits_to_letters[int(digits[0])]:
            for m in digits_to_letters[int(digits[1])]:
                for n in digits_to_letters[int(digits[2])]:
                    for o in digits_to_letters[int(digits[3])]:
                        perms.append(l + m + n + o)
    return perms



# def telephone_words(digits):
#     perms = ['']
#     for digit in digits:
#         perms = helper_function(perms, digits_to_letters[int(digit)])
#     return perms


# def helper_function(words_so_far, letters):
#     new_words = []
#     for word in words_so_far:
#         for letter in letters:
#             new_words.append(word + letter)
#     return new_words


# def recurse(digits, words_so_far):
#     if len(digits) == 1:
#         return helper_function(words_so_far, digits_to_letters[int(digits[0])])
#     else:
#         # increment our "digits at" index based on how many letters we've built
#         # up already
#         # progressively remove digits until we get to len(digit) == 1
#         # remove the first digit from the input digits
#         # add its corresponding letters to our words array
#         first, rest = digits[0], digits[1:]
#         words_so_far = helper_function(words_so_far, digits_to_letters[int(first)])
#         return recurse(rest, words_so_far)


# def telephone_words(digits):
#     words = ['']
#     return recurse(digits, words)
    
            
print(telephone_words('278'))
