// GIVEN A STRING, RETURN THE REVERSE OF THAT STRING
// "abcdefg" ===> return "gfedcba"
function reverseString(string) {
    // your code here

    var letterArr = str.split('');
    for (let i = 0; i < Math.floor(letterArr.length / 2); i++) {

        var temp = letterArr[i]
        letterArr[i] = letterArr[letterArr.length - 1 - i]
        letterArr[letterArr.length - 1 - i] = temp
    }
    console.log(letterArr.join(''))
}
reverseString("abcdef")


// GIVEN A STRING, RETURN THE ACRONYM OF THAT STRING
// GIVEN "LIVE FROM SATURDAY NIGHT LIVE"
// RETURN "LFSNL"
function acronym(string) {
    // your code here
    var list = string.split(" ")
    var returnString = ""
    for (let i = 0; i < list.length; i++) {
        returnString += list[i][0].toUpperCase();
    }
    console.log(returnString)
}
acronym("live from saturday night live")