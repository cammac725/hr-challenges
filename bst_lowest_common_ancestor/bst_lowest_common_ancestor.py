def lca(root, v1, v2):
    #Enter your code here
    # traverse thru the tree to find out where v1 and v2 are in the tree
    # why do we need to do this?

    # we're going to assume that v1 and v2 are in the tree

    # because we have a binary search tree
    # we have a clear idea about the locations of v1 and v2 in the tree

    # how do we know a node is the lca?
    # if v1 and v2 are on the opposite sides of a node, then
    # that node is the lca

    # iteratively
        # keep a current pointer to specify
        # the current node you're traversing
        # on in the tree
        # while current

    # recursively
        # check if v1 and v2 < root
            # recurse into left subtree by
            # calling the func with the left child and v1 and v2
        # if v1 and v2 > root
            # recurse into right subtree
            # calling the func with the right child and v1 and v2
        # otherwise, if (v1 <= root and v2 >= root) or
            # (v1 >= root and v2 <= root)
            # root is lca

    data = root.info

    if root is None:
        return None

    elif v1 < data and v2 < data:
        return lca(root.left, v1, v2)

    elif v1 > data and v2 > data:
        return lca(root.right, v1, v2)

    elif (v1 <= data and v2 >= data) or (v1 >= data and v2 <= data):
        return root
