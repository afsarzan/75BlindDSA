/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    return isEqualStr(s) === isEqualStr(t);
};

let isEqualStr = (s) => {
    let res = [];
    let sl = s.length;
    let i =0;
    while(sl>0){
        if( s[i] === '#'){
            res.pop();
        }else {
            res.push(s[i]);
        }
        i++
        sl--
    }
    return res.join('')
}