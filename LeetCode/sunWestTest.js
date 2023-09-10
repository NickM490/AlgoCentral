// If given a string, create a list or array of everything that is separated by a comma and a space.
// Have the output be ready for an html table

// Input: "Peter, John, James, Andrew, Philip, Thomas, Bartholomew, Matthew, James, Simon, Judas, Matthias"
// Output: ["Peter", "John", "James", "Andrew", "Philip", "Thomas", "Bartholomew", "Matthew", "James", "Simon", "Judas", "Matthias"]



// function createTable(arr) {
//     let table = document.createElement('table');
//     let tableBody = document.createElement('tbody');
//     for(var i = 0; i < arr.length; i++) {
//         let row = document.createElement('tr');
//         let cell = document.createElement('td');
//         let cellText = document.createTextNode(arr[i]);
//         cell.appendChild(cellText);
//         row.appendChild(cell);
//         tableBody.appendChild(row);
//     }
// }


// createTable(["Peter", "John", "James", "Andrew", "Philip", "Thomas", "Bartholomew", "Matthew", "James", "Simon", "Judas", "Matthias"])

// If given a string, create a list or array of everything that is separated by a comma and a space.

// Input: "Peter, John, James, Andrew, Philip, Thomas, Bartholomew, Matthew, James, Simon, Judas, Matthias"
// Output: ["Peter", "John", "James", "Andrew", "Philip", "Thomas", "Bartholomew", "Matthew", "James", "Simon", "Judas", "Matthias"]

function createArray(str) {
    let arr = str.split(',');
    return arr;
}

var test = createArray("Peter, John, James, Andrew, Philip, Thomas, Bartholomew, Matthew, James, Simon, Judas, Matthias")
console.log(test);