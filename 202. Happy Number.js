/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    const existNum = []
    if (n === 1) return true;
    return isHappyNumber(n, existNum);
};

var isHappyNumber = (n, exist) => {
    if (exist.includes(n)) return false;
    exist.push(n);
    const nr = n.toString().split('');
    let total = 0;
    for (let i = 0; i < nr.length; i++) {
        total += nr[i] * nr[i];
    }
    if (total === 1) {
        return true;
    } else {
        return isHappyNumber(total, exist)
    }
}


// optimized version

// /**
//  * @param {number} n
//  * @return {boolean}    
//  ** /
var isHappy = function(n) {
    let slow = n;
    let fast = getNext(n);
    while(fast != 1 && slow != fast) {
        slow = getNext(slow);
        fast = getNext(getNext(fast));
    }
    return fast == 1;
}
var getNext = (n) => {
    let total = 0;
    while(n > 0) {
        let d = n % 10;
        total += d * d;
        n = Math.floor(n / 10);
    }   
    return total;
}