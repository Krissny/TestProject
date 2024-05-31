function caesarCipher(str, shift) {
  let cipher = "";
  for (let i = 0; i < str.length; i++) {
    if (!/[a-zA-Z0-9]/.test(str[i])) {
      cipher += str[i];
    } else {
      cipher += getNextChar(str, i, shift);
    }
  }
  return cipher;
}

function getNextChar(str, index, shift) {
  let code = str.charCodeAt(index) + shift;
  if (code > 90 && code < 97) {
    let diff = code - 91;
    // console.log(str[index], diff);
    code = 65 + diff;
  } else if (code > 122) {
    let diff = code - 123;
    code = 97 + diff;
  }
  return String.fromCharCode(code);
}

module.exports = caesarCipher;
