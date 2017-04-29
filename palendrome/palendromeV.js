function palindrome(str) {
    // if the string is a length of 2
    if (str.length<=2) {
        return str == [...str].reverse().join('') ? str : null;
    }
    str = [...str];
    let res = [];
    str.map((a,i) => {
        // odd numbered palindromes
        if (i>0 && i<str.length-2) {
            let x=i-1, y=i+1;
            while (x>=0 && y<=str.length-1) {
                if (str[x] !== str[y]) break;
                res.push(str.slice(x,y+1).join(''));
                // console.log(i,x,y);
                x--;
                y++;
            }
        }
        // even numbered palindromes
        if (i<str.length-2) {
            let x=i, y=i+1;
            while (x>=0 && y<=str.length-1) {
                if (str[x] !== str[y]) break;
                res.push(str.slice(x,y+1).join(''));
                x--;
                y++;
            }
        }
    })
    // assuming there is always a palindrome
    return res.sort((a,b) => a.length > b.length ? -1 : 1)[0];
    // otherwise: return res.length > 0 ? res.sort((a,b) => a.length > b.length ? -1 : 1)[0] : null;
}

console.log(palindrome("61234321512"));
console.log(palindrome("eabcddcbafgf"));
console.log(palindrome("34333343"));