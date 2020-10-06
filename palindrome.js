// Return true if the given string is a palindrome. Otherwise, return false.
// URL: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker

function palindrome(str) {
  str = str.replace(/[.,\/# !$%\^&\*;:|{}=\-_`~()]/g,"").toLowerCase();
  for (let i=0; i<str.length; i++) {
    if (str.charAt(i) != str.charAt(str.length - 1 - i)){
      return false;
    }
  }
  return true;
}
