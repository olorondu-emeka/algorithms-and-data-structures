function shiftLetter(letter, key) {
  //   if (key < 0) {
  //     return String.fromCharCode(123 + key);
  //   }
  // a-z ranges from 97-122
  let newUnicode = letter.charCodeAt() + key;

  if (newUnicode <= 122) {
    return String.fromCharCode(newUnicode);
  } else {
    return String.fromCharCode(96 + (newUnicode % 122));
  }
}

function encrypt(message, shift) {
  let key = shift % 26; // handles edge case for large numbers
  let finalString = '';
  let numbers = {
    0: true,
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true
  };

  let numericOperators = {
    '+': true,
    '-': true
  };

  let longNumber = '';

  for (let i = 0; i < message.length; i++) {
    let letter = message[i];

    if (numbers[letter]) {
      finalString += letter;
      longNumber += letter;
    } else if (letter.charCodeAt() >= 97 && letter.charCodeAt() <= 122) {
      if (longNumber.length) {
        shift += parseInt(longNumber);
        if (shift < 0) shift = 123 + shift;

        key = shift % 26;
        longNumber = '';
      }
      finalString += shiftLetter(letter, key);
    } else {
      finalString += letter;
      if (numericOperators[letter]) {
        longNumber += letter;
      }
    }
  }

  console.log(shift);
  return finalString;
}

console.log(encrypt('pal-7antir', 4));
