const str = 'Hello World';
let evenChar = "";

for (let i = 0; i < str.length; i += 2) {
    evenChar += str[i];
}

let reverseEvenChar = "";
for (let i = evenChar.length - 1; i >= 0; i--) {
    reverseEvenChar += evenChar[i];
}

console.log(evenChar);
console.log(reverseEvenChar);

//======================================
//other way
const evenChar2 = str.split('').filter((char, index) => index % 2 === 0).join('');
console.log(evenChar2);

