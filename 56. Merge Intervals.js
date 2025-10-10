/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    if (intervals == null || intervals.length == 0) return ans;

    if (!intervals.length) return [];
    intervals.sort((a, b) => a[0] - b[0]);

    const result = [intervals[0]];
    for(let [start, end] of intervals) {

        console.log({start, end})
        const endPrev = result.at(-1)[1]
        if(start <= endPrev) result.at(-1)[1] = Math.max(end, endPrev);
        else result.push([start, end]);
        console.log({result})
    }
    return result;

    // let ai = 0;
    // let arrLen = intervals[0].length
    // for (let i = 0; i < intervals.length; i++) {
    //     const firstLower = intervals[i][0];
    //     const firstUpper = intervals[i][1];

    //     console.log({ firstLower, firstUpper })
    //     if (intervals[i + 1]) {
    //         const nextfirstLower = intervals[i + 1][0]
    //         const nextfirstUpper = intervals[i + 1][1]
    //         console.log({ nextfirstLower, nextfirstUpper })
    //         if (nextfirstLower <= firstUpper && firstUpper <= nextfirstUpper) {
    //             console.log('here 1')
    //             ans.push([firstLower, nextfirstUpper]);
    //             i++
    //         } else if (firstUpper > nextfirstLower && nextfirstUpper == firstLower) {
    //             console.log('here 2')
    //             ans.push([nextfirstLower, firstUpper]);
    //              i++
    //         }

    //         else if (nextfirstLower > firstUpper) {
    //             ans.push([firstLower, firstUpper]);
    //         }

    //     } else {
    //         ans.push(intervals[i])
    //     }

    // }


    // return ans;

};