// Convert the given number into a roman numeral.
// URL: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter

function convertToRoman(num) {
 let str = '';
 if (num>=1000) {str+="M"; num-=1000; str+=convertToRoman(num)} else
 if (num>=900) {str += "CM"; num-=900; str+=convertToRoman(num)} else
 if (num>=500) {str+= "D"; num-=500; str+=convertToRoman(num)} else
 if (num>=400) {str+="CD"; num-=400; str+=convertToRoman(num)} else
 if (num>=100) {str+="C"; num-=100; str+=convertToRoman(num)} else
 if (num>=90) {str+="XC"; num-=90; str+=convertToRoman(num)} else
 if (num>=50) {str+="L"; num-=50; str+=convertToRoman(num)} else
 if (num>=40) {str+="XL"; num-=40; str+=convertToRoman(num)} else
 if (num>=10) {str+="X"; num-=10; str+=convertToRoman(num)} else
 if (num>=9) {str+="IX"; num-=9; str+=convertToRoman(num)} else
 if (num>=5) {str+="V"; num-=5; str+=convertToRoman(num)} else
 if (num>=4) {str+="IV"; num-=4; str+=convertToRoman(num)} else
 if (num>=1) {str+="I"; num-=1; str+=convertToRoman(num)}
 return str;
}
