function sigma(num) {
    // We always have to have a base case in recursion.
    if (num <= 1) {
        return num;
    }
    else {
        // Removed the else statement for funsies :-)
    }

}


console.log(sigma(5));
console.log(sigma(55));
console.log(sigma(3));
console.log(sigma(1));
console.log(sigma(0));
console.log(sigma(10));


function factorial(num) {
    // We always have to have a base case in recursion.
    if (num <= 1) {
        return num;
    }
    else {
        return num * sigma(num - 1)  ;
    }

}


console.log(factorial(0));
console.log(factorial(3));
console.log(factorial(10));