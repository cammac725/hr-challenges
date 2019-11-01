function howManyGames(p, d, m, s) {
    // m == minimum cost allowed
    // s == money we start with to spend
    // d == discount
    // p == original price

    // start with p then decrease by d
    // take out p from s, then loop through
    // and then p minus d from s each time the loop runs until m
    let counter = 0

    if (s > p) {
        s -= p
        counter++
    }

    let salePrice = p

    while (s > m) {
        salePrice = (p - (d * counter))
        if (salePrice < m) {
            salePrice = m
        }
        if (s >= salePrice) {
            s -= salePrice
            counter++
        } else {
            break
        }
    }
    return counter
};

function howManyGames1(p, d, m, s) {
    let count = 1
    let x = s - p
    let i = 0
    do {
        currentP = Math.max(p - d * count, m)
        x = x - currentP
        count += 1
        i++
    } while (x >= m)
    return count
}

function howManyGames2(p, d, m, s) {
    // Return the number of games you can buy
    let count = 0;
    let price = p;

    while (price <= s) {
        s -= price;
        count++;
        price = Math.max(price - d, m);
    }

    return count;
}



//[Tests]

console.log(howManyGames1(20, 3, 6, 80)) // Should return 6 games
console.log(howManyGames1(20, 3, 6, 85)) // Should return 7 games
console.log(howManyGames1(35, 7, 14, 180)) // Should return 9 games
console.log(howManyGames1(73, 51, 43, 2873)) // Should return 66 games