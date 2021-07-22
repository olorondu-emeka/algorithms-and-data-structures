function shiftSmallLetter(letter, key) {
  // a-z ranges from 97-122
  let newUnicode = letter.charCodeAt() + key;

  if (newUnicode <= 122) {
    return String.fromCharCode(newUnicode);
  } else {
    return String.fromCharCode(96 + (newUnicode % 122));
  }
}

function shiftCapitalLetter(letter, key) {
  // A-Z ranges from 65-90
  let newUnicode = letter.charCodeAt() + key;

  if (newUnicode <= 90) {
    return String.fromCharCode(newUnicode);
  } else {
    return String.fromCharCode(64 + (newUnicode % 90));
  }
}

function caesarCipher(s, k) {
  // Write your code here
  let key = k % 26; // handles edge case for large numbers
  let finalString = '';

  for (let letter of s) {
    if (letter.charCodeAt() >= 65 && letter.charCodeAt() <= 90) {
      finalString += shiftCapitalLetter(letter, key);
    } else if (letter.charCodeAt() >= 97 && letter.charCodeAt() <= 122) {
      finalString += shiftSmallLetter(letter, key);
    } else {
      finalString += letter;
    }
  }

  return finalString;
}

function groupStrings(inputArray) {}
