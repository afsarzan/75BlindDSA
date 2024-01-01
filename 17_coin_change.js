/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let dp = new Array(amount+1).fill(Infinity);

    // base case
    dp[0] = 0

    for( let currentAmount = 1; currentAmount<=amount; currentAmount++) {
        for( let coin of coins) {

            if(currentAmount-coin >= 0){
                dp[currentAmount] =Math.min(dp[currentAmount],1+dp[currentAmount - coin])
            }
        }
    }

    return dp[amount] > amount ? -1 : dp[amount];
};

// Explanation https://www.youtube.com/watch?v=NNcN5X1wsaw
// code" https://www.youtube.com/watch?v=mSdNNaG5oPc