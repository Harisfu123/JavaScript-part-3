function reverseString(str) {
    // TODO: answer here
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

const string = prompt('Masukan teks: ');

const result = reverseString(string);
console.log(result);