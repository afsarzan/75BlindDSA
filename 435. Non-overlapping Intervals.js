/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
    // intervals.sort((a, b) => a[0] - b[0]);

    // console.log({intervals: intervals[1]})

    // let res=0;
    // let left = 0;
    // // let [oS,oE] = intervals[left+1];
    // for( let [start,end] of intervals) {

    //         const ji = left+1;
    //         console.log({ji})
    //         let [oS,oE] = intervals[ji];

    //         if(end=>oS && end<=oE){
    //             res++
    //         }
    //     left++;
    // }

    // return res;

    if (intervals.length === 0) return 0;

    // Sort by end time (more efficient for this problem)
    intervals.sort((a, b) => a[1] - b[1]);

    let res = 0;
    let prevEnd = intervals[0][1];


    for (let i = 1; i < intervals.length; i++) {
        let [start, end] = intervals[i];
        console.log({intervals, start, end,  prevEnd})
        if (start < prevEnd) {
            // Overlap detected
            res++;
        } else {
            // No overlap, update prevEnd
            prevEnd = end;
        }
    }

    return res;

};