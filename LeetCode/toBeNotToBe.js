/**
 * @param {string} val
 * @return {Object}
 */

// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

// var obj = {
//   value: null
// }
// var err = {
//     error: null
// }

var expect = function (val) {
  const myObj = {
    toBe (val1) {
      if (val === val1) {
        // obj.value = true
        return true
      } else {
        // err.error = "Not Equal"
        throw 'Not Equal'
      }
    },

    notToBe (val2) {
      if (val !== val2) {
        // {value = true};
        // obj.value = true
        return true
      } else {
        // err.error = "Equal"
        throw 'Equal'
      }
    }
  }
  return myObj
}

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
