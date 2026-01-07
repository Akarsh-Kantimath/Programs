function firstNonRepeatingCharacter(str){
    let characterCount = {};
    for(let char of str) {
        characterCount[char] = (characterCount[char] || 0 ) + 1
    }

    for (let key in characterCount){
        if (characterCount[key] === 1) {
            console.log(`first non repeating character : ${key}`);
            break;
        }
    }
return null;
}

let str = 'aabby'
firstNonRepeatingCharacter(str);