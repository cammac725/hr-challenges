# Evaluating Circuit Expressions

# get something working that solves the simplest case
# different operators may require different numbers of operands
# !: flips the operator
# &: if there is a single 0, returns 0
# |: if there is a single 1, returns 1

from functools import reduce

# the operator will always be at the beginning of the expression
example = '[&, 1, 0, 1, 1, 0]'

# def evaluate_circuit_expressions(expr):
    # traverse through our expr input
    # if we detect a nested subarray
    # recurse into nested subarray
    # base case: if we've landed in array that has no subarray
        # evaluate expression like we have been doing

    # how do we detect a nested subarray?
    # if we encounter an opening bracket, '['
        # recurse on nested subarray
    # when a recursively call on subarray returns, we need
    # the outer scope to skip the contents of the subarray to avoid dbl count

    # how do we know when an expression is complete?
    # if we encounter a closing bracket, ']'

def evaluate(operator, operands):

    answer = 0
    
    # use a switch/if statement where each branch handles an operator
    if operator == '&':
        # perform the AND operation
        # act on all of the elements in the operands array
        answer = reduce(lambda a, b: a and b, operands)

    if operator == '|':
        # perform the OR operation
        answer = reduce(lambda a, b: a or b, operands)

    if operator == '!':
        # perform the NOT operation
        # want this to return 0 or 1
        answer = 1 if not operands[0] else 0

    return answer


def parse_eval(expr):
    # if we define our operators beforehand
    # we can check if any of the tokens contain an operator
    # we can also check if any of the tokens contain a 0 or 1
    # and just pick those out

    # the '[' and ']' do convey meaning, it would be much more
    # useful to be able to pull them out individually
    
    operator = expr[1]
    operands = []

    pos = 4

    while expr[pos] != ']':
        # keep traversing thru our string
        if expr[pos] == '[':
            # recurse, passing the recursively call the current
            # char in the string all the way to the end
            answer, length = parse_eval(expr[pos:])
            operands.append(answer)

            # update our 'pos' index to move past the nested
            # subarray
            pos += length
        
        elif expr[pos] == '0' or expr[pos] == '1':
            operands.append(int(expr[pos]))

        pos += 1

    return evaluate(operator, operands), pos



print(parse_eval(example)[0])
