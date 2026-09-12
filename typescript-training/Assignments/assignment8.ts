let stringParagraph: string = "Java is a popular programming language. Java is used for webdevelopment, mobile applications, and more.";
let stringSentence: string[] = stringParagraph.split(" ");
let count: number = 0
for (let i: number = 0; i < stringSentence.length; i++) {
    if (stringSentence[i] == "Java") {
        count++;
        let index: number = i;
        console.log("occurence:" + stringSentence[i] + "--count:" + count + "--index:" + index);

    }

}
