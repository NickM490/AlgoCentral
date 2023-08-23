// WRITE A FUNCTION THAT RETURNS WHETHER THE GIVEN ARRAY HAS A BALANCE POINT BETWEEN THE VALUES
// WHERE ONE SIDE IS EQUAL TO THE OTHER

function balancePoint(arr){
}
// console.log(balancePoint([1,2,3,4,10])) // TRUE
// ---> 1+2+3+4 = 10     10 == 10 so balanced
// console.log(balancePoint([1,2,3,2,1])) // FALSE
// console.log(balancePoint([1,2,3,1,2,3,2,1])) // FALSE
// console.log(balancePoint([2,2])) // TRUE

function balanceIndex(arr) {
}

// console.log(balanceIndex([-2,5,7,0,3]))  // TRUE
// console.log(balanceIndex([9,9])) // FALSE
// console.log(balanceIndex([4,2,2,6])) // TRUE
// console.log(balanceIndex([9,1,9])) // TRUE
// console.log(balanceIndex([1,8,1,2,3,4])) // TRUE




// WRITE A FUNCTION THAT RETURNS WHETHER THE GIVEN ARRAY HAS A BALANCE POINT BETWEEN THE VALUES
// WHERE ONE SIDE IS EQUAL TO THE OTHER

function balancePoint(arr){
    var sum = 0;
    var leftSum = 0;

    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    for (i = 0; i < arr.length; i++) {
        leftSum += arr[i];
        sum -= arr[i];
        if (leftSum == sum) {
            return true;
        }
    }
    return false;
}

// console.log(balancePoint([1,2,3,4,10])) // TRUE
// ---> 1+2+3+4 = 10     10 == 10 so balanced
// console.log(balancePoint([1,2,3,2,1])) // FALSE
// console.log(balancePoint([1,2,3,1,2,3,2,1])) // FALSE
// console.log(balancePoint([2,2])) // TRUE

// ====================================================
// ====================================================

// WRITE A FUNCTION THAT RETURNS WHETHER THE GIVEN ARRAY HAS A BALANCE INDEX
// WHERE THE SUM ON EITHER SIDE OF THE INDEX (PIVOT POINT) IS THE SAME
// THINK OF THE INDEX IN THE ARRAY AS THE POINT




function balanceIndex(arr) {
    let total = arr.reduce((a, b) => a + b);
    let sumLeft = 0;
    if(arr.length < 3){
        return "no index"
    }
 
    for (let i = 0; i < arr.length; i++) {
        total = total - arr[i];
        //compares the sum to the left of current index against total
        if (sumLeft === total) {
            // if the sums match, the current index will be returned
            return i;
        }
        sumLeft += arr[i];
    }
    return -1;
    // RETURNING -1 SHOWS THAT THERE IS NO INDEX IN THE ARRAY THAT EXISTS
}

// console.log(balanceIndex([-2,5,7,0,3]))  // TRUE
// console.log(balanceIndex([9,9])) // FALSE
// console.log(balanceIndex([4,2,2,6])) // TRUE
// console.log(balanceIndex([9,1,9])) // TRUE
// console.log(balanceIndex([1,8,1,2,3,4])) // TRUE





function BalancePoint2(arr){
    var sumright = 0, sumleft = 0, counter = 1
    for (var i = 0; i < arr.length; i++){
        sumright += arr[i]
    }
    while (sumleft != sumright && ((arr.length - counter) > 0)){
        sumright -= arr[arr.length - counter]
        sumleft += arr[arr.length - counter]
        counter++
    }
    if (sumleft == sumright){
        return true
    }else{
        return "no balance point"
    }
}

function balancePointRecursive(arr, div = 1, rightSum = 0, leftSum = 0){
    //if the length of the array is 1 or 0 we return false
    if(arr.length === 1) return false;
    if(arr.length === 0) return false
    // gather left side of the div sum
    for(let i = 0; i < div; i++){
        leftSum += arr[i];
    }
    // gather right side of the div sum
    for(let j = arr.length-1; j >= div; j--){
        rightSum += arr[j];
    }
    if(rightSum === leftSum) return true;
    else if(div === arr.length-1 && rightSum !== leftSum) return false;
    //increment div point, revert both sums to 0, and call the function on itself to start over until we meet our return statements
    div++;
    rightSum = 0;
    leftSum = 0;
    return balancePointRecursive(arr, div, rightSum, leftSum);
}
balancePointRecursive([1,2,3,4,10]);
function balanceIndex2(arr){

    for(let i = 0; i < arr.length; i++){

        let sumLeft=0, sumRight=0;
        // find the sum of the values to the left of i

        for(let j = 0; j < i; j++){
            sumLeft += arr[j];
        }   // first time: this will always come back as 0

        // find the sum of the values to the right of i
        for(let j=arr.length - 1; j > i; j--){
            sumRight += arr[j];
        }   // first time, this will always come back as the sum of the whole array

        if(sumLeft === sumRight) return i;
    }

    // if we get all the way through the "i" loop and haven't returned true yet:
    return -1;
}

function balanceIndexMoreEfficient(arr){

    // find the sum of the entire array
    let sum = 0, start = 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
    }

    for(let j=0; j<arr.length; j++){
        sum -= arr[j];
        if(sum === start) return j;
        start += arr[j];
        return true;
    }
    return -1;
}


console.log(BalancePoint2([1,2,0,32,35,0]))
console.log(balanceIndexMoreEfficient([1,2,3,1,2,3,2,1]))