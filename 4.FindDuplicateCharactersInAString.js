//https://www.youtube.com/watch?v=8ZWlT9uESbE

function duplicateCharcters(str){
    let characterCount = {};
    for (let character of str){
        characterCount[character] = (characterCount[character] || 0) + 1
    }

    for (const key in characterCount) {
        if(characterCount[key] > 1) {
            console.log(`Duplicate charcter = ${key}, count = ${characterCount[key]}`);
        }
        
    }
}
str = "programming"
duplicateCharcters(str);