/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    // const output = [];
    // let idx = 1;
    // let merge = intervals[0]
    // if (intervals.length == 1) return intervals;
    // while (idx < intervals.length) {
    //     if (merge[1] >= intervals[idx][0] && merge[1] < intervals[idx][1]) {
    //         merge = [merge[0], intervals[idx][1]];
    //     } else {
    //         output.push(merge);
    //         merge = intervals[idx];
    //     }
    //     if (idx == intervals.length - 1) {
    //         output.push(merge);
    //     }
    //     idx++;
    // }

    // return output;


    // solution 2

    // if(!intervals.length) return [];
    // intervals.sort((a, b) => a[0] - b[0]);
    
    // const result = [intervals[0]];
    
    // for(let [start, end] of intervals) {
    //     const endPrev = result.at(-1)[1]
    //     if(start <= endPrev) result.at(-1)[1] = Math.max(end, endPrev);
    //     else result.push([start, end]);
    // }
    // return result;

    // solution 3

     let max = 0;
        for (let i = 0; i < intervals.length; i++) {
            max = Math.max(intervals[i][0], max);
        }

        let mp = new Array(max + 1).fill(0);
        for (let i = 0; i < intervals.length; i++) {
            let start = intervals[i][0];
            let end = intervals[i][1];
            mp[start] = Math.max(end + 1, mp[start]);
        }

        let res = [];
        let have = -1;
        let intervalStart = -1;
        for (let i = 0; i < mp.length; i++) {
            if (mp[i] !== 0) {
                if (intervalStart === -1) intervalStart = i;
                have = Math.max(mp[i] - 1, have);
            }
            if (have === i) {
                res.push([intervalStart, have]);
                have = -1;
                intervalStart = -1;
            }
        }

        if (intervalStart !== -1) {
            res.push([intervalStart, have]);
        }

        return res;
};