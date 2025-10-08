/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    // console.log('After reverse '+s1.split('').reverse().join(''))
    // if(s2.includes(s1) || s2.includes(s1.split('').reverse().join(''))) return true;
    // return false

    // let s2r = s2.split('')
    // const n = s2r.length;
    //  for( let i = 0; i< n; i++) {
    //     let char = s2r[i];

    //     if(s1.contains(s))
    //  }

    // let n = s1.length
    // let m = s2.length
    // let map = {}
    // for (let c of s1) {
    //     map[c] = (map[c] ? map[c] : 0) + 1
    // }

    // let l = 0, r = 0
    // let c = 0
    // while (r < m) {

    // }
    // return false;

    let map = new Map();
    for (let c of s1) {
        map.set(c, (map.get(c) || 0) + 1)
    }

    let n = s1.length;
    let m = s2.length;

    for (let i = 0; i <= m - n; i++) {
        let temp = new Map(map);
        let j = 0;
        for (j = i; j < i + n; j++) {
            let c = s2[j];
            if (temp.has(c) && temp.get(c) > 0) {
                temp.set(c, temp.get(c) - 1)
            }
            else break;
        }

        if (j == i + n) return true;
    }
    return false;
};