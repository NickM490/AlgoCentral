// Create a function that, given an input string, returns a boolean true/false whether parentheses in that string are valid.

// Example 1:"y(3(p)p(3)r)s" --> true
// Example 2: "n(0(p)3" --> false
// Example 3: "n)0(t(o)k" --> false

// hint: consider using an array or object to solve


// check entire string, return true/false
// every single opening parens has a closing
// never hit an closing parens before a opening parens
// ONLY care about the parens in the string

function parensValid(string) {
    // your code here
    var count = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] == '(') {
            count++;
        }
        if (string[i] == ')') {
            count--;
        }

        if (count < 0) {
            return false;
        }
    }
    if (count != 0) {
        return false;
    }
    return true;
}
// parensValid("(())()") ---> true
// parensValid(")())()") ---> false


// Given a string, returns whether the sequence of various parentheses, braces and brackets within it are valid. 

// Example 1: "({[({})]})" --> true
// Example 2: "d(i{a}l[t]o)n{e!" --> false
// Example 2: "{{[a]}}(){bcd}{()}" --> true

// hint: consider using an array or object to solve

function bracketsValid(string) {
    // your code here
    var parenStack = []
    var checker = {
        '{': '}',
        '(': ')',
        '[': ']'
    };
    for (char of string) {
        if (char === '(' || char === '[' || char === '{') {
            parenStack.push(char)
            }
            else {
            if (checker[parenStack[parenStack.length - 1]] === char) {
                parenStack.pop()
            }
            else {
                return false
            }
        }
    }
    return true;
}
// bracketsValid("{([])}") ---> true
// bracketsValid("{([}") ---> false