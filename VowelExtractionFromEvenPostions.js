const str = "hello World";
const vowels = "aeiouAEIOU";
let evenCharVowels = "";

for (let i = 0; i < str.length; i += 2){
    if (vowels.includes(str[i])){
        evenCharVowels += str[i];
    }
}
console.log(evenCharVowels);