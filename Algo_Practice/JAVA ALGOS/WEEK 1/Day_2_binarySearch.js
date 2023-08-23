// Binary Search

// Given a sorted array and a value, return whether
//  the array contains that value. Do not sequentially 
//  iterate the array. Instead 'divide and conquer'. 
//  Taking advantage of the fact that array is sorted. 


function binarySearch(arr, value){
}

function binarySearchRecursive(arr, target){
}

// console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 9));
// ---> 1 2 3 4 5  |  6 7 8 9 10
// ---> 6 7  |  8 9 10
// ---> 8  [9]  10  (found)
 
// console.log(binarySearchRecursive([1,2,3,4,5,6,7,8,9,10,12,13], 10))    TRUE
// console.log(binarySearchRecursive([0, 2, 4, 6, 8, 10, 12, 14, 16], 9 ))    FALSE
// console.log(binarySearchRecursive([0, 2, 4, 6, 8, 10, 12, 14, 16], 16 ))    TRUE
// console.log(binarySearchRecursive([0, 2, 4, 6, 8, 12, 14, 16], 8 ))    TRUE
// console.log(binarySearchRecursive([8], 8 ))   TRUE


function binarySearch(arr, value){

    let start = 0;
    let end = arr.length;

    while(start < end){
        console.log(`Looping: start=${start} & end=${end}`);

        const midpoint = Math.floor((start + end) / 2);
        if(arr[midpoint] === value) return true;

        if(arr[midpoint] < value){
            start = midpoint + 1;
        }
        else if(arr[midpoint] > value){
            end = midpoint - 1;
        }

    }
    
    return arr[start] === value;
}

function binarySearchRecursive(arr, target){
    if (arr.length==0){
        return "You need an array, I do not see an array, I no likey :-("
    }
    if(arr.length==1){
        if(target==arr[0]){
            return true
        }
        else{
            return false
        }
    }
    middle=Math.floor(arr.length/2)
    if(target==arr[middle]){
        return true
    }
    else if(target>arr[middle]){
        arr=arr.slice(middle, arr.length)
        }
    else{
        arr= arr.slice(0,middle)
    }
    return binarySearchRecursive(arr, target)
}


function binarySearch(arr, value){
    let midpoint = Math.floor(arr.length / 2)
    let midpointVal = arr[midpoint]

    // Run the first if statement the value in the left of the array
    // value is 2, 2 < 5 then slice in half then given the new midpoint

    while (value !== midpointVal) {
    if (value < midpointVal) {
        arr = arr.slice(0,midpoint)
        midpoint = Math.floor(arr.length / 2)
        midpointVal = arr[midpoint]
        // else if run if the value is in the right of the array
    } else if (value > midpointVal) {
        arr = arr.slice(midpoint + 1)
        midpoint = Math.floor(arr.length / 2)
        midpointVal = arr[midpoint]
    }

        // Edge cases
        if(arr.length == 0) {
            return false
        }
    }
    return true

}

 
// console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 9));
// ---> 1 2 3 4 5  |  6 7 8 9 10
// ---> 6 7  |  8 9 10
// ---> 8  [9]  10  (found)
 
// console.log(binarySearchRecursive([1,2,3,4,5,6,7,8,9,10,12,13], 10))    TRUE
// console.log(binarySearchRecursive([0, 2, 4, 6, 8, 10, 12, 14, 16], 9 ))    FALSE
// console.log(binarySearchRecursive([0, 2, 4, 6, 8, 10, 12, 14, 16], 16 ))    TRUE
// console.log(binarySearchRecursive([0, 2, 4, 6, 8, 12, 14, 16], 8 ))    TRUE
// console.log(binarySearchRecursive([8], 8 ))   TRUE