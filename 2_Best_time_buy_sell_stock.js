// brute force way that doesn't work on time litmit of huge collectionm 


let output = 0;

for( let i = 0 ; i<prices.length; i++) {
    const checkNumber = prices[i];

    for(let j=i;j<prices.length;j++){
        const result = prices[j] - checkNumber;

        if(result>output){
            output = result;
        }
    }
}

return output;


// explanation
// https://www.youtube.com/watch?v=ipClF88Tkks




var maxProfit = function(prices) {
   let minBuyPrice = prices[0];
   let max =0;

   for( let i = 1; i < prices.length; i++ ){
       const sellPrice = prices[i];
       minBuyPrice = Math.min(sellPrice,minBuyPrice);
       profit = sellPrice - minBuyPrice;
       max = Math.max(profit,max);
   }
   return max;
};

