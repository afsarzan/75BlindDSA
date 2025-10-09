/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {

    let s_arr = s.split('');
    let t_arr = t.split('');
    let l = 0; let r = 0;
    const subString = {};
    let counter = 0;
    let ans = "";
    let min = Number.MAX_SAFE_INTEGER;
    for (let c of t_arr) {
        subString[c] = (subString[c]||0) + 1
    }

    while (r < s_arr.length) {
        const curChar = s_arr[r];
        subString[curChar] = (subString[curChar]||0)-1;
        if (subString[curChar] >= 0) {
            counter++
        }
        while (counter === t_arr.length) {
            let currWindow = r - l + 1;
        console.log({counter,currWindow,min})
            if (currWindow < min) {
                min = currWindow;
                ans = s.substring(l, r + 1)
            }
            let leftChar = s_arr[l];
            subString[leftChar] = subString[leftChar] + 1;
            if(subString[leftChar]>0){
                counter--;
            }
            l++
        }
        r++;
    }

    return ans;
    // console.log({subString})

    //     const subString = new Map();
    //     for (let c of t) {
    //         subString.set(c, (subString.get(c) || 0) + 1)
    //     }

    //     let minResult = Number.MAX_SAFE_INTEGER;
    //     let left = 0;
    //     let temp = new Map(subString);
    //     let result = [];
    //     let minSubArray = []
    //     let startIndex = false;
    //     while (left < s.length) {
    //         console.log('left:' + s[left])
    //         if (temp.has(s[left])) {
    //             temp.set(s[left], temp.get(s[left]) - 1);
    //             startOf = true;
    //         }
    //         console.log({startOf})
    //          if (startOf) {
    //             result.push(s[left])
    //         }

    //         if (!temp.has(s[left]) && subString.has(s[left])) {
    //             result =[s[left]];
    //             temp = new Map(subString);
    //             temp.set(s[left], temp.get(s[left]) - 1);
    //             // left++;
    //         }
    // //  console.log({ temp, left, minResult, result, minSubArray })

    //         if (temp.get(s[left]) === 0) {
    //             temp.delete(s[left])
    //         }
    //         console.log({ temp, left, minResult, result, minSubArray })

    //         if (temp.size === 0) {
    //             if(subString.has(s[left+1])) left--;
    //             if (minResult > result.length) {
    //                 minResult = Math.min(minResult, result.length)
    //                 temp = new Map(subString);
    //                 minSubArray = result;
    //                 result = [];
    //                 startOf = false;

    //             }
    //         }
    //         left++
    //     }

    //     return minSubArray.join('');
};