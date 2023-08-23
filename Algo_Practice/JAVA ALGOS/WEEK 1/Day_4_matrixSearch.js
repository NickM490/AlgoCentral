// Matrix Search

var big = [
    [67,34,45,56],
    [98,87,76,65],
    [56,67,78,89],
    [54,43,32,21]
];

var small = [
    [67,78],
    [43,32]
];

var anotherSmall = [
    [67,7],
    [43,32]
];


// for(var i = 0; i < big.length; i++) {
//     console.log(big[i][0])
    
// }


function matrixSearch (larger, smaller) {
    // Loops through the large matrix
    for(var i = 0; i < larger.length; i++) {
        for (var j = 0; j < larger[0].length; j++) {
            // At every index of the larger check to see if the top left corner of the smaller matches
            console.log("Is smaller [0][0] equal to larger [i][j]? - " + smaller[0][0]+ "," + larger[i][j]);

            if (smaller[0][0] === larger[i][j]) {
                console.log("We found a match!")
                // If match then we continue searching for a deeper match
                var isMatched = true;

                for (var k = 0; k < smaller.length; k++) {
                    for (var l = 0; l < smaller[0].length; l++) {
                        // Checks to see if there are no matches for the bottom row in the smaller.
                        console.log("Is smaller [k][l] not equal to larger [i+k][j+l]? - " + smaller[k][l]+ "," + larger[i+k][j+l]);

                        if(smaller[k][l] != larger[i+k][j+l]) {
                            isMatched = false;
                            break;
                        }
                    }
                    
                    if (!isMatched) {
                        break;
                    }
                }
                if (isMatched) {
                    return true;
                }
            }
            
        }
    }
    return false;
}

console.log(matrixSearch(big, small))
console.log(matrixSearch(big, anotherSmall))






var big = [
    [67,34,45,56],
    [98,87,76,65],
    [56,67,78,89],
    [54,43,32,21]
];

var small = [
    [67,78],
    [43,32]
];

var anotherSmall = [
    [67,7],
    [43,32]
];



function matrixSearch (larger, smaller) {
    
    for (i=0;i<larger.length;i++){
        for (j=0;j<larger[i].length;j++){
            if (smaller[0][0] == larger[i][j] && j != larger[i].length-1 && 
                smaller[0][1] == larger[i][j+1] && 
                smaller[1][0] == larger[i+1][j] && i != larger.length-1 && 
                smaller[1][1] == larger[i+1][j+1]){
                return true
            }
            else { return false }
        }
    }
}


console.log(matrixSearch(big, small))

console.log(matrixSearch(big, anotherSmall))


function matrixSearch(larger, smaller) {
    var output = false;
    larger.forEach((element, idx) => {
        var numPosition = element.indexOf(smaller[0][0]);
        console.log(numPosition);
        if (numPosition > -1) {
            let si = 0;
            let sj = 1;
            let match = true;
            while (match && si < smaller.length) {
                if (sj >= smaller[si].length) {
                    sj = 0;
                    ++si
                }
                if (si < smaller.length) {
                    if (idx + si >= larger.length || numPosition + sj >= larger[0].length) {
                        match = false;
                    }
                    console.log(idx + si);
                    console.log(numPosition + sj);
                    console.log();
                    if (larger[idx + si][numPosition + sj] != smaller[si][sj]) {
                        match = false;
                    }
                    ++sj
                }
            }
            if (match) {
                output = true;
            }
        }
    });
    return output;
}
console.log(matrixSearch(big,small));
console.log(matrixSearch(big,anotherSmall));
