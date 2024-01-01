/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if ( n === 1) return 1;

    let dp = [];

    dp[1] = 1;
    dp[2] = 2;

    for( let i = 3; i<= n; i++) {
        dp[i] = dp[i-1] + dp[i-2]
    }
    return dp[n]
};



// explanation https://www.youtube.com/watch?v=UUaMrNOvSqg


/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    
    if (n < 2) {
        return 1;
    }
    
    let firstStep = 1;
    
    let secondStep = 1;
    
    let thirdStep = 0;
    
    for (let i = 2; i <= n; i++) {
        
        thirdStep = firstStep + secondStep;
        
        firstStep = secondStep;
        
        secondStep = thirdStep;
    }
    return thirdStep;
};