
function palindromeCheck(word){
    var forword = word.replace(/\s/g, "").toLowerCase().split('')

    if (forword.join() === forword.reverse().join()){
        console.log('palindrome')
    } else {
        console.log('not palindrome')
    }

}


palindromeCheck("bab")