// Caesars Cipher
// URL: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher

function rot13(str) {
  let newStr = "";
  for (let char_id in str) {
    if (str.charCodeAt(char_id)>=65 && str.charCodeAt(char_id)<78){
      newStr += String.fromCharCode(str.charCodeAt(char_id)+13);
    } else if (str.charCodeAt(char_id)>=78 && str.charCodeAt(char_id)<91) {
      newStr += String.fromCharCode(str.charCodeAt(char_id)-13);
    } else {
      newStr += str[char_id];
    }
  }
  return newStr;
}
