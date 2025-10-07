/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {

    // let char = s[0];
    // let max = 0;
    // let nmap = new Map();
    // for (let i = 0; i < s.length; i++) {
    //     let cc = s[i];
    //     console.log({ cc, char, k })
    //     if (cc != char && k != 0) {
    //         cc = char; k--;
    //     }

    //     if (k == 0 && cc != char) {
    //         console.log('set new map')
    //         char = cc;
    //         nmap = new Map();
    //     }

    //     if (nmap.has(cc)) {
    //         nmap.set(cc, nmap.get(cc) + 1)
    //     } else {
    //         nmap.set(cc, 1)
    //     }
    //     max = Math.max(max, nmap.get(cc))
    //     console.log({ max })
    // }

    // return max

    let left = 0, maxCount = 0;
    const freq = {};

    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        freq[char] = (freq[char] || 0) + 1;
        maxCount = Math.max(maxCount, freq[char]);

        if (right - left + 1 - maxCount > k) {
            freq[s[left]]--;
            left++;
        }
    }

    return s.length - left;
};