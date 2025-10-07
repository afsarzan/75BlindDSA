/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {

    let left = 0;
    let right = 0;
    let maxFruits = 0;
    let mapFruits = new Map();
    for (right = 0; right < fruits.length; right++) {
        let currentFruit = fruits[right];
        if(mapFruits.has(currentFruit)) { 
            mapFruits.set(currentFruit,mapFruits.get(currentFruit)+1)
        } else {
            mapFruits.set(currentFruit,1)
        }

// console.log({mapFruits})
        while (mapFruits.size>2) {
            const fruitCount = mapFruits.get(fruits[left]);
            if (fruitCount === 1){
                mapFruits.delete(fruits[left])
            } else {
                mapFruits.set(fruits[left],mapFruits.get(fruits[left])-1)
            }
            left++
        }
        maxFruits = Math.max(maxFruits,right-left+1)
    }
return maxFruits;
};