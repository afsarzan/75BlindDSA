/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    intervals.push(newInterval)
    if (intervals == null || intervals.length == 0) return ans;

    if (!intervals.length) return [];
    intervals.sort((a, b) => a[0] - b[0]);

    
    // console.log({intervals})
    const result = [intervals[0]];

    for( let [start,end] of intervals){
        const endPrev = result.at(-1)[1];

        if( start<=endPrev){
            result.at(-1)[1] = Math.max(end,endPrev);
        } else {
            result.push([start,end])
        }
    } 
    return result;
};