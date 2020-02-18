def array_diff(a, b):
    dict = {}
    for i in range(len(b)):
        dict[b[i]] = None
    return [i for i in a if i not in dict]
