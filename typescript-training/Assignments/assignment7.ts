let sentence: string = "Java programming is fun and challenging";
let count: number = 0;
let stringSentence: string[] = sentence.split(" ");

console.log("First character of each word to uppercase:::::::");
for (let i = 0; i < stringSentence.length; i++) {
    count++;
    let firstChar: string = stringSentence[i];
    // Convert the first character of each word to uppercase
    let FirstCharToUpperCase: string = firstChar.replace(firstChar[0], firstChar[0].charAt(0).toUpperCase());
    console.log(FirstCharToUpperCase);
}
console.log("-----------------------------")
// Count the total number of words in the sentence.
console.log("total number of words:" + count)
console.log("-----------------------------")
// sentence words in reverse order.
console.log("Reverse order::::::::::")

for (let j: number = stringSentence.length - 1; j >= 0; j--) {
    console.log(stringSentence[j]);
}