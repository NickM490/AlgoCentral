function acronym(enterUrSentenceHere){
    var acronym = ""
    for(var i = 0; i < enterUrSentenceHere.length; i++){
        if (i == 0 && enterUrSentenceHere[i]!= ' '){
            acronym += enterUrSentenceHere[0];
        }

        if (enterUrSentenceHere[i] == " "){
            acronym += enterUrSentenceHere[i+1];
        }
        

    }

    return acronym.toUpperCase();

}

var split_this ="They don't know how it be"
console.log(acronym(split_this));


function reverseString(yourString){
    var newString= ""
    for (var i = (yourString.length-1) ; i >= 0; i--){
        newString += yourString[i];
    }
    return(newString)
}

console.log(reverseString(split_this))