/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    if(a==0) return b;
    if(b == 0 ) return a;
    return getSum((a^b),(a&b)<<1);  
};

// good explanation  https://www.youtube.com/watch?v=gG3aJrbszFI

   //solving it by bit manipulation

   let carry;
   while(b){
       carry = a&b;
       a = a^b;
       b = carry << 1;
   }

   return a;