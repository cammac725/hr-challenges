def truckTour(petrolpumps):
    # init queue 
    route = Queue()

    # add all the pumps to the queue 
    for p in petrolpumps:
        route.put(p) 
    # var to hold the pump we end up starting at 
    start = 0
    # var to keep track of the number of pumps we've traversed 
    passed = 0
    # amount of gas we have 
    gas = 0

    # loop so long as we haven't passed every single pump 
    while passed < len(petrolpumps):
        # get the next pump along the route 
        pump = route.get() 
        # add the amount of gas it has available 
        gas += pump[0]
        # check if our gas tank has enough to get us 
        # to the next pump 
        if gas >= pump[1]:
            # increment passed counter 
            passed += 1
            # decrement by the amount of gas it takes to get there 
            gas -= pump[1] 
        # if it doesn't, reset our gas tank, the number of pumps
        # we've passed, and move on to consider the next pump
        else:
            # otherwise, starting at the pump we started at 
            # isn't a viable option, so let's consider the 
            # pump after the one we're currently on 
            start += passed + 1
            # reset passed counter 
            passed = 0
            # reset gas counter 
            gas = 0
        # add the pump to the back of the route 
        route.put(pump)
    # at this point, we've found the starting pump that will
    # allow us to traverse all of the pumps; return it
    return start