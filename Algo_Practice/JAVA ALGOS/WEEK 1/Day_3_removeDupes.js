// GIVEN AN ARRAY, RETURN ARRAY WITHOUT DUPLICATES
// [1,2,1,3,4,2] => [1,2,3,4]

// CHALLENGE RETURN THE SAME ARRAY

function removeDupe(arr) {

}

function removeDupe(arr) {
    for (var i = 0; i < arr.length - 1; i++){
        for (var j = i + 1; j < arr.length; j++){
            if (arr[i] === arr[j]){
                arr.splice(j, 1);
            }
        }
    }
    return arr;
}

const removeDupe = (arr) => {
    const checkingSet = new Set()
    arr.forEach((value, idx) => checkingSet.has(value) ? arr.splice(idx,1) : checkingSet.add(value));
    return arr;
}

console.log(removeDupe([8, 9, 9, 10, 2, 2, 34]))

function removeDupe(arr) {
    //create a second array to evaluate: 
    var arr2 = [];
    var i = 0; 
    var contains = false;
//     //loop through original and compare to each of the arr2:
    while(i != arr.length){
        for(var j = 0; j < arr2.length; j++){
            if(arr[i] == arr2[j]){
                contains = true
                break;
            }
        }
        if(contains){
            arr.splice(i, 1)
        }
        else{
            arr2.push(arr[i])
            i++
        }
        contains = false;
    }
    return arr
}


function removeDupe(arr) {

    //remove Dupe with for loops
    // Creating empty array variable
    var newArr = [];

    // First for loop to keep track of i
    for(var i = 0; i < arr.length; i++) {

        // Second for loop to keep track of j compare to i
        for (var j = i + 1; j < arr.length; j++) {


            // Need to compare i and j ot see if they match
            // If they match the for loop will continue and push in the new array
            if (arr[i] == arr[j]) {
               // console.log(newArr.push(arr[j]))
                arr.splice(j,1)

                }
            }

            // Remove the duplicate if it exists
        }
        return arr
    }

console.log(removeDupe([1, 3, 3, 4, 2]));

console.log([1,2,1,3,4,2])
console.log([1,2,3])






























// SOLUTIONS

function removeDupe2(arr) {
    var newArr = [];
    newArr.push(arr[0]);
    for (let i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

function removeDupe3(arr) {
    var newArr = [];
    for(num in arr) {
        if(newArr.includes(arr[num])) {
            newArr.push(arr[num])
        }
    }
    return newArr;
}

// console.log(removeDupe3([1,2,1,3,4,2]))
// console.log(removeDupe3([1,2,3]))

// INLINE SOLUTION

function removeDupe5(arr) {
    var obj = {}
    for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) {
            obj[arr[i]] = 1
        }
        else{
            arr.splice(i,1)
            console.log("ARR AFTER SLICE: ", arr)
            i--
        }
    }
    return arr;
}

console.log(removeDupe5([1,2,1,3,4,2]))
console.log(removeDupe5([1,2,3]))

// WITHOUT BUILTINS

function removeDupe4(arr) {
    var temp = [];
    for (var i = 0; i < arr.length; i++) {
        var inArray = false;
        for(var j = 0; j < temp.length; j++) {
            if (arr[i] == temp[j]) {
                inArray = true;
            }
        }
        if (inArray == false) {
            temp.push(arr[i]);
        }
    }
    return temp;
}
removeDupe4([1,2,1,3,4,2])
console.log(removeDupe4([1,2,1,3,4,2]))
console.log(removeDupe4([1,2,3]))


function removeDupeInline(arr){
    for(num in arr){
        for(let i=num-1; i>=0;i--){
            if(arr[num]==arr[i]){
                console.log(arr[num],num)
                arr.splice(num,1)
            }
        }
       
    }
    return arr;
 }
  
 console.log(removeDupeInline([1,2,1,3,3,3,4,2]))
 console.log(removeDupeInline([1,2,3]))


 const removeDupes = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j+1] && i !== j+1) {
                arr.splice(j+1, 1);
            }
        }
    }
    return arr;
}

console.log(removeDupes([1,2,2,2,3,3,4,1,4,6,7,10,5,10,7,8,9]));