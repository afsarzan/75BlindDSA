/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {

    const charArr = new Array(26).fill(0);
    for(let i=0; i<p.length; i++){
        const character = p[i];
        charArr[character.charCodeAt(0) - 97]++;
    }

    let i=0, j=0, result = [];

    while(j < s.length){
        charArr[s[j].charCodeAt(0) - 97]--;
        if(j - i + 1 == p.length){
            if(allZeores(charArr)){
                result.push(i)
            }

            charArr[s[i].charCodeAt(0) - 97]++;
            i++;
        }
        j++;
    }

    function allZeores(charArr){
        for(let i=0; i<charArr.length; i++){
            if(charArr[i] != 0){
                return false
            }
        }
        return true
    }
    return result  
};