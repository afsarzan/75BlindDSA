/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    let result =  [];
    let currLine = [];
    let currLen = 0;

    for ( let word of words) {
        
        if( currLine.length + word.length + currLen > maxWidth){
            
            for( i = 0; i<maxWidth-currLen; i++) {
                currLine[i % (currLine.length-1 || 1)] +=' ';                
                // curLine[i % (curLine.length - 1 || 1)] += ' ';
            }

            result.push(currLine.join(''));
            currLine = [];
            currLen = 0;
        }
        currLine.push(word);
        currLen += word.length;
    }

    let lastLine = currLine.join(' ');

    if(lastLine.length<maxWidth) {        
        result.push(lastLine+' '.repeat(maxWidth-lastLine.length))
    }


    return result;
};
