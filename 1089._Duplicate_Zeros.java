// 1089. Duplicate Zeros

class Solution {
    public void duplicateZeros(int[] arr) {
        Queue<Integer> queue = new LinkedList<>();
        for ( int i = 0; i< arr.length; i++) {
            if( arr[i] == 0){
                queue.add(0);
                queue.add(0);
            } else {
                queue.add(arr[i]);
            }
            Integer first = queue.poll();
            arr[i] = first;
        }
    }
}


/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
    // arr.forEach((num,index) => {
    //     if(num == 0){
    //         arr[index+1] = 0
    //     }
    // })

    //[1,0,2,3,0,4,5,0]
 for (let i = arr.length - 1; i >= 0;  i--) {
           
            if (arr[i] === 0) {
                for (let j = arr.length-1; j > i; j--) {
                    arr[j] = arr[j - 1]
                }
            }
        }
};