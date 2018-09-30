module.exports = function makeExchange(currency) {
    if (currency <= 0) {
        return [];
    } else if (currency >= 10000) {
        let rich = {
            error: "You are rich, my friend! We don't have so much coins for exchange"
        };
        return rich;
    } else {
        let remainder = currency,
            exchange = [],
            item;
        const coins = [50, 25, 10, 5, 1];

        for (item in coins) {
            exchange[item] = (Math.floor(remainder / coins[item]));
            remainder = (remainder - (exchange[item] * coins[item]));
        }

        let completeExchange = {}
        Object.assign(completeExchange,
            exchange[0] !== 0 && {
                H: exchange[0]
            },
            exchange[1] !== 0 && {
                Q: exchange[1]
            },
            exchange[2] !== 0 && {
                D: exchange[2]
            },
            exchange[3] !== 0 && {
                N: exchange[3]
            },
            exchange[4] !== 0 && {
                P: exchange[4]
            }
        );
        return completeExchange;
    }
}
