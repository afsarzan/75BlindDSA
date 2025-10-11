/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (firstList, secondList) {

    let ans = [];

		let fIndex = 0;
		let sIndex = 0;
		let mS, mE;
    while (fIndex < firstList.length && sIndex < secondList.length) {
        mS = Math.max(firstList[fIndex][0], secondList[sIndex][0]);
        mE = Math.min(firstList[fIndex][1], secondList[sIndex][1]);

        if (mE >= mS)
            ans.push([mS, mE]);

        if (firstList[fIndex][1] == mE) fIndex++;
        if (secondList[sIndex][1] == mE) sIndex++;
    }

    return ans;

    // let ans = [];

    // if (firstList.length == 0 || secondList.length == 0) return ans;

    // let left = 0;
    // for (const [start, end] of firstList) {


    //     for (j = left; j < secondList.length; j++) {
    //         let [sStart, sEnd] = secondList[j];
    //             console.log({  start, end, sStart, sEnd })
    //         // if(end >= sStart){
    //         //     ans.push([sStart, end])
    //         // } else {
    //         //     break;
    //         // }

    //         if (sStart <= end && end < sEnd) {
    //             ans.push([sStart, end])
    //             left++
    //         } else if ( start == sEnd) {
    //             ans.push([start,sEnd])
    //             left++
    //         } else {
    //             break;
    //         }
    //             console.log({  ans })
    //     }
    // }
    // return ans;
};