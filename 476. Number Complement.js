/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    // for( let i =1; i<=num; i*=2) {
    //     num^=i
    // }
    // return num;

    let mask = 1;
    while (mask < num) {
        mask = (mask << 1) | 1;
    }   
    return num ^ mask;
};