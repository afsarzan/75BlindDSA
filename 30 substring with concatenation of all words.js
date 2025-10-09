/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {

    if (!s || !words || words.length === 0) return [];

    const wordLen = words[0].length;
    const wordCount = words.length;
    const totalLen = wordLen * wordCount;
    const ans = [];

    // Build frequency map of words
    const wordFreq = new Map();
    for (const word of words) {
        wordFreq.set(word, (wordFreq.get(word) || 0) + 1);
    }

    // Optimize: only check starting positions that align with word boundaries
    // Instead of checking every index, check every word-length offset

    for (let offset = 0; offset < wordLen; offset++) {

        let left = offset;
        let count = 0;
        const seen = new Map();
            // console.log({offset})

        for (let right = offset; right <= s.length - wordLen; right += wordLen) {
            const word = s.substring(right, right + wordLen)
             if (wordFreq.has(word)) {
                seen.set(word, (seen.get(word) || 0) + 1);
                count++

                // console.log({count,seen})
                // console.log(seen.get(word) +'>'+ wordFreq.get(word))
                while( seen.get(word) > wordFreq.get(word)){
                    const leftWord = s.substring(left,left+wordLen);
                    seen.set(leftWord, seen.get(leftWord) - 1);
                    left += wordLen;
                    count--;
                }

                // valid window
                if(count === wordCount){
                    ans.push(left)
                    const leftWord = s.substring(left,left+wordLen);
                    seen.set(leftWord, seen.get(leftWord) - 1);
                    left += wordLen;
                    count--;
                }
                


             } else {
                seen.clear();
                count = 0;
                left = right + wordLen
             }
        }
    }

    return ans;


    // const map = new Map();

    // for (word of words) {
    //     map.set(word, (map.get(word) || 0) + 1)
    // }

    // let l = 0;
    // let r = 0;
    // let wordLength = words[0].length;
    // let wordCount = words.length;
    // let ans = [];
    // while (r < s.length) {
    //     let temp = new Map(map);
    //     let checkCount = 0;
    //     let wordIndex = r;
    //     console.log('start at r:' + r)

    //     while(checkCount<wordCount){
    //         let toCheckWord = s.substring(wordIndex,wordIndex+wordLength);
    //         console.log({toCheckWord})
    //         if(temp.has(toCheckWord)){
    //             temp.set(toCheckWord,temp.get(toCheckWord) - 1);
    //             // r = r+wordLength;
    //         } else {
    //             break
    //         }
    //         if(temp.get(toCheckWord)==0){
    //             temp.delete(toCheckWord)
    //         }
    //         if(temp.size === 0) {
    //             ans.push(r);
    //             // r = r+wordCount/
    //             // console.log('start at:' + r)
    //             break;
    //         }
    //         wordIndex = wordIndex + wordLength
    //         checkCount++;
    //     }
    //     console.log('Reaching here r:' + r)
    //     r++
    // }

    // return ans;
};