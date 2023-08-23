// Given an array of numbers, return a string of those number, but sorted as though they are page numbers
// assume only numbers are in this array
// [1,13,14,15,37,38,70] => "1, 13-15, 37-38, 70"


function bookIndex(arr) {
    // your code here
    var returnArr = []
    
    for (var i = 0; i < arr.length; i++) {
        // IF CONSECUTIVE NUMBERS ARE FOUND
        if ((arr[i + 1] - arr[i]) == 1) {
            var dash = ''
            dash += arr[i]

            while ((arr[i + 1] - arr[i]) == 1) {
                i++
            }
            // END OF CONSECUTIVE NUMBERS
            dash = dash + "-" + arr[i]
            returnArr[returnArr.length] = dash
            //returnArr.push(dash) <-- same thing as line above but with built in function
        }
        // NON-CONSECUTIVE NUMBERS
        else {
            returnArr[returnArr.length] = arr[i]
            //returnArr.push(arr[i]) <-- same thing as line above but with built in function
        }
    }
    console.log(returnArr.toString())
    //console.log(returnArr.join(', ')) <-- similar to line above, just allows you to dictate spacing of string
}
bookIndex([1, 13, 14, 15, 37, 38, 70]);