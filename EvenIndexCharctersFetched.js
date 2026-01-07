const str = "Hello World";
let evenChar = "";
//console.log(str.length); //11
for(let i = 0; i < str.length; i += 2 ){
    evenChar += str[i];
}
console.log(evenChar);

//============================================================
//Other way
const evenChar2 = str.split('').filter((char, index)=> index % 2 === 0).join('');
console.log(evenChar2);