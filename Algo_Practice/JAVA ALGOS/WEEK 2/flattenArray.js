// Flatten Array

// Given a 2 dimensional array (an array containing arrays),
//  return a new array containing just the values from inside 
//  the sub-arrays. Don't assume the array will always be the same size, 
//  or that the sub-arrays are all the same length (the array might be jagged). 
//  Don't use built-in methods like Array.prototype.flat() but feel free to use 
//  .push(value) and/or .pop() where needed.



// complete the following function
function flatten(arr2d) {
    var flat = [];
    // your code here
    return flat;
}
    
var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]

function flatten1(arr2d) {
    var flat = [];
    for(let i=0; i < arr2d.length; i++){
        for(let j=0; j < arr2d.length; j++){
            flat.push(arr2d[i][j]);
        }
    }
    return flat;
}
    
var result1 = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]


const flatRec2 = (arr, output = [], i=0) =>{
    //(arr, output = [], i =0) are the arguments being passed in
    // if this function was not recursive, then output and i would be declared inside the function
    // since this function is recursive we need to declare these variables in the arguments, and give them default values which is why you see output = [] and i = 0 instead of just output, i
    
    // i is our iterator, basically the same thing you would use in a 'for' loop! We will be using it to show us the value of the array at arr[i]


    // checking the data structure that is being passed in as the variable 'arr'
    // if the variable 'arr' is NOT an array, we return that value inside of an array (      [someVal]      )
    if(!Array.isArray(arr)) return [arr];


    // i is iterating through the array, so if i is equal to the array's length we will return the output because there is nothing else to iterate over
    // this is also known as a base case
    // without a base case, a recursive function will go into an infinite loop and will not return anything
    if(i === arr.length) return output;


    // Here we are checking the value of arr[i]. If that value is NOT an array, we just push it to our output!
    if(!Array.isArray(arr[i]) ) output.push(arr[i]);

    // Here we know that the value arr[i] is an array, so then we have to push, or concat the individual values of that nested array, because we don't want to push the whole array. 
    // If we pushed or concat the nested array itself, then we will end up with a nested array in our output which is NOT what we want
    else output = output.concat(flatRec2(arr[i]));

    // This is how we know the function is recursive. Instead of returning the output, we return the function itself!
    // This runs the function again, while incrementing i
    return flatRec2(arr, output, i+=1);
}

var result1 = flatRec2( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result1);